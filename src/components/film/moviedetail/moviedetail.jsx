import ContentFilm from "./contentfilm/contentfilm"
import ShowTime from "./showtime/showtime"

function MovieDetail({movie})
{
    return (
        <div className="col-span-5 w-full">
            <div >
                <div className="flex flex-col ">
                    <div className="grid grid-cols-3 gap-x-6 ">
                        <div className="col-span-1 ">
                            <img width="250px" height="150px" 
                                src={movie.img2} 
                                alt="" 
                                className="w-[550px] h-full border-3 border-white -translate-y-27 " 
                            />
                        </div>
                        <div className="col-span-2 gap-5">   
                            <div className="font-semibold text-3xl">
                                <h1 >
                                    {movie.nameFilm}
                                </h1>    
                            </div>                         
                            <div className="flex flex-row gap-10 font-medium text-sm mt-4">
                                    <div >
                                        <span>
                                            {movie.Time}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            {movie.Day}
                                        </span>
                                    </div>
                            </div>
                            <div className="font-semibold text-lg mt-4">
                                    <span>⭐ {movie.vote}</span>
                            </div>
                            <div className="flex flex-col gap-5 text-base text-neutral-500 font-medium mt-4">
                                <div className="flex flex-nowrap gap-10">
                                    <h1>Quốc gia :</h1>
                                    <p>
                                        {movie.national}
                                    </p>
                                </div>
                                <div className="flex flex-nowrap gap-9">
                                    <h1>Nhà sản xuất :</h1>
                                    <p>
                                        {movie.MovieProducer}
                                    </p>
                                </div>
                                <div className="flex flex-nowrap gap-9">
                                    <h1>Thể loại :</h1>
                                    <p>
                                        { movie.Genre}
                                    </p>
                                </div>
                                <div className="flex flex-nowrap gap-9">
                                    <h1>Đạo diễn :</h1>
                                    <p>
                                        {movie.Director}
                                    </p>
                                </div>
                                <div className="flex flex-nowrap gap-9">
                                    <h1>Diễn viên :</h1>
                                    <p>
                                        {movie.Actor.mainActor1.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContentFilm content ={movie.Content}/>
                <ShowTime showTime ={movie.ShowTime} movie={movie}/>
            </div>
        </div>
    )
}
export default MovieDetail