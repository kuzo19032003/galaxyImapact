import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bill from "./bill/bill";
function Booking(){

  const location  = useLocation()

  const {theater,time,day,movie} = location.state 



  
  const [isSeatSelected,setIsSeatSelected] = useState([])
  const [isSeatSelling,setIsSeatSelling] = useState(["G7"])

  const [totalPrice,setTotalPrice] = useState("")


  const theaTers = {
      room1:{
        rows:5,
        col:5,
        seats: [
            [1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
            [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
        ]
      },
      room2:{
        rows:10,
        col:25,
        seats: null
      }
  } 
    const room = theaTers["room2"];
    const seats = room.seats || Array.from({ length : room.rows },() => Array(room.col).fill(1))



    
    const selectedSeat  = (seatLabel,seatNumber,) => {
          const idSeat = `${seatLabel}${seatNumber}`
          !isSeatSelling.includes(idSeat) &&
          setIsSeatSelected( (prev) => (
              prev.includes(idSeat) ? prev.filter( e => e !== idSeat ) : [...prev,idSeat]     
          ))     
    }   
    useEffect( () => {
      const priceBook = 60000
      setTotalPrice(() => (isSeatSelected.length * priceBook))
    },[isSeatSelected])

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
                        {
                          <ul className="shadow-lg w-auto bg-white rounded-md">
                             {
                               seats.map((col,rowIndex) => {
                                  let seatNumber = 1
                                  const totalRow = seats.length
                                  const seatLabel = String.fromCharCode(65 + (totalRow -1 - rowIndex))

                                  return (
                                    <li key={rowIndex} className = "flex items-center justify-between p-3" >
                                        <div className="text-lg -mt-4">
                                             {seatLabel}
                                        </div>
                                        <div key={rowIndex}  className="flex  justify-center gap-x-2 "  >
                                          {
                                            col.map((seat,colIndex)=>{
                                              const idSeat = `${rowIndex} - ${colIndex}`
                                              const LabelNumerSeat = `${seatLabel}${seatNumber}`
                                              if(seat===0) {
                                                    seatNumber = seatNumber 
                                                    return <div key={idSeat} className="w-10 h-10"></div>
                                              }
                                              return(
                                                      <button 
                                                          key={idSeat} 
                                                          onClick={(e) => selectedSeat(seatLabel,e.target.textContent)}
                                                          className={`w-5 h-5 rounded-md text-xs 
                                                                      transition duration-300 ease-in-out 
                                                                      focus:outline-none 
                                                                      ${
                                                                        isSeatSelling.includes(LabelNumerSeat) ? 
                                                                        "bg-slate-500 text-neutral-400 "
                                                                        : isSeatSelected.includes(LabelNumerSeat) 
                                                                        ? "bg-orange-400 text-white" 
                                                                        : "hover:bg-blue-400 hover:text-white bg-gray-200 hover:scale-150"
                                                                    }`}
                                                      >
                                                          {
                                                            seatNumber++
                                                          }
                                                      </button>
                                              ) 
                                            })
                                          }
                                        </div>
                                        <div className="text-lg -mt-4">
                                            {seatLabel}
                                        </div>
                                    </li>
                                  )  
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
                  <Bill isSeatSelected={isSeatSelected} totalPrice ={totalPrice} theaTer={theater} time={time} day={day} movie={movie}/>
              </div>
            </div>
      </div>
    )
}
export default Booking;