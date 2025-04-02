import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { posterNGT,posterNuHon,posterDarkNuns,posterCaptain,posterDetailNGT } from "../../assets/images/images";
import { useFilm } from "../../context/filmcontext/filmcontext";

import MovieImage from "../../components/film/movieimage/movieImage";
import MovieDetail from "../../components/film/moviedetail/moviedetail";
import MovieNowPlaying from "../../components/film/movienowplaying/movienowplaying";

function BookTicketFilm()
{
    const { id } = useParams()
    const [isMovie,setIsMovie] = useState(null)
    const [moviePlayingOther,setMoviePlayingOther] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [isTime,setIsTime] = useState([])

    const {GetMovieById,GetTheaterOfFilm,GetShowTimeOfTheater} = useFilm()

    
    useEffect (() => { 

        const fetchData = async () =>{
            setIsLoading(true)
            try{
                const [movieDetail,theater] = await Promise.all([
                    GetMovieById(id),
                    GetTheaterOfFilm(id)
                ])

                if (movieDetail?.Movie) {
                    setIsMovie(movieDetail.Movie);
                } else {
                    console.error("Movie not found!");
                }
     
                if(theater.success){
                    const showTimes = await Promise.all(
                        theater.Theaters.map(async (theater) => {
                            const showTime = await  GetShowTimeOfTheater(id,theater.id)
                            return {...theater,showTimes: showTime.ShowTimes || []}
                        })  
                    )
                    setIsTime(showTimes.flatMap(st =>
                    {   
                        return st || [] 
                    }));
                } 
            }catch(error){
                console.log(error)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData()
    },[id])
  
    return  !isLoading 
        ? (
            isMovie && 
            <div>
                <MovieImage img={isMovie.images} />
                <div className="grid grid-cols-7 max-w-[75vw] mx-auto  mt-10">
                    <MovieDetail movie={isMovie} time={isTime}/>
                    <MovieNowPlaying />
                </div>
            </div>
        ):(
            <div className="flex justify-center items-center mt-[15vh]">
                <div className="animate-spin rounded-full h-15 w-15 border-b-3 border-black"></div>
            </div>
        )
}
export default BookTicketFilm