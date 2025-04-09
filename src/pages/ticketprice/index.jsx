import { useState,useEffect } from "react";
import { useFilm } from "../../context/filmcontext/filmcontext";
import { useNavigate } from "react-router-dom";


import SelectedSeat from "./bookticketbylocation/selectedSeat/selectedSeat"
import SelectedLocation from "./bookticketbylocation/selectedLocation/selectedLocation";
import SelectedFilm from "./bookticketbylocation/selectedFilm/selectedFilm";
import SelectedShowTimes from "./bookticketbylocation/selectedShowtimes/selectedShowtimes";

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
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    const fetchMoview = async () => {
      setIsLoading(true)
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
          setIsLoading(false)
        });
     }}
     fetchMoview()
    } 
  ,[]);

  useEffect(() => {
    const fetchMoviewByLocation = async () => {
      setIsLoading(true)
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
            setIsLoading(false)
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
        setIsLoading(true)
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
        setIsLoading(false)
      }
    };
    fetchShowTimeByDay();
  },[selectedDay])



const handleSelectedFilm = async (item) => {
  SetSelectedMovies(item);
  setIsOpenFilm(false);
  setIsOpenShowTimes(!isOpenShowTimes);

}
const handlePrev = () => {
  startIndex > 0 && 
  setStartIndex(startIndex-1)
}
const handleNext = () => {
  startIndex + visibleCount < date.length + 1 && 
  setStartIndex(startIndex+1)

}
const openLocation = () => {;
  setIsOpenLocation(!isOpenLocation);
  setIsOpenFilm(false);
  setIsOpenShowTimes(false);
}
const openMovies = () => {
  if(selectedlocation){
    setIsOpenLocation(false);
    setIsOpenFilm(!isOpenFilm);
    setIsOpenShowTimes(false);
  }else{
    setIsOpenLocation(true);
  }
}
const OpenShowTimes = () => {
  if(selectedMovies){
    setIsOpenLocation(false);
    setIsOpenFilm(false);
    setIsOpenShowTimes(!isOpenShowTimes);
  }else{
    setIsOpenFilm(true);
  }
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
                <SelectedLocation 
                      isOpenLocation ={isOpenLocation } 
                      selectedlocation ={selectedlocation} 
                      isLoading ={isLoading} location={location} 
                      setIsOpenLocation ={setIsOpenLocation } 
                      SetSelectedlocation ={SetSelectedlocation} 
                      setIsOpenFilm ={setIsOpenFilm } 
                      openLocation ={openLocation} 
                      isOpenFilm ={isOpenFilm }
                />
                <SelectedFilm 
                    isOpenFilm ={isOpenFilm } 
                    selectedMovies ={selectedMovies } 
                    isLoading ={isLoading } 
                    movies ={movies }
                    handleSelectedFilm ={handleSelectedFilm }
                    openMovies ={openMovies}
                />
                <SelectedShowTimes 
                    isOpenShowTimes ={isOpenShowTimes } 
                    date = {date}
                    startIndex ={startIndex }
                    visibleCount ={visibleCount }
                    isLoading ={isLoading }
                    showTime ={showTime }
                    selectedDay ={selectedDay }
                    setSelectedDay ={setSelectedDay }
                    selectedShowTime ={selectedShowTime }
                    setSelectedShowTime ={setSelectedShowTime }
                />
             </div>
             <SelectedSeat 
                  selectedMovies = {selectedMovies } 
                  selectedShowTime = {selectedShowTime} 
                  handleSubmit ={handleSubmit } 
              />
          </div>
        </div>
      </div>
    );
  }
  export default TicketPrice;