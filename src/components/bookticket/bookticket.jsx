import Button from "../button"
import { useState,useRef } from "react"
import {one,two,three,four,arrowDown,arrowUp} from "../../assets/images/images.jsx"
function Bookticket({className}){

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isNameFilm, setIsNameFilm] = useState(null)


    const arrAress = [
        'Nhà gia tiên',
        'Bộ tứ báo thủ',
        'Nụ hôn bạc tỉ',
        'Nhà gia tiên',
        'Bộ tứ báo thủ',
        'Nụ hôn bạc tỉ',
        'Nhà gia tiên',
        'Bộ tứ báo thủ',
        'Nụ hôn bạc tỉ',
        'Nhà gia tiên',
        'Bộ tứ báo thủ',
        'Nụ hôn bạc tỉ',
        'Nhà gia tiên',
        'Bộ tứ báo thủ',
        'Nụ hôn bạc tỉ',
        'Nhà gia tiên',
        'Bộ tứ báo thủ',
        'Nụ hôn bạc tỉ'
    ]

    const menuDrop = useRef(null)

    const handlerDropMenu = () => {
        setIsOpenMenu(!isOpenMenu) 
    }

    const handleSetNameFilm = (e) =>{
        setIsNameFilm(e)  
        console.log(e);
        
    }
    


    return (
        
        <div className={className}>
            <div className= "flex flex-row gap-[1vw] items-center w-[140vh] min-h-[10vh] shadow-2xl">
                <div className="flex justify-around  w-full ">
                    <div onClick={handlerDropMenu} className="flex items-center basis-[20vw] justify-between mx-3 cursor-pointer">
                        <div className="flex gap-2">
                            <img src={one} alt="one"/> 
                            <p>{!isNameFilm ? 'chọn phim' : 'mai'}</p>
                        </div>
                        <div>
                            <img  src={arrowDown} alt="" className={!isOpenMenu ? 'block gap-2' : 'hidden'}/> 
                            <img  src={arrowUp} alt="" className={isOpenMenu ? 'block gap-3' : 'hidden'}/> 

                        </div>
                    </div>
                    <div className="flex items-center basis-[15vw] justify-between mx-2">
                        <div className="flex gap-2">
                            <img src={two} alt=""/> 
                            <p>chọn rạp</p>
                        </div>
                        <div>
                            <img src={arrowDown} alt="" className="gap-4"/> 
                        </div>

                    </div>
                    <div className="flex items-center basis-[15vw] justify-between mx-2">
                        <div className="flex gap-2">
                            <img src={three} alt=""/> 
                            <p>chọn ngày</p>
                        </div>
                        <div>
                            <img src={arrowDown} alt="" className="gap-4"/> 
                        </div>
                    </div>
                    <div className="flex items-center basis-[15vw] justify-between mx-2">
                        <div className="flex gap-2">
                            <img src={four} alt=""/> 
                            <p>chọn suất</p>
                        </div>
                        <div>
                            <img src={arrowDown} alt="" className="gap-4"/> 
                        </div>
                    </div>
                </div>
                <Button className= "w-[20vh] h-[9vh] bg-orange-400 right-0"> 
                    Mua vé nhanh
                </Button>
            </div>

            <div ref={menuDrop} className= {!isOpenMenu ? 'hidden' : "absolute top-[50vh] left-[16vw] h-50 overflow-y-scroll shadow-2xl w-[18vw] cursor-pointer z-40 bg-white"}>
                <ul>
                    {
                        arrAress.map((ar,index) => (
                            <li onClick={() => handleSetNameFilm(index)} key={index} className="p-[2vh] hover:bg-sky-100">{ar}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Bookticket