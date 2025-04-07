import { useState,useEffect } from "react";
import { useFilm } from "../../context/filmcontext/filmcontext";
import { useNavigate } from "react-router-dom";

import MovieCard from "../../components/film/moviecard/moviecard";
import Button from "../../components/button/index";
function TicketPrice() {
  const {GetMovies,GetTheaterOfFilm,GetShowTimeOfTheater} = useFilm();
  const navigate = useNavigate()

  const [movies, setMovies] = useState([]);
  const [selectedMovies, SetSelectedMovies] = useState(null);

  const [location, Setlocation] = useState([]);
  const [selectedlocation, SetSelectedlocation] = useState(null);

  const [showTime, setShowTime] = useState([]);
  const [selectedShowTime, setSelectedShowTime] = useState(null);
   
  const [isOpenLocation,setIsOpenLocation] = useState(true);
  const [isOpenFilm,setIsOpenFilm] = useState(false);
  const [isOpenShowTimes,setIsOpenShowTimes] = useState(false);


  const [date,setDate] = useState([]);
  const [startIndex,setStartIndex] = useState(0)
  const visibleCount = 4

  const [selectedDay,setSelectedDay] = useState(null)
  

  useEffect(() => {
    const fetchMoview = async () => {
      const result = await GetMovies();

      if(result.success){ 
        const films = (result.Movies.map((item) => item.id));
        Promise.all(films.map(async (item) => {
          const result = await GetTheaterOfFilm(item);
          if(result.success){
            return result.Theaters.map((item) => item.location);
          }
        }
        )).then((location) => {
          const arr = [...new Set(location.flat())];
          Setlocation(arr);
        });
      
     }}
     fetchMoview()
    } 
  ,[]);

  useEffect(() => {
    const fetchMoviewByLocation = async () => {
      const result = await GetMovies();
      if(result.success){
        Promise.all(result.Movies.map(async (film) => {
            const Theaters = await GetTheaterOfFilm(film.id);
            if(Theaters.success){
              const theaterOfLocation = Theaters.Theaters?.filter((film) => film.location === selectedlocation);
              if(theaterOfLocation.length > 0){
                return {...film, theater: theaterOfLocation}
              }}
              return null;
        }))
          .then((data) => {
            setMovies(data.filter((item) => item !== null));
          });
        
     }}
     fetchMoviewByLocation()
    } 
  ,[selectedlocation]);

  useEffect(() => {
    const fetchShowTimes = async () => {
      if(selectedMovies){
        const theaters = selectedMovies.theater.map((theater) => theater.id);
        const allShowTime = await Promise.all( 
          theaters.map(async (theaterId) => {
            const showtimes = await GetShowTimeOfTheater(selectedMovies.id,theaterId)
            if(showtimes.success){
              return showtimes.ShowTimes
            }
            return []
          })
        )
        const mergedShowTimes = allShowTime.flat()
        const uniqueDates = [...new Set(mergedShowTimes.map(item => item.startTime.split("T")[0]))];
        setDate(uniqueDates);
      }
    }
    fetchShowTimes()
  },[selectedMovies])

  useEffect(() => {
    const fetchShowTimeByDay = async () => {
      if(selectedDay && selectedMovies){
        const theaters = selectedMovies.theater;
        const allShowTime = await Promise.all(
          theaters.map(async (theater) => {       
            const showtimes = await GetShowTimeOfTheater(selectedMovies.id,theater.id)
            if(showtimes.success){
              const showTimeBySelectedDay = showtimes.ShowTimes.filter((item) => 
                  item.startTime.split("T")[0] === selectedDay
              ).map((item => {
                return {
                  ...item,
                  time: item.startTime.split("T")[1].split(":").slice(0,2).join(":")
                }
              }))
              const uniqueShowTimes = showTimeBySelectedDay.filter(
                (value, index, self) =>
                  self.findIndex((t) => t.time === value.time) === index
              );
              return {
                theater,
                showtimes : uniqueShowTimes
              }
            }return null;
          })
        )
        setShowTime(allShowTime)
      }
    };
    fetchShowTimeByDay();
  },[selectedDay])




const handleSelectedFilm = async (item) => {
  SetSelectedMovies(item);
  setIsOpenFilm(false);
}
const handlePrev = () => {
  startIndex > 0 && 
  setStartIndex(startIndex-1)
}
const handleNext = () => {
  startIndex + visibleCount < date.length + 1 && 
  setStartIndex(startIndex+1)

}

const handleSubmit = () => { 
  const token = localStorage.getItem("token")
  if(!token){
      return;   
  }
  
  if(selectedlocation && selectedMovies && selectedShowTime){
      navigate(`/booking/${selectedMovies.title.replace(/\s+/g, "-").toLowerCase()}`,
          {state:{
              theater:selectedShowTime?.theater.name, 
              time:selectedShowTime?.showTime.time,
              day:selectedShowTime?.showTime.startTime.split("T")[0],  
              hall:selectedShowTime?.showTime.hallId,
              showTimeId:selectedShowTime?.showTime.id,
              movie:selectedMovies
          }}
      )
  }else{
      alert("Vui lòng chọn đầy đủ thông tin")
  }
}



  
    return (
      <div >
        <div className="w-full h-2 bg-gray-100"></div>
        <div className="w-full min-h-140 ">
          <div className="bg-white w-full min-h-25 flex items-center justify-center">
              <p className="text-lg font-bold text-blue-600">
                  Chọn Vị trí / Phim / Suất chiếu 
              </p>
          </div>
          <div className="bg-gray-100 min-h-200 grid grid-cols-3">
             <div className="col-span-2 m-15  ">
                <div  className={`w-[90%] shadow-xl rounded-xs p-5 transition-all duration-700 cursor-pointer overflow-hidden 
                      ${isOpenLocation ? ' min-h-[15rem] ' : 'min-h-0 relative'}`}         
                >
                    <div onClick={() => setIsOpenLocation(!isOpenLocation)} >
                        <h4 className="font-bold textx-xl">Chọn vị trí {selectedlocation &&  " - " + selectedlocation}</h4>
                    </div>
                    <div className={` 
                          ${isOpenLocation ? 'translate-y-2 opacity-100' : 'translate-y--100rem opacity-20 absolute'}`}
                    >
                        <div className="grid grid-cols-4 gap-5 mt-7  ">
                          {location &&
                            location.map((item,index) => {
                              return (
                                <div key={index} 
                                  className="border-2 border-gray-300 p-2 flex justify-center items-center justify-between cursor-pointer hover:bg-gray-200 rounded-md hover:text-gray-500"
                                  onClick={() => {setIsOpenLocation(false), SetSelectedlocation(item), setIsOpenFilm(!isOpenFilm)}}
                                >
                                  {item}
                                </div>
                              )
                            })
                          }
                        </div>
                    </div>
                </div>
                <div  className={`w-[90%] shadow-xl rounded-xs p-5 transition-all duration-700 overflow-hidden cursor-pointer 
                                 ${isOpenFilm ? ' min-h-[15rem]' : 'min-h-0 relative'}`}         >
                    <div onClick={() => setIsOpenFilm(!isOpenFilm)} >
                        <h4 className="font-bold textx-xl">Chọn Phim {selectedMovies &&  "-" + `${selectedMovies.title}` }</h4>
                    </div>
                    <div className={` 
                          ${isOpenFilm ? ' translate-y-2 opacity-100 ' : 'translate-y--20rem opacity-10 absolute'}`}
                    >
                        <div className="grid grid-cols-3 gap-5 mt-7 ">
                          {
                            movies.map((item,index) => {
                              return (                    
                                <div key={index} onClick={() => handleSelectedFilm(item)}>
                                    <MovieCard 
                                      key={index} 
                                      Film={item} 
                                      classCard="w-[12rem] h-[37vh]"  
                                      classTitle={"text-black"} 
                                      isLink={false} 
                                    />
                                </div>
                              )})
                          } 
                        </div>
                    </div>
                </div>
                <div  className={`w-[90%] shadow-xl rounded-xs p-5 transition-all duration-700 overflow-hidden cursor-pointer 
                                 ${isOpenShowTimes ? ' min-h-[15rem]' : 'min-h-0 relative'}`}         >
                    <div onClick={() => setIsOpenShowTimes(!isOpenShowTimes)} >
                        <h4 className="font-bold textx-xl">Chọn Suất Chiếu </h4>
                    </div>
                    <div className={` 
                          ${isOpenShowTimes ? ' translate-y-2 opacity-100 ' : 'translate-y--20rem opacity-10 absolute'}`}
                    >
                    <div className="flex flex-rows gap-x-1 mt-7 p-5  relative overflow-hidden border-b-2" >
                        <button 
                            className="absolute top-12 left--20 z-10 "
                            onClick={() => handlePrev()}
                        >
                          ◀ 
                        </button>
                        <button 
                            className="absolute right-25 top-12 z-10"
                            onClick={() => handleNext()}
                        >
                          ▶
                        </button>
                          {date &&
                            date.slice(startIndex,startIndex + visibleCount).map((item,index) => {
                              return (                    
                                <div className =
                                  {
                                    `w-[6vw] h-[5rem] flex flex-col items-center justify-center 
                                     rounded-xl cursor-pointer ml-8 transition-all 
                                     duration-300 ease-in-out`
                                  + (selectedDay === item ? " bg-blue-500 text-white" : " bg-gray-200 text-black")
                                  }  
                                  key={index}
                                  style={{ transform: `translateX(-${startIndex * 3}vw)` }}
                                  onClick={() => {setSelectedDay(item)}}
                                >
                                    <p className="overflow-auto whitespace-nowrap">
                                        {
                                          new Date(item).toLocaleDateString("vi-VN",{weekday:"long"})
                                        }
                                    </p>  
                                    <p>
                                      {new Date(item).toLocaleDateString("vi-VN",{day:"2-digit", month:"2-digit"})}
                                    </p>
                                </div>
                              )}) 
                          } 
                        </div>
                        <div>
                            {showTime && 
                              <div className="flex flex-col gap-5 mt-7 ">
                                  {showTime.map((item,index) => (
                                      <div key={index}>
                                        <h2 className="font-bold text-lg">{item.theater.name}</h2>
                                        <div className="flex flex-row gap-2 mt-2 ml-20">
                                            {item.showtimes.map((showtime,index) => (
                                              <button 
                                                key={index} 
                                                className={`px-4 py-2 rounded-lg border border-gray-300 text-gray-700 
                                                  hover:bg-blue-100 hover:text-blue-600 transition-all duration-200 
                                                  ${selectedShowTime?.showTime?.id === showtime.id ? "bg-blue-500 text-white font-semibold" : ""}
                                                `}
                                                onClick={() => setSelectedShowTime({ theater: item.theater, showTime: showtime })}
                                              >
                                                {showtime.time}
                                              </button>
                                            ))}
                                        </div>
                                      </div>      
                                  ))}
                              </div>
                            }
                        </div>
                    </div>
                </div>
             </div>
             <div className="col-span-1 mt-20 shawdow-2xl rounded-xs bg-white  h-[75vh] overflow-hidden mr-10">
                <div className="bg-orange-500 w-full h-15 rounded-t-md flex items-center justify-center text-white text-lg">
                        Thanh toán vé
                </div>
                    {selectedMovies &&
                      <div className="flex flex-col gap-5 mt-5 ml-5">
                        <div className="flex flex-row gap-5">
                            <div>
                                <img src={selectedMovies.images[0].imageUrl} alt=""  className="w-[10vw] h-[30vh]"/>
                            </div>
                            <div>
                                <h2 className="font-bold">Phim { "-" + selectedMovies.title}</h2>
                                {selectedShowTime &&
                                    <div className="flex flex-col gap-2 mt-2">
                                      <div>
                                        <span>Suất { ":" + selectedShowTime?.showTime?.time } </span> -  
                                        <span>
                                            Ngày  {new Date(selectedShowTime?.showTime?.startTime).toLocaleDateString("vi-VN")}
                                        </span>

                                      </div>
                                      <div>
                                        <span>Rạp : {selectedShowTime?.theater?.name}</span>
                                        <span> - {selectedShowTime?.theater?.location}</span>
                                      </div>
                                    </div>  
                              }
                            </div>
                        </div> 
                        <div>
                        </div>   
                        <div className="flex justify-end mr-5">
                            <button className="bg-blue-500 text-white w-[30%] h-10 rounded-md mt-5 ml-5 hover:bg-blue-600"
                                onClick={() => handleSubmit()} 
                                
                            >
                                Chọn ghế
                            </button>
                        </div>
                      </div>
                    }
             </div>
          </div>
        </div>
      </div>
    );
  }
  export default TicketPrice;