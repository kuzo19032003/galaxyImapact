import Button from "../button"
import {one,two,three,four,arrowDown,arrowUp} from "../../assets/images/images.jsx"
function Bookticket({className}){
    return (
        <div className={className}>
            <div className= "flex flex-row gap-[9vw] items-center w-[140vh] min-h-[10vh] shadow-2xl ">
                <div className="flex justify-around w-full ">
                    <div className="flex items-center basis-[20vw] justify-between">
                        <div className="flex gap-2">
                            <img src={one} alt="one"/> 
                            <p>chọn phim</p>
                        </div>
                        <div>
                            <img src={arrowDown} alt="" className="gap-4"/> 
                        </div>
                    </div>
                    <div className="flex items-center basis-[15vw] justify-between">
                        <div className="flex gap-2">
                            <img src={two} alt=""/> 
                            <p>chọn rạp</p>
                        </div>
                        <div>
                            <img src={arrowDown} alt="" className="gap-4"/> 
                        </div>

                    </div>
                    <div className="flex items-center gap-4">
                        <img src={three} alt=""/> 
                        <p>chọn ngày</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={four} alt=""/> 
                        <p>chọn suất</p>
                    </div>
                </div>
                <Button className= "w-[20vh] h-[9vh] bg-orange-400 right-0"> 
                    Mua vé nhanh
                </Button>
            </div>
        </div>
    )
}
export default Bookticket