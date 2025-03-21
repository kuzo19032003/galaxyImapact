import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Bill({isSeatSelected,totalPrice,theaTer,time,day,movie })
{

    const navigate = useNavigate()
    return (
        <div className="col-span-2 -translate-x-5 ">
            <div className="rounded-lg w-full min-h-114 shadow-2xl mt-15 ">
                <div className="bg-orange-400 h-2 rounded-t-lg"></div>
                <div className="p-7">
                    <div className="flex flex-col ">
                        <div className="flex gap-12  mt-2">
                            <img src={movie.img2} alt="" width="170px" height="200px"/>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl">{movie.nameFilm}</span>
                                <span>2D Phụ đề - {movie.ages}</span>
                            </div>
                        </div>
                        <div className="mt-5">
                            <span className="font-medium text-base">
                               {theaTer}
                            </span>
                            <span>
                                - Rạp 5
                            </span>
                        </div>
                        <div className="flex gap-x-5">
                            <div >
                                <span >Suất : </span>
                                <span className="font-medium text-base">{time}</span>
                            </div>
                            <div>
                                <span >Thứ sáu, </span>
                                <span className="font-medium text-base">{day}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7">
                        <div className="border-1 border-dashed w-full  "></div>
                        {isSeatSelected.length !=0 &&
                        <div> 
                            <span>Ghế : </span>
                            <span className="font-medium">
                                {
                                isSeatSelected.map((e) =>(
                                    e + "  "
                                ))
                                }
                            </span>
                            <div className="border-1 border-dashed w-full  "></div>
                        </div>
                        }
                        {/* tổng tiền */}
                        <div className="flex justify-between mt-5  ">
                            <div>
                                Tổng cộng :
                            </div>
                            <div className="font-medium">
                                {
                                totalPrice + "  "
                                }
                                VND
                            </div>
                        </div>
                        <div className="flex gap-20 justify-end mt-5">
                            <button 
                                className="text-orange-500" 
                                onClick={() => navigate(-1)}
                            >
                                Quay lại
                            </button>
                            <button className="bg-orange-500 rounded-xl p-3 w-[40%] text-white">
                                Tiếp tục
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bill