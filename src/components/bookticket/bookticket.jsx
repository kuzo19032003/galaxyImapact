import Button from "../button"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {one,two,three,four,arrowDown,arrowUp} from "../../assets/images/images.jsx"
import {useFilm} from "../../context/filmcontext/filmcontext.jsx"

function Bookticket({className}){
    
    const [isOpenMenuFilm, setIsOpenMenuFilm] = useState(false)
    const [isOpenMenuTheater, setIsOpenMenuTheater] = useState(false)
    const [isOpenMenuTimeDay, setIsOpenMenuTimeDay] = useState(false)
    const [isOpenMenuShowTime, setIsOpenMenuShowTime] = useState(false)
    
    const [isNameFilm, setIsNameFilm] = useState(null)
    const [isSelectFilm, setIsSelectFilm] = useState(null)

    const [isTheater, setIsTheater] = useState([])
    const [isSelectedTheater, setIsSelectedTheater] = useState(null)

    const [isTimeDay, setIsTimeDay] = useState([])
    const [isSelectedTimeDay,setIsSlectedTimeDay] = useState(null)

    const [isShowTime, setIsShowTime] = useState([])
    const [isSelectedShowTime, setIsSelectedShowTime] = useState(null)

    const navgate = useNavigate()

    const {GetMovies,GetTheaterOfFilm,GetShowTimeOfTheater} = useFilm()

    useEffect(() => {
        const fetchMovies = async () => {
            const result = await GetMovies()
            if(result.success){
                setIsNameFilm(result.Movies.map(movie => movie))
            }
        }
        fetchMovies()
    },[])
    useEffect(() => {
        const fetchTheater = async () => {
           if(isSelectFilm){
                const idFilm = isSelectFilm.id
                const showTimeOfFilm = await GetTheaterOfFilm(idFilm)
                if(showTimeOfFilm.success){
                    setIsTheater(showTimeOfFilm.Theaters)
                }
           }
        }
        fetchTheater()
    },[isSelectFilm])
    useEffect(() => {
        const fetchDays = async () => {
            if(isSelectedTheater && isSelectFilm){
                const idFilm = isSelectFilm.id
                const idTheater = isSelectedTheater.id
                
                const showTimeOfTheater = await GetShowTimeOfTheater(idFilm,idTheater)
                if(showTimeOfTheater.success){
                    const TimeDay = [...new Set(showTimeOfTheater.ShowTimes.map(show => show.startTime.split("T")[0]))]
                                    .sort((a,b) => new Date(a) - new Date(b))    
              
                    // const formatDays = TimeDay.map((day) => ({
                    //     Day: new Date(day).toLocaleDateString("vi-VN",{ weekday: "long" }),
                    //     Date: new Date(day).toLocaleDateString("vi-VN",{ day: "2-digit",year: "numeric", month: "2-digit"})
                    // }))
                    setIsTimeDay(TimeDay)
                }
            }
        }
        fetchDays()
    },[isSelectedTheater])
    useEffect(() => {
        const fetchShowTimes = async () => {
           if(isSelectedTheater && isSelectFilm && isSelectedTimeDay){
                const idFilm = isSelectFilm.id
                const idTheater = isSelectedTheater.id
                
                const date = new Date(isSelectedTimeDay.split("T")[0]).toLocaleDateString("vi-VN",{ day: "2-digit",year: "numeric", month: "2-digit"})
                
                const showTimeOfTheater = await GetShowTimeOfTheater(idFilm,idTheater)
                if(showTimeOfTheater.success){
                    const showTimesOfDay = showTimeOfTheater.ShowTimes.filter(show => {
                        const dateShow = new Date(show.startTime.split("T")[0]).toLocaleDateString("vi-VN",{ day: "2-digit",year: "numeric", month: "2-digit"})
                        return dateShow  === date
                    })
                    setIsShowTime(showTimesOfDay)
                }
           }
        }
        fetchShowTimes()
        
    },[isSelectedTimeDay])



    const handlerDropMenuFilm = () => {
        setIsOpenMenuFilm(!isOpenMenuFilm) 
        setIsOpenMenuTheater(false) 
        setIsOpenMenuTimeDay(false)
        setIsOpenMenuShowTime(false)

    }
    const handlerDropMenuTheater = () => {
        setIsOpenMenuFilm(false) 
        setIsOpenMenuTheater(!isOpenMenuTheater) 
        setIsOpenMenuTimeDay(false)
        setIsOpenMenuShowTime(false)

    }
    const handlerDropMenuTimeDay = () => {
        setIsOpenMenuFilm(false) 
        setIsOpenMenuTheater(false) 
        setIsOpenMenuTimeDay(!isOpenMenuTimeDay)
        setIsOpenMenuShowTime(false)
        
    }
    const handlerDropMenuShowTime = () => {
        setIsOpenMenuFilm(false) 
        setIsOpenMenuTheater(false) 
        setIsOpenMenuTimeDay(false)
        setIsOpenMenuShowTime(!isOpenMenuShowTime) 
    }

    
    const handleSetNameFilm = (movie) =>{

        setIsSelectFilm(movie)
        setIsOpenMenuFilm(!isOpenMenuFilm) 
        setIsSelectedTheater(null)
    }
    const handleSetTheater = (e) =>{
        setIsSelectedTheater({id:e.id,name:e.name})
        setIsOpenMenuTheater(false) 
        setIsSlectedTimeDay(null)
    }
    const handleSetTimeDay = (e) =>{
        setIsSlectedTimeDay(e)
        setIsOpenMenuTimeDay(false) 
        setIsShowTime(null)
    }
    const handleSetShowTime = (e) =>{
        const startTime = new Date(e.startTime).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
        setIsSelectedShowTime(startTime)
        setIsOpenMenuShowTime(false) 
    }



    
    const handleSubmit = () => { 
        const token = localStorage.getItem("token")
        if(!token){
            return;   
        }
        
        if(isSelectFilm && isSelectedTheater && isSelectedTimeDay && isSelectedShowTime){
            navgate(`/booking/${isSelectFilm.title.replace(/\s+/g, "-").toLowerCase()}`,
                {state:{
                    theater:isSelectedTheater.name, 
                    time:isSelectedShowTime,
                    day:isSelectedTimeDay,  
                    hall:isShowTime[0].hallId,
                    showTimeId:isShowTime[0].id,
                    movie:isSelectFilm
                }}
            )
        }else{
            alert("Vui lòng chọn đầy đủ thông tin")
        }
    }

    return (    
        <div className={className}>
            <div className= "flex flex-row gap-[1vw] items-center w-[155vh] min-h-[10vh] shadow-2xl">
                <div className="flex justify-around  w-full ">
                    <div onClick={handlerDropMenuFilm} className="flex items-center basis-[35vw] justify-between mx-3 cursor-pointer max-w-[20rem] min-w-[18rem] " >
                        <div className="flex gap-5">
                            <img  src={one} alt="one" /> 
                            <p   className=" max-w-[16rem] whitespace-nowrap truncate">
                                {!isSelectFilm ? 'chọn phim' : isSelectFilm.title}
                            </p>
                        </div>
                            <div>
                                <img src={arrowDown} alt="" className = {!isOpenMenuFilm ? 'block gap-2' : 'hidden'} /> 
                                <img  src={arrowUp} alt="" className={isOpenMenuFilm ? 'block gap-3' : 'hidden'}/> 
                            </div>
                    </div>
                    <div 
                        onClick={isSelectFilm && handlerDropMenuTheater} 
                        className={ isSelectFilm ? "flex items-center  min-w-[13rem] justify-between mx-2" : "flex items-center  min-w-[14rem] justify-between mx-2" }
                    >
                        <div className="flex gap-2">
                            <img  src={two}  alt="" /> 
                            <p className={isSelectFilm ? "opacity-100 whitespace-nowrap truncate" : "opacity-30 "}>
                                {!isSelectedTheater ? 'chọn rạp ' : isSelectedTheater.name}
                            </p>
                        </div>
                        <div>
                            <img src={arrowDown} alt="" className=
                                {
                                    !isOpenMenuTheater 
                                    ? "opacity-100 gap-4 block" 
                                    : "opacity-30 gap-4 hidden"
                                }
                            /> 
                            <img src={arrowUp} alt="" className=
                                {
                                    isOpenMenuTheater 
                                    ? 'block gap-3' 
                                    : 'hidden'
                                }
                            /> 
                        </div>
                    </div>
                    <div
                         onClick= {isSelectedTheater ? handlerDropMenuTimeDay : null} 
                         className="flex items-center basis-[25vw] justify-between mx-2 max-w-[20rem] min-w-[13rem]" 
                    >
                        <div className="flex gap-2">
                            <img src={three} alt="" /> 
                            <p className={isSelectedTheater ? "opacity-100 " : "opacity-30 "} >
                                    { !isSelectedTimeDay 
                                        ? "chọn ngày"
                                        : 
                                        `${new Date(isSelectedTimeDay).toLocaleDateString("vi-VN", { weekday: "long" })} - 
                                         ${new Date(isSelectedTimeDay).toLocaleDateString("vi-VN", { day: "2-digit", year: "numeric", month: "2-digit" })}`
                                    } 
                            </p>
                        </div>
                        <div>
                            <img 
                                src={arrowDown} 
                                alt="" 
                                className={!isOpenMenuTimeDay ? "opacity-100 gap-4 block" : "opacity-30 gap-4 hidden"}
                            /> 
                            <img  
                                src={arrowUp} 
                                alt="" 
                                className={isOpenMenuTimeDay ? 'block gap-3' : 'hidden'}
                            /> 
                        </div>
                    </div>
                    <div
                        onClick={isSelectedTimeDay ? handlerDropMenuShowTime : null}  
                        className = "flex items-center basis-[15vw] justify-between mx-2" 
                    >
                        <div className="flex gap-2">
                            <img src={four}  alt="" /> 
                            <p className={isSelectedTimeDay ? "opacity-100 " : "opacity-30 "}> 
                                {!isSelectedShowTime ? "Chọn suất" : isSelectedShowTime}
                            </p>
                        </div>
                        <div>
                            <img 
                                src={arrowDown} 
                                alt="arrowDown" 
                                className={!isOpenMenuShowTime ? "opacity-100 gap-4 block" : "opacity-30 gap-4 hidden"}
                            /> 
                            <img  
                                src={arrowUp} 
                                alt="" 
                                className={isOpenMenuShowTime ? 'block gap-3' : 'hidden'}
                            /> 
                        </div>
                    </div>
                </div>
                <Button 
                    className= "w-[20vh] h-[9vh] bg-orange-400 right-0 text-white font-bold rounded-lg hover:bg-orange-500" 
                    onclick={() => handleSubmit()}
                    disabled={!isSelectFilm && !isSelectedTheater && !isSelectedTimeDay && !isSelectedShowTime}
                > 
                    Mua vé nhanh
                </Button>
            </div>

            <div 
                className = {!isOpenMenuFilm 
                    ? 
                        'hidden' 
                    : 
                        "absolute top-[41vh] left-[13vw] h-65 overflow-y-scroll shadow-2xl w-[24vw] cursor-pointer z-40 bg-white"
                }
            >
                <ul>
                    {
                        isNameFilm &&
                            isNameFilm.map((movie,index) => (
                                <li onClick= {() => handleSetNameFilm(movie)} 
                                    key={index} 
                                    className="p-[2vh] hover:bg-sky-100"
                                >
                                    {movie.title}
                                </li>
                            ))
                    }
                </ul>
            </div>
            <div 
                className = 
                    {
                        !isOpenMenuTheater 
                            ? 
                                'hidden' 
                            : 
                                "absolute top-[55vh] left-[36vw] max-h-[10rem] overflow-y-scroll shadow-2xl w-[14vw] cursor-pointer z-40 bg-white"
                    }
            >
                <ul>
                    {
                        isTheater &&
                            isTheater.map((ar,index) => (
                                    <li 
                                        onClick={() => handleSetTheater({id:ar.id,name:ar.name})} 
                                        key={index} 
                                        className="p-[2vh] hover:bg-sky-100"
                                    >
                                        {ar.name}
                                    </li>
                                ))
                    }
                </ul>
            </div>
            <div 
                className = 
                    {
                        !isOpenMenuTimeDay 
                            ? 
                            'hidden' 
                            : isShowTime && isShowTime.length < 2
                            ? "absolute top-[55vh] left-[51vw] max-h-[10rem] overflow-y-scroll shadow-2xl w-[12vw] cursor-pointer z-40 bg-white"
                            : 
                            "absolute top-[55vh] left-[53vw] max-h-[10rem] overflow-y-scroll shadow-2xl w-[12vw] cursor-pointer z-40 bg-white"
                    }
            >
                <ul>
                    {
                        isTimeDay &&
                            isTimeDay.map((ar,index) => {
                               const day = new Date(ar).toLocaleDateString("vi-VN",{ weekday: "long" })
                               const date = new Date(ar).toLocaleDateString("vi-VN",{ day: "2-digit",year: "numeric", month: "2-digit"})
                               return ( <li 
                                    onClick={() => handleSetTimeDay(ar)} 
                                    key={index} 
                                    className="p-[2vh] hover:bg-sky-100"
                                >
                                    {day} - {date}
                                </li>
                               )
                            })
                    }
                </ul>
            </div>
            <div 
                className = 
                    {
                        !isOpenMenuShowTime 
                            ? 
                            'hidden'
                            : isShowTime && isShowTime.length < 2
                            ? "absolute top-[70vh] left-[67vw] max-h-[7rem] overflow-y-scroll shadow-2xl w-[11vw] cursor-pointer z-40 bg-white" 
                            : "absolute top-[60vh] left-[67vw] max-h-[7rem] overflow-y-scroll shadow-2xl w-[11vw] cursor-pointer z-40 bg-white"
                    }
            >
                <ul>
                    {
                        isShowTime&&
                        [...new Map(isShowTime.map(item => [item.startTime, item])).values()]
                            .map((ar, index) => {
                                const startTime = new Date(ar.startTime).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
                        
                                return (
                                    <li 
                                        onClick={() => handleSetShowTime(ar)} 
                                        key={index} 
                                        className="p-[2vh] hover:bg-sky-100"
                                    >
                                        {startTime}
                                    </li>
                                );
                            })
                    
                    }
                </ul>
            </div>
        </div>
    )
}
export default Bookticket