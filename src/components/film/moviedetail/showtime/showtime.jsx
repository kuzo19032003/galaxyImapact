import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
function ShowTime({showTime,movie,Theaters,ShowTimes}){

    const [selectedDay,setSelectedDay] = useState("")
    const [filteredTheaters, setFilteredTheaters] = useState([]);
    const [startIndex,setStartIndex] = useState(0)
    const visibleCount = 5
   
    const Dates = [...new Set(
        ShowTimes.flatMap(theater => 
            theater.showTimes.map(show => show.startTime.split("T")[0])
        )
    )].sort((a,b) => new Date(a) - new Date(b));

    const handlePrev = () => {
        startIndex > 0 && 
        setStartIndex(startIndex-1)
    }
    const handleNext = () => {
        startIndex + visibleCount < Dates.length + 1 && 
        setStartIndex(startIndex+1)

    }
    
    
    
    useEffect(() => {
       
        if(!selectedDay) return;

        const filltheaters = ShowTimes.map(theater => {
            const fillterdShowtimes = theater.showTimes.filter(show => {
               return show.startTime.split("T")[0] === selectedDay        
            })

            return fillterdShowtimes.length  > 0 
                   ? {...theater, showTimes: fillterdShowtimes} 
                   : null
        }).filter(theater => theater !== null);
       
        setFilteredTheaters(filltheaters);
    }, [selectedDay]);
    console.log(filteredTheaters)
    

    
    return(
        <div className="showTime mt-10">
            <div className="flex">
                <span className="border-l-3 border-blue-700 mr-2"></span>
                <h1 className= "font-medium text-xl">
                    Lịch chiếu phim
                </h1>
            </div>
            <div className="mt-5 relative overflow-hidden">
                <button 
                        className="absolute top-6 z-10 "
                        onClick={() => handlePrev()}
                >
                    ◀ 
                </button>
                <button 
                    className="absolute right-5  top-6 z-10"
                    onClick={() => handleNext()}
                    
                >
                    ▶
                </button>

                <div 
                    className="flex flex-rows overflow-x-auto mx-17 gap-10 cursor-pointer transition-all duration-300 ease-in-out"
                    style={{ transform: `translateX(-${startIndex * 6}vw)` }}
                >
                    {
                       Dates.slice(startIndex, startIndex + visibleCount).map((date,index)=>(
                            <div  key={index} 
                                className=
                                {
                                    selectedDay == date
                                    ? "w-[6vw] h-[10vh]  rounded-lg p-3 text-center bg-indigo-700 text-white" 
                                    : "w-[6vw] h-[10vh]  rounded-lg p-3 text-center "
                                } 
                                onClick={() => setSelectedDay(date)}
                            >
                                <p>
                                    {
                                        new Date(date).toLocaleDateString("vi-VN",{day:"2-digit", month:"2-digit"})
                                    }
                                </p>
                                <p className="overflow-auto whitespace-nowrap">
                                    {
                                        new Date(date).toLocaleDateString("vi-VN",{weekday:"long"})
                                    }
                                </p>     
                            </div>
                       ))
                    }
                </div>

                <div className="w-full border-1 border-blue-700 my-5"></div>
                <div >
                        { selectedDay &&
                            filteredTheaters.map((theater,index) => {

                                const uniqueShowTimes = theater.showTimes.reduce((acc, show) => {
                                    if (!acc.some(s => s.startTime === show.startTime)) {
                                        acc.push(show);
                                    }
                                    return acc;
                                }, []);
                                
                               return (
                                    <div className=" h-auto p-5 border-b-2 border-gray-200 " key={index}>
                                        <div>
                                            <h1 className="text-lg font-medium ">
                                                {theater.name} - {theater.location} 
                                            </h1>
                                        </div>
                                        <div className="flex flex-rows gap-10  translate-x-55 mt-5">
                                            {
                                                uniqueShowTimes.slice(startIndex,startIndex + visibleCount).map((show,i) => (
                                                    <div 
                                                        key={i} 
                                                        className=
                                                        "border border-gray-300 hover:bg-gray-300 hover:text-white p-3 rounded w-[5vw] h-auto text-center cursor-pointer"
                                                    >
                                                        <Link
                                                            to={`/booking/${movie.nameFilm.replace(/\s+/g, "-").toLowerCase()}`}
                                                            state={{
                                                                theater:theater.name, 
                                                                time:show.startTime,
                                                                day:selectedDay,
                                                                hall:show.hallId,
                                                                showTimeId:show.id,
                                                                movie:movie
                                                            }}
                                                        >
                                                            {
                                                                new Date(show.startTime).toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' })
                                                            }
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                               )
                            })             
                        }
                </div>
            </div>
        </div>
    )
}
export default ShowTime