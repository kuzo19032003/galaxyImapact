import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {useFilm} from "../../../../context/filmcontext/filmcontext"
import Barcode from "../../../../components/barcode/Barcode"
function HoldAndBook(){
    const nav = useNavigate()
    const {GetTransactionInfor} = useFilm()
    const urlParams = new URLSearchParams(window.location.search)
    const responseCode = urlParams.get("status")

    const [transactionInfo,setTransactionInfo] = useState()
    const [isLoading,setIsLoading] = useState()
    const [transactionId,setTransactionId] = useState()
    
    const Day = transactionInfo ? (transactionInfo?.price).toLocaleString("vi-VN") : 0
    const Money = transactionInfo ?  (transactionInfo?.price).toLocaleString("vi-VN") : 0

   

    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                setIsLoading(true)
                const ref = urlParams.get("txnRef");
                const result = await GetTransactionInfor(ref);
                setTransactionId(ref)
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
                <div className="flex flex-col gap-y-50 ">
                    <div >
                         {  
                            isLoading 
                            ? 
                                <div className="flex justify-center items-center">
                                    <div className="animate-spin rounded-full h-15 w-15 border-b-3 border-white"></div>
                                </div>
                            : 
                                responseCode === "success" 
                                ? 
                                    <div className="bg-gray-300 rounded-xl flex flex-col gap-y-20 p-5 h-[90vh] w-[40vw]">
                                        <div>
                                            <p className="text-center text-lime-600  text-2xl">Bạn đã đặt vé thành công ! </p> 
                                        </div>
                                        <div  className="flex flex-col gap-y-5 text-2xl">
                                            <div className="flex justify-between">
                                                <span>Ngày đặt vé : </span>
                                                <span> {Day} </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Tổng tiền : </span>
                                                <span>{Money} VND</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>
                                                    Ghế đã đặt: 
                                                </span>
                                                <span>
                                                    {transactionInfo?.seats.join(", ")}
                                                </span>
                                            </div>
                                        </div>
                                        <div >
                                            <Barcode transactionId={transactionId} />
                                        </div>
                                        <div className="flex gap-x-5  justify-center ">
                                            <button 
                                                className="bg-lime-600  text-white p-3 rounded-lg"
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
                                :
                                    <p className="text-red-600">Giao dịch không thành công </p>
                         }
                    </div>                    
                </div>
            </div>
        </div>
    )
}
export default HoldAndBook