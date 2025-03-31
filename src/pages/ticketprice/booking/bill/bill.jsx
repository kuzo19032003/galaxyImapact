import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"

function Bill({isSeatSelected,HoldAndBook,theaTer,time,day,movie,Hall,ShowTimeId})
{
    const [totalPrice,setTotalPrice] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    
    const navigate = useNavigate()
    
    const Day = new Date(time.split("T")[0]).toLocaleDateString("vi-VN")
    const Time = new Date(time).toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})
    const weekday = new Date(day).toLocaleDateString("vi-VN",{weekday:"long"})
   
    
    useEffect(()=>{
        const priceBook = 70000
        setTotalPrice(() => (isSeatSelected.length * priceBook))  
    },[isSeatSelected])

    const HandlePayment = async () => {
        setIsLoading(true)
        const seatsId = isSeatSelected.map(e => e.id)
        console.log(seatsId)
        if(seatsId.length <= 0){
            alert("Vui lòng chọn ghế !")
            setIsLoading(false)
            return;
        }else{
            const result = await HoldAndBook(14,ShowTimeId,seatsId)
            setIsLoading(false)
            if(result.success ){
                window.location.href = result.paymentUrl.paymentUrl
            }else{
                console.error("lỗi đặt vé");
            }
        }
    }

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
                                - Rạp {Hall}
                            </span>
                        </div>
                        <div className="flex gap-x-5">
                            <div >
                                <span >Suất : </span>
                                <span className="font-medium text-base">{Day} - {Time} </span>
                            </div>
                            <div>
                                <span >{weekday} , </span>
                                <span className="font-medium text-base">{Day}</span>
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
                                    e.seatNumber + "  "
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
                            <button 
                                className="bg-orange-500 rounded-xl p-3 w-[40%] text-white"
                                onClick={() => HandlePayment()}
                                disabled={isLoading}
                            >
                               { isLoading 
                                    ? 
                                      <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                      </div>  
                                    : "Tiếp tục"
                               }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bill