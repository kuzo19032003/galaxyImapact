import { useState } from "react"
import { Link } from "react-router-dom"
function ShowTime({showTime,movie}){

    const [selectedDay,setSelectedDay] = useState(null)
    
    const theaterOfDay = showTime.find(theater => theater.Day === selectedDay)?.Theaters || []
    
    return(
        <div className="showTime mt-10">
            <div className="flex">
                <span className="border-l-3 border-blue-700 mr-2"></span>
                <h1 className= "font-medium text-xl">
                    Lịch chiếu phim
                </h1>
            </div>
            <div className="mt-5">
                <div className="flex flex-rows gap-10 cursor-pointer">
                    {
                       showTime.map((show,index)=>(
                            <p  key={index} 
                                className=
                                {selectedDay == show.Day 
                                    ? "w-auto h-[10vh]  rounded-lg p-3 text-center bg-indigo-700 text-white " 
                                    : "w-auto h-[10vh]  rounded-lg p-3 text-center "
                                } 
                                onClick={() => setSelectedDay(show.Day)}
                            >
                                {show.Day}
                            </p>
                       ))
                    }
                </div>
                <div className="w-full border-1 border-blue-700 my-5"></div>
                <div>
                        { selectedDay &&
                            theaterOfDay.map((theater,index) => (
                                <div className=" h-[15vh] border-b-2 border-gray-200 " key={index}>
                                    <div>
                                        <h1 className="text-lg font-medium ">
                                            {theater.nameTheater}
                                        </h1>
                                    </div>
                                    <div className="flex flex-rows gap-10 mt-3 translate-x-55">
                                        {theater.time.map((t,index) => (
                                            <div 
                                                key={index} 
                                                className="border border-gray-300 rounded w-[5vw] h-auto p-3 text-center cursor-pointer"
                                            >
                                                <Link
                                                    to={`/booking/${movie.nameFilm.replace(/\s+/g, "-").toLowerCase()}`}
                                                    state={{theater:theater.nameTheater, time:t,day:selectedDay,movie:movie}}
                                                >
                                                    {t}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))             
                        }
                </div>
            </div>
        </div>
    )
}
export default ShowTime