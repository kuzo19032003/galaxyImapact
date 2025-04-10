import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"

function Bill({id,isSeatSelected,HoldAndBook,theaTer,time,day,movie,Hall,ShowTimeId,basePrice})
{

    const [totalPrice,setTotalPrice] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const [openBooking,setOpenBooking] = useState(false)
    const navigate = useNavigate()
  
    const Day = new Date(time.split("T")[0]).toLocaleDateString("vi-VN")
    const formartDate = (time) => {
        const date = new Date(time);
        return isNaN(date.getTime())
            ? time
            : date.toLocaleDateString("vi-VN", { year: "numeric", month: "2-digit", day: "2-digit" });
    }
    const formatTime = (time) => {
        const date = new Date(time);
        return isNaN(date.getTime()) 
            ? time
            : date.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
    };
    const weekday = new Date(day).toLocaleDateString("vi-VN",{weekday:"long"})
   
    const Poster = movie.images.find(img => img.name === "Poster")?.imageUrl || ""  

  
    
    
    useEffect(()=>{
        const priceBook = basePrice
        setTotalPrice(() => (isSeatSelected.length * priceBook))  
    },[isSeatSelected])

    const HandlePayment = async () => {
        setIsLoading(true)
        const seatsId = isSeatSelected.map(e => e.id)

        if(seatsId.length <= 0){
            alert("Vui lòng chọn ghế !")
            setIsLoading(false)
            return;
        }else{
            const result = await HoldAndBook(id,ShowTimeId,seatsId)
            setIsLoading(false)
            if(result.success ){
                window.location.href = result.paymentUrl.paymentUrl
            }else{
                console.error("lỗi đặt vé");
            }
        }
    }

    return (
        <div className="md:col-span-2 md:-translate-x-5 ">
            <div className="md:hidden relative">
                {openBooking && 
                    <div className="fixed bottom-10 bg-white h-full w-full">
                        <div className="p-25 ">
                            <div className="flex flex-col ">
                                <div className="flex gap-10  mt-2">
                                    <img src={Poster} alt="" className="object-cover w-[30vw] h-[30vh]"/>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-xl">{movie.title}</span>
                                        <span>2D Phụ đề - {movie.genre}</span>
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
                                        <span className="font-medium text-base">{formartDate(day)} - {formatTime(time)} </span>
                                    </div>
                                    <div>
                                        <span >{weekday} , </span>
                                        <span className="font-medium text-base">{formartDate(day) }</span>
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
                }
                <div 
                    className="fixed bottom-0 w-full bg-orange-400 h-[10%] rounded-t-lg text-white flex items-center justify-center text-xl"
                    onClick={() => setOpenBooking(!openBooking)}
                >
                    <h1>Đặt vé</h1>
                </div>
            </div>
            <div className="md:block hidden rounded-lg w-full md:min-h-114 shadow-2xl mt-15 ">

                <div className="bg-orange-400 h-2 rounded-t-lg"></div>
                <div className=" p-7">
                    <div className="flex flex-col ">
                        <div className="flex gap-12  mt-2">
                            <img src={Poster} alt="" className="object-cover w-[10vw] h-[30vh]"/>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl">{movie.title}</span>
                                <span>2D Phụ đề - {movie.genre}</span>
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
                                <span className="font-medium text-base">{formartDate(day)} - {formatTime(time)} </span>
                            </div>
                            <div>
                                <span >{weekday} , </span>
                                <span className="font-medium text-base">{formartDate(day) }</span>
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