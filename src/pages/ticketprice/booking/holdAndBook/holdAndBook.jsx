import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {useFilm} from "../../../../context/filmcontext/filmcontext"
function HoldAndBook(){
    const nav = useNavigate()
    const {GetTransactionInfor} = useFilm()
    const urlParams = new URLSearchParams(window.location.search)
    const responseCode = urlParams.get("status")

    const [transactionInfo,setTransactionInfo] = useState()
    const [isLoading,setIsLoading] = useState()


    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                setIsLoading(true)
                const ref = urlParams.get("txnRef");
                const result = await GetTransactionInfor(ref);
                setIsLoading(false)
                
                if (result) {
                    setTransactionInfo({
                        date: result.paymentUrl.startTime,
                        price: result.paymentUrl.price || "Không xác định",
                        seats: result.paymentUrl.seats || [],
                    });
                }


            } catch (err) {
                console.error(err);
            }
        };

        fetchTransaction();
    }, []);

    return(
        <div>
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
                <div className="bg-white h-[50vh] w-[40vw] rounded-2xl flex flex-col  justify-center gap-y-20">
                    <div className="text-2xl">
                         {  
                            isLoading ? <p className="text-center">Đang tải thông tin giao dịch...</p>
                            : responseCode === "success" 
                                ? 
                                <div className="flex flex-col gap-6 mx-8">
                                    <p className="text-center text-green-600">Bạn đã đặt vé thành công ! </p> 
                                    <span>📅 Ngày giao dịch: {transactionInfo?.date}</span>
                                    <span>💰 Giá tiền: {transactionInfo?.price} VND</span>
                                    <span>🎟️ Các ghế được đặt:  {transactionInfo?.seats.join(", ")}
                                    </span>
                                </div>
                                
                                :<p className="text-red-600">Giao dịch không thành công </p>


                         }
                    </div>
                    <div className="flex gap-x-5  justify-center">

                        <button 
                            className="bg-green-400 text-white p-3 rounded-xl"
                            onClick={() => nav("/")}
                        >
                            {
                                responseCode === "success" 
                                ? "Xác nhận thông tin  " 
                                : "Đặt lại vé xem phim "
                            }
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default HoldAndBook