import Button from "../button"
import { useState,useRef } from "react"
import {one,two,three,four,arrowDown,arrowUp} from "../../assets/images/images.jsx"
function Bookticket({className}){
// useState
    const [isOpenMenuFilm, setIsOpenMenuFilm] = useState(false)
    const [isOpenMenuTheater, setisOpenMenuTheater] = useState(false)
    const [isNameFilm, setIsNameFilm] = useState(null)
//Array
    const filmCinemar = [
        {nameFilm:'Nhà gia tiên', theater: 'Galaxy Bình chánh', timeDay:'Chủ nhật, 23/02/2025', showtime:'11:00'},
        {nameFilm:'Nhà gia tiên', theater: 'Galaxy mèn mén', timeDay:'Chủ nhật, 23/02/2025', showtime:'13:00'},
        {nameFilm:'Nhà gia tiên', theater: 'Galaxy mò cày', timeDay:'Chủ nhật, 23/02/2025', showtime:'15:00'},
        {nameFilm:'Nhà gia tiên', theater: 'Galaxy Quận 7', timeDay:'Chủ nhật, 23/02/2025', showtime:'16:00'},
        {nameFilm:'Nhà gia tiên', theater: 'Galaxy Bình dương', timeDay:'Chủ nhật, 23/02/2025', showtime:'20:00'},
        
        {nameFilm:'Bộ tứ báo thủ', theater: 'Galaxy Bình chánh', timeDay:'Chủ nhật, 23/02/2025', showtime:'11:00'},
        {nameFilm:'Bộ tứ báo thủ', theater: 'Galaxy mèn mén', timeDay:'Chủ nhật, 23/02/2025', showtime:'13:00'},
        {nameFilm:'Bộ tứ báo thủ', theater: 'Galaxy mò cày', timeDay:'Chủ nhật, 23/02/2025', showtime:'15:00'},
        {nameFilm:'Bộ tứ báo thủ', theater: 'Galaxy Quận 7', timeDay:'Chủ nhật, 23/02/2025', showtime:'16:00'},
        {nameFilm:'Bộ tứ báo thủ', theater: 'Galaxy Bình dương', timeDay:'Chủ nhật, 23/02/2025', showtime:'20:00'},

        {nameFilm:'Avengers: Endgame', theater: 'Galaxy Bình chánh', timeDay:'Thứ bảy, 22/02/2025', showtime:'12:00'},
        {nameFilm:'Spider-Man: No Way Home', theater: 'Galaxy mèn mén', timeDay:'Thứ bảy, 22/02/2025', showtime:'14:30'},
        {nameFilm:'Black Panther', theater: 'Galaxy mò cày', timeDay:'Thứ bảy, 22/02/2025', showtime:'17:00'},
        {nameFilm:'The Batman', theater: 'Galaxy Quận 7', timeDay:'Thứ bảy, 22/02/2025', showtime:'19:30'},
        {nameFilm:'Dune', theater: 'Galaxy Bình dương', timeDay:'Thứ bảy, 22/02/2025', showtime:'21:00'},
    
        {nameFilm:'Top Gun: Maverick', theater: 'Galaxy Bình chánh', timeDay:'Chủ nhật, 24/02/2025', showtime:'11:00'},
        {nameFilm:'No Time to Die', theater: 'Galaxy mèn mén', timeDay:'Chủ nhật, 24/02/2025', showtime:'13:00'},
        {nameFilm:'Shang-Chi and the Legend of the Ten Rings', theater: 'Galaxy mò cày', timeDay:'Chủ nhật, 24/02/2025', showtime:'15:00'},
        {nameFilm:'Eternals', theater: 'Galaxy Quận 7', timeDay:'Chủ nhật, 24/02/2025', showtime:'16:00'},
        {nameFilm:'The Matrix Resurrections', theater: 'Galaxy Bình dương', timeDay:'Chủ nhật, 24/02/2025', showtime:'20:00'},
    
        {nameFilm:'Fast & Furious 9', theater: 'Galaxy Bình chánh', timeDay:'Thứ hai, 25/02/2025', showtime:'12:00'},
        {nameFilm:'Ghostbusters: Afterlife', theater: 'Galaxy mèn mén', timeDay:'Thứ hai, 25/02/2025', showtime:'14:30'},
        {nameFilm:'Minions: The Rise of Gru', theater: 'Galaxy mò cày', timeDay:'Thứ hai, 25/02/2025', showtime:'17:00'},
        {nameFilm:'Lightyear', theater: 'Galaxy Quận 7', timeDay:'Thứ hai, 25/02/2025', showtime:'19:30'},
        {nameFilm:'The Flash', theater: 'Galaxy Bình dương', timeDay:'Thứ hai, 25/02/2025', showtime:'21:00'},

        {nameFilm:'Sonic the Hedgehog 2', theater: 'Galaxy Bình chánh', timeDay:'Thứ ba, 26/02/2025', showtime:'12:00'},
        {nameFilm:'Uncharted', theater: 'Galaxy mèn mén', timeDay:'Thứ ba, 26/02/2025', showtime:'14:30'},
        {nameFilm:'The Suicide Squad', theater: 'Galaxy mò cày', timeDay:'Thứ ba, 26/02/2025', showtime:'17:00'},
        {nameFilm:'A Quiet Place Part II', theater: 'Galaxy Quận 7', timeDay:'Thứ ba, 26/02/2025', showtime:'19:30'},
        {nameFilm:'Candyman', theater: 'Galaxy Bình dương', timeDay:'Thứ ba, 26/02/2025', showtime:'21:00'},

        {nameFilm:'Free Guy', theater: 'Galaxy Bình chánh', timeDay:'Thứ tư, 27/02/2025', showtime:'12:00'},
        {nameFilm:'The French Dispatch', theater: 'Galaxy mèn mén', timeDay:'Thứ tư, 27/02/2025', showtime:'14:30'},
        {nameFilm:'West Side Story', theater: 'Galaxy mò cày', timeDay:'Thứ tư, 27/02/2025', showtime:'17:00'},
        {nameFilm:'Nightmare Alley', theater: 'Galaxy Quận 7', timeDay:'Thứ tư, 27/02/2025', showtime:'19:30'},
        {nameFilm:'Encanto', theater: 'Galaxy Bình dương', timeDay:'Thứ tư, 27/02/2025', showtime:'21:00'},

        {nameFilm:'Sing 2', theater: 'Galaxy Bình chánh', timeDay:'Thứ năm, 28/02/2025', showtime:'12:00'},
        {nameFilm:'The King Man', theater: 'Galaxy mèn mén', timeDay:'Thứ năm, 28/02/2025', showtime:'14:30'},
        {nameFilm:'Matrix 4', theater: 'Galaxy mò cày', timeDay:'Thứ năm, 28/02/2025', showtime:'17:00'},
        {nameFilm:'Ghostbusters: Afterlife', theater: 'Galaxy Quận 7', timeDay:'Thứ năm, 28/02/2025', showtime:'19:30'},
        {nameFilm:'The Green Knight', theater: 'Galaxy Bình dương', timeDay:'Thứ năm, 28/02/2025', showtime:'21:00'},
];
    const uniqueFilmNames = [...new Set(filmCinemar.map(film => film.nameFilm))]
    

    
    //     'Nhà gia tiên',
    //     'Bộ tứ báo thủ',
    //     'Nụ hôn bạc tỉ',
    //     'Avengers: Endgame',
    //     'Spider-Man: No Way Home',
    //     'Black Panther',
    //     'The Batman',
    //     'Dune',
    //     'Jurassic World: Dominion',
    //     'Top Gun: Maverick',
    //     'No Time to Die',
    //     'Shang-Chi and the Legend of the Ten Rings',
    //     'Eternals',
    //     'The Matrix Resurrections',
    //     'Fast & Furious 9',
    //     'Ghostbusters: Afterlife',
    //     'Minions: The Rise of Gru',
    //     'Lightyear',
    //     'The Flash',
    //     'Sonic the Hedgehog 2',
    //     'Uncharted',
    //     'The Suicide Squad',
    //     'A Quiet Place Part II',
    //     'Candyman',
    //     'Free Guy',
    //     'The French Dispatch',
    //     'West Side Story',
    //     'Nightmare Alley',
    //     'Encanto',
    //     'Sing 2'
    // ];
// UseRef
    const menuDropFilm = useRef(null)
    const menuDropTheater = useRef(null)
    const nameFilm = useRef(null)

// function
    const handlerDropMenuFilm = () => {
        setIsOpenMenuFilm(!isOpenMenuFilm) 
        setisOpenMenuTheater(false) 

    }

    const handlerDropMenuTheater = () => {
        
        setisOpenMenuTheater(!isOpenMenuTheater) 

    }

    const handleSetNameFilm = (e) =>{
        setIsNameFilm(uniqueFilmNames[e])
        setIsOpenMenuFilm(!isOpenMenuFilm) 
    }

    const getTheaterOfFilm = (e) =>{
        return filmCinemar.filter(film => film.nameFilm == e).map(film => film.theater)
    }
 
    const ArrTheaterOfFilm = isNameFilm ? getTheaterOfFilm(isNameFilm) : []

    
    return (
        
        <div className={className}>
            <div className= "flex flex-row gap-[1vw] items-center w-[140vh] min-h-[10vh] shadow-2xl">
                <div className="flex justify-around  w-full ">
                    <div 
                        onClick={handlerDropMenuFilm} 
                        className="flex items-center basis-[35vw] justify-between mx-3 cursor-pointer"
                    >
                        <div className="flex gap-5">
                            <img  src={one} alt="one" /> 
                            <p 
                                ref={nameFilm} 
                                className="w-[2] whitespace-nowrap truncate"
                            >
                                {!isNameFilm ? 'chọn phim' : isNameFilm}
                            </p>
                        </div>
                        <div>
                            <img  
                                src={arrowDown} 
                                alt="" 
                                className = {!isOpenMenuFilm ? 'block gap-2' : 'hidden'}
                            /> 
                            <img  
                                src={arrowUp} 
                                alt="" 
                                className={isOpenMenuFilm ? 'block gap-3' : 'hidden'}
                            /> 

                        </div>
                    </div>
                    <div 
                        onClick={isNameFilm ? handlerDropMenuTheater : ""} 
                        className={isNameFilm ? "flex items-center basis-[20vw] justify-between mx-2" : "flex items-center basis-[20vw] justify-between mx-2"}
                    >
                        <div className="flex gap-2">
                            <img 
                                src={two} 
                                alt=""
                            /> 
                            <p className={isNameFilm ? "opacity-100 " : "opacity-30 "}>chọn rạp</p>
                        </div>
                        <div>
                            <img 
                                src={arrowDown} 
                                alt="" 
                                className={isNameFilm ? "opacity-100 gap-4" : "opacity-30 gap-4"}
                            /> 
                        </div>

                    </div>
                    <div className="flex items-center basis-[15vw] justify-between mx-2" >
                        <div className="flex gap-2">
                            <img 
                                src={three} 
                                alt=""
                            /> 
                            <p>chọn ngày</p>
                        </div>
                        <div>
                            <img 
                                src={arrowDown} 
                                alt="" 
                                className="gap-4"
                            /> 
                        </div>
                    </div>
                    <div className = "flex items-center basis-[15vw] justify-between mx-2" >
                        <div className="flex gap-2">
                            <img 
                                src={four} 
                                alt=""
                            /> 
                            <p> chọn suất </p>
                        </div>
                        <div>
                            <img 
                                src={arrowDown} 
                                alt="arrowDown" 
                                className="gap-4"
                            /> 
                        </div>
                    </div>
                </div>
                <Button className= "w-[20vh] h-[9vh] bg-orange-400 right-0" > 
                    Mua vé nhanh
                </Button>
            </div>

            <div 
                ref={menuDropFilm} 
                className = 
                    {
                        !isOpenMenuFilm 
                            ? 
                            'hidden' 
                            : 
                            "absolute top-[43vh] left-[16vw] h-65 overflow-y-scroll shadow-2xl w-[28vw] cursor-pointer z-40 bg-white"
                    }
            >
                <ul>
                    {
                        uniqueFilmNames.map((ar,index) => (
                            <li 
                                onClick={() => handleSetNameFilm(index)} 
                                key={index} 
                                className="p-[2vh] hover:bg-sky-100"
                            >
                                {ar}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div 
                ref={menuDropTheater} 
                className = 
                    {
                        !isOpenMenuTheater 
                            ? 
                            'hidden' 
                            : 
                            "absolute top-[43vh] left-[39vw] h-auto overflow-y-scroll shadow-2xl w-[16vw] cursor-pointer z-40 bg-white"
                    }
            >
                <ul>
                    {
                        ArrTheaterOfFilm.map((ar,index) => (
                            <li 
                                onClick={() => handleSetNameFilm(index)} 
                                key={index} 
                                className="p-[2vh] hover:bg-sky-100"
                            >
                                {ar}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Bookticket