import { data, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { useFilm } from "../../../context/filmcontext/filmcontext";
import ContentFilm from "./contentfilm/contentfilm"
import ShowTime from "./showtime/showtime"
function MovieDetail({movie,isLoading})
{
    
    const {GetTheaterOfFilm,GetShowTimeOfTheater} = useFilm()
    const {id} = useParams()     
    const [theaters,setTheaters] = useState([])
    const [isTime,setIsTime] = useState([])
    
    const Poster = movie.images.find(img => img.name === "Poster")?.imageUrl || ""
    const Day = new Date(movie.releaseDate.split("T")[0]).toLocaleDateString("vi-VN")
  

    useEffect(()=>{
        
        const getShowTimeOfTheater = async (id,theaterId) =>{
            const result = await GetShowTimeOfTheater(id,theaterId)
            return result.ShowTimes      
        }

        const getTheaters = async () => {
            
            const result = await GetTheaterOfFilm(id)
            
            if(result.success){
                const showTimes = await Promise.all(
                    result.Theaters.map(async (theater) => {
                        const showTime = await getShowTimeOfTheater(id,theater.id)
                        return {...theater,showTimes: showTime}
                    })  
                )
                setTheaters(showTimes); 
                setIsTime(showTimes.flatMap(st =>
                    {   
                        return st || [] 
                    }));
            }                    
        }
        getTheaters()
    },[id])


    
    
    return (
        isLoading 
        ?   <div>Loading.....</div> 
        :
            <div className="col-span-5 w-full">
                <div >
                    <div className="flex flex-col ">
                        <div className="grid grid-cols-3 gap-x-6 ">
                            <div className="col-span-1 ">
                                <img  
                                    src={Poster} 
                                    alt="Img" 
                                    className="object-cover w-full h-[50vh] border-3 border-white -translate-y-27  " 
                                />
                            </div>
                            <div className="col-span-2 gap-5">   
                                <div className="font-semibold text-3xl">
                                    <h1 >
                                        {movie.title}
                                    </h1>    
                                </div>                         
                                <div className="flex flex-row gap-10 font-medium text-sm mt-4">
                                        <div >
                                            <span>
                                                {movie.duration} phút
                                            </span>
                                        </div>
                                        <div>
                                            <span>
                                                {Day}
                                            </span>
                                        </div>
                                </div>
                                <div className="font-semibold text-lg mt-4">
                                        {/* <span>⭐ {movie.vote}</span> */}
                                </div>
                                <div className="flex flex-col gap-5 text-base text-neutral-500 font-medium mt-4">
                                    <div className="flex flex-nowrap gap-10">
                                        <h1>Quốc gia :</h1>
                                        <p className="font-bold text-black">
                                            {movie.country}
                                        </p>
                                    </div>
                                    <div className="flex flex-nowrap gap-9">
                                        <h1>Nhà sản xuất :</h1>
                                        <p className="font-bold text-black">
                                            {movie.producer}
                                        </p>
                                    </div>
                                    <div className="flex flex-nowrap gap-9">
                                        <h1>Thể loại :</h1>
                                        <p className="font-bold text-black">
                                            { movie.genre}
                                        </p>
                                    </div>
                                    <div className="flex flex-nowrap gap-9">
                                        <h1 >Đạo diễn :</h1>
                                        <p className="font-bold text-black">
                                            {movie.director}
                                        </p>
                                    </div>
                                    <div className="flex flex-nowrap gap-9">
                                        <h1>Diễn viên :</h1>
                                        <p className="font-bold text-black">
                                            {movie.cast}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContentFilm content ={movie.description}/>
                    <ShowTime movie={movie} ShowTimes={isTime} />
                </div>
            </div>
    )
}
export default MovieDetail