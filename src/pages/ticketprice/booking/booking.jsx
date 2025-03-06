import { useState } from "react";
function Booking(){

  const [isSeatSelected,setIsSeatSelected] = useState(["7 - 3"])

  const theaTer = {
      room1:{
        rows:5,
        col:5,
        seats: [
            [1,1,1,0,1,1,1,1,1,0,1,1,1],
            [1,1,0,1,1,1,1,1,0,1,1],
            [1,1,0,1,1,1,1,1,0,1,1],
            [1,1,0,1,1,1,1,1,0,1,1],
            [0,1,1,1,1,1,1,1,1,1,0],
            [1,1,0,1,1,1,1,1,0,1,1],
            [1,1,0,1,1,1,1,1,0,1,1],
            [0,1,1,1,1,1,1,1,1,1,0]
        ]
      },
      room2:{
        rows:10,
        col:25,
        seats: null
      }
  } 
    const room = theaTer["room1"];
    const seats = room.seats || Array.from({ length : room.rows },() => Array(room.col).fill(1))

    const selectedSeat  = (row,col) => {
          const idSeat = `${row} - ${col}`
          setIsSeatSelected(prev => [...prev,idSeat])
    }  
  
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
                                    <li key={rowIndex}   className = "flex items-center justify-between p-3" >
                                        <div className="text-lg -mt-4">
                                             {seatLabel}
                                        </div>
                                        <div key={rowIndex}  className="flex  justify-center gap-x-2 "  >
                                          {
                                            col.map((seat,colIndex)=>{
                                                  const idSeat = `${rowIndex} - ${colIndex}`
                                           
                                                  if(seat===0) {
                                                    seatNumber = 1 
                                                    return <div key={idSeat}   className="w-10 h-10"></div>
                                                  }
                                                  return(
                                                      <button key={idSeat} 
                                                              onClick={() => selectedSeat(rowIndex,colIndex)}
                                                              className={`w-5 h-5 rounded-md text-xs 
                                                                          transition duration-300 ease-in-out 
                                                                           focus:outline-none 
                                                                          ${isSeatSelected.includes(idSeat) 
                                                                                ? "bg-orange-400 text-white " 
                                                                                : "hover:bg-blue-400 hover:text-white bg-gray-200 hover:scale-150  "}`}
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
                    <div className="bg-gray-500 text-white text-center p-2 rounded-b-lg">
                            🎥 MÀN HÌNH 🎥
                    </div>
                    {/* ghi nhận ghế */}
                    <div className="mt-10">
                        <div className="flex gap-5">
                            <div className="flex items-center gap-x-2">
                               <span className="w-5 h-5 inline-block  bg-orange-400 "></span>
                               <span>
                                    Ghế đã bán
                               </span>
                            </div>
                            <div className="flex items-center gap-x-2">
                               <span className="w-5 h-5 inline-block  bg-blue-400"></span>
                               <span>
                                    Ghế đã chọn
                               </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* khung thanh toán */}
                <div className="col-span-2 -translate-x-5 ">
                      <div className="rounded-lg w-full min-h-114 shadow-2xl mt-15 ">
                          <div className="bg-orange-400 h-2 rounded-t-lg"></div>
                          
                          <div className="p-7">
                              <div className="flex flex-col">
                                  <div className="flex gap-10  mt-2">
                                        <img src="" alt="" width="150px" height="200px"/>
                                        <div className="flex flex-col">
                                            <span>Nhà gia tiên</span>
                                            <span>2D Phụ đề - T18</span>
                                        </div>
                                  </div>
                                  <span>
                                      Galaxy buôn ma thuột - Rạp 5
                                  </span>
                                  <span>
                                    Suất : 11h30 - Thứ sáu, 8/03/2025
                                  </span>
                              </div>
                              <div className="mt-7">
                                  <div className="border-1 border-dashed w-full  "></div>
                                  <div> 
                                      {
                                        isSeatSelected.map((e) =>(
                                            e
                                        ))
                                      }
                                  </div>
                                  <div className="border-1 border-dashed w-full  "></div>

                                  <div className="flex justify-between mt-5  ">
                                      <div>
                                          Tổng cộng :
                                      </div>
                                      <div>
                                          0 đ                                        
                                      </div>
                                  </div>
                                  <div className="flex gap-20 justify-center mt-5">
                                      <button>
                                          Quay lại
                                      </button>
                                      <button>
                                          Tiếp tục
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                </div>
              </div>
            </div>
      </div>
    )
}
export default Booking;