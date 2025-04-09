function Transaction({inforBooking,isLoading})
{
     
    return(
        <div className=" w-[55vw] h-[50vh] mt-3 text-center">
            { inforBooking.lenght = 0
                ?
                    <span>
                        Lưu ý : chỉ hiển thị 10 giao dịch gần nhất 
                    </span>
                :
                    <div className="bg-white shadow-xl rounded-xl p-5 h-[70vh] overflow-y-scroll ">
                        {isLoading 
                            ?
                                <div className="flex justify-center items-center mt-[10vh]">
                                    <div className="animate-spin rounded-full h-10 w-10 border-b-3 border-gray-500"></div>
                                </div>  
                            :
                            inforBooking && 
                                <div className="flex flex-col gap-y-10">
                                    {   inforBooking.map((infor,index) => {
                                            const date = new Date(infor.showtime);
                                            const day = date.toLocaleDateString("vi-VN", {
                                                weekday: "long",
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric"
                                            });

                                            const time = date.toLocaleTimeString("vi-VN", {
                                            hour: "2-digit",
                                            minute: "2-digit"
                                            });
                                        return (
                                            <div key={index} className="grid grid-cols-5 shadow-lg bg-gray-300 text-gray-500 rounded-xl p-5 gap-x-20">
                                                <div className="flex justify-center items-center font-medium gap-x-2 col-span-2">
                                                    <p>{day} </p>  
                                                    <p> - {time} </p> 
                                                </div>
                                                <div className="col-span-2 font-medium break-words whitespace-normal w-full">
                                                    Ghế : {infor.seatNumbers.map(seat => seat + ",")}
                                                </div>
                                                <div className="col-span-1 font-medium">
                                                    <p>
                                                        Tình Trạng 
                                                    </p>
                                                    <span className={infor?.bookingStatus === "CANCELLED" ? "text-red-500" : "text-green-500"}>
                                                        {infor.bookingStatus}
                                                    </span>
                                                </div>
                                            </div>)
                                        })
                                    }
                                </div>
                        }
                    </div>
            }
        </div>
    )
}
export default Transaction