import { useState,useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";

import { useFilm } from "../../../context/filmcontext/filmcontext";
import Bill from "./bill/bill";
function Booking(){

  const location  = useLocation()

  const {theater,time,day,movie,hall,showTimeId} = location.state
  console.log("Theater",theater)
  console.log("Time",time)
  console.log("Day",day)
  console.log("Movie",movie)
  console.log("Hall",hall)
  console.log("ShowTimeId",showTimeId);
  
  const [isSeatSelected,setIsSeatSelected] = useState([])
  const [isSeatSelling,setIsSeatSelling] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const {GetSeatOfHall,HoldAndBook,GetBookedseats} = useFilm()
  const [seats,setSeats] = useState([])

  console.log(movie)

    const nav = useNavigate()

    const selectedSeat  = (seat) => {
          const idSeat = seat
          setIsSeatSelected( (prev) => {
            const isExist = prev.some(seat => seat.id === idSeat.id)
            return isExist ? prev.filter( e => e.id !== idSeat.id ) : [...prev,idSeat]     
          
          })     
    } 

    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"))
    

    
    useEffect( () => {
      

      !token && !user && nav("/")

      const log = async () => {
          setIsLoading(true)
          const data = await GetSeatOfHall(hall)
          const bookedSeat = await GetBookedseats(showTimeId)
          setIsLoading(false)

          let seatsTemporary = []
          let rowSeat = -1
          
          setIsSeatSelling(bookedSeat.paymentUrl)
         
          

          data.seats.forEach((seat,index) =>{
              const rowLetter = seat.seatNumber[0]
              const seatNumber = parseInt(seat.seatNumber.slice(1))
              
              if(seatNumber === 1){
                  rowSeat++
                  seatsTemporary[rowSeat] = []
              }
              seatsTemporary[rowSeat].push(seat)
 
            })       
            setSeats(seatsTemporary)
      }
      log() 
    },[])

    return (
      <div >
            <div className="w-full h-2 bg-gray-100"></div>
            <div className="w-full min-h-140 ">
              <div className="bg-white w-full min-h-25 flex items-center justify-center">
                  <p className="text-lg font-bold text-blue-600">
                      Chọn ghế 
                  </p>
              </div>
              <div className="bg-gray-100 min-h-115 grid grid-cols-6">
                <div className="col-span-4 m-15">
                    <div className="grid">
                        { isLoading 
                          ? 
                            <ul className="shadow-lg w-auto bg-white rounded-md min-h-50 flex items-center justify-center">
                                <li>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-3 border-gray"></div>
                                </li>
                            </ul>
                          :
                            <ul className="shadow-lg w-auto bg-white rounded-md">
                              {
                          
                                //     let seatNumber = 1
                                //     const totalRow = seats.length
                                //     const seatLabel = String.fromCharCode(65 + (totalRow -1 - rowIndex))
                                //     return (
                                //       <li key={rowIndex} className = "flex items-center justify-between p-3" >
                                //           <div className="text-lg -mt-4">
                                //                {seatLabel}
                                //           </div>
                                //           <div key={rowIndex}  className="flex  justify-center gap-x-2 "  >
                                //             {
                                //               col.map((seat,colIndex)=>{
                                //                 const idSeat = `${rowIndex} - ${colIndex}`
                                //                 const LabelNumerSeat = `${seatLabel}${seatNumber}`
                                //                 if(seat===0) {
                                //                       seatNumber = seatNumber 
                                //                       return <div key={idSeat} className="w-10 h-10"></div>
                                //                 }
                                //                 return(
                                //                         < button 
                                //                             key={idSeat} 
                                //                             onClick={(e) => selectedSeat(seatLabel,e.target.textContent)}
                                //                             className =
                                //                             {`w-5 h-5 rounded-md text-xs 
                                //                               transition duration-300 ease-in-out 
                                //                               focus:outline-none 
                                //                               ${
                                //                                 isSeatSelling.includes(LabelNumerSeat) ? 
                                //                                 "bg-slate-500 text-neutral-400 "
                                //                                 : isSeatSelected.includes(LabelNumerSeat) 
                                //                                 ? "bg-orange-400 text-white" 
                                //                                 : "hover:bg-blue-400 hover:text-white bg-gray-200 hover:scale-150"
                                //                               }`
                                //                             }
                                //                         >
                                //                             {
                                //                               seatNumber++
                                //                             }
                                //                         </button>
                                //                 ) 
                                //               })}
                                //           </div>
                                //           <div className="text-lg -mt-4">
                                //               {seatLabel}
                                //           </div>
                                //       </li>
                                //     )  
                                //  }) 
                                  seats.slice().reverse().map((col, rowIndex) => {
                                    let seatNumber = 1;
                                    const totalRow = seats.length;
                                    const seatLabel = String.fromCharCode(65 + (totalRow - 1 - rowIndex));
                                  
                                    const sortSeat  = col.sort((a,b) => {
                                      const numA = parseInt(a.seatNumber.slice(1))
                                      const numb = parseInt(b.seatNumber.slice(1))
                                      return numA - numb
                                    })
              
                                    return (
                                      <li key={rowIndex} className="flex items-center justify-between p-3">
                                        {/* dãy chữ */}
                                        <div className="text-lg -mt-4">{seatLabel}</div>
                                        
                                        <div className="flex justify-center gap-x-2">
                                            {sortSeat.map((seat, colIndex) => {
                                              
                                           
                                              const idSeat = `${rowIndex}-${colIndex}`;
                                            
                                              const selected = isSeatSelected.some(s => s.id === seat.id)
                                              const selling = isSeatSelling.some(s => s === seat.id)
                                                                        
                                                if (seat === 0) {
                                                  return <div key={idSeat} className="w-10 h-10"></div>;
                                                }
                                                return (
                                                  <button
                                                      key={idSeat}
                                                      onClick={() => selectedSeat(seat)}
                                                      disabled={selling}
                                                      className={
                                                        `w-5 h-5 rounded-md text-xs transition duration-300 ease-in-out 
                                                        focus:outline-none 
                                                        ${
                                                          selling
                                                          ? "bg-slate-500 text-neutral-400":
                                                          selected
                                                          ? "bg-orange-400 text-white"
                                                          : "hover:bg-blue-400 hover:text-white bg-gray-200 hover:scale-150"
                                                        }`
                                                      }
                                                  >
                                                      {
                                                        seat.seatNumber.slice(1)
                                                      }
                                                  </button>
                                                );
                                            })}
                                        </div>
                                        {/* dãy chữ */}
                                        <div className="text-lg -mt-4">{seatLabel}</div>
                                      </li>
                                    );
                                  })
                              }
                            </ul>
                        }
                    </div>
                    {/* màn hình */}
                    <div className="bg-zinc-600 text-white text-center p-2 rounded-b-lg">
                            🎥 MÀN HÌNH 🎥
                    </div>
                    {/* ghi nhận ghế */}
                    <div className="mt-10">
                        <div className="flex gap-5">
                            <div className="flex items-center gap-x-2">
                               <span className="w-5 h-5 inline-block  bg-slate-500"></span>
                               <span>
                                  Ghế đã bán
                               </span>
                            </div>
                            <div className="flex items-center gap-x-2">
                               <span className="w-5 h-5 inline-block  bg-orange-400 "></span>
                               <span>
                                    Ghế đã chọn
                               </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* khung thanh toán */}
                  <Bill 
                      id = {user.id}
                      isSeatSelected={isSeatSelected}  
                      theaTer={theater} 
                      time={time} 
                      day={day} 
                      movie={movie}
                      HoldAndBook={HoldAndBook}
                      Hall = {hall}
                      ShowTimeId = {showTimeId}
                  />
              </div>
            </div>
      </div>
    )
}
export default Booking;