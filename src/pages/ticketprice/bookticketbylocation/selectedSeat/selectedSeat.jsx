import { useState } from "react";
function SelectedSeat({selectedMovies,selectedShowTime,handleSubmit}) {
  const [isOpenSelected , setIsOpenSelected] = useState(true)
  return (
    <div className="md:col-span-1 mt-20 shawdow-2xl rounded-xs bg-white  md:h-[75vh] overflow-hidden  md:w-[90%] w-[110%] md:mr-15 ">
        <div className="relative md:hidden ">
            <div className=
                {`flex items-center justify-center  fixed bottom-14 w-full h-full bg-white tranform absolute transition-all duration-500 ease-in-out
                  ${isOpenSelected ? "translate-y-0 opacity-100" : " translate-y-full opacity-0" }`}
            >
                {selectedMovies &&
                  <div className="flex  flex-col justify-center items-center gap-y-5">
                      <h2 className="font-bold text-2xl">Phim { "-" + selectedMovies.title}</h2>
                      <div>
                        <img src={selectedMovies.images[0].imageUrl} alt=""  className="w-[50vw] h-[50vh] "/>
                      </div>
                      <div>
                          {selectedShowTime &&
                            <div className="flex flex-col gap-2 mt-2 text-xl font-medium">
                              <div>
                                  <span>Suất{ ": "  + selectedShowTime?.showTime?.time } </span> -  
                                  <span>
                                    Ngày  {new Date(selectedShowTime?.showTime?.startTime).toLocaleDateString("vi-VN")}
                                  </span>
                              </div>
                              <div>
                                  <span>Rạp : {selectedShowTime?.theater?.name}</span>
                                  <span> - {selectedShowTime?.theater?.location}</span>
                              </div>
                            </div>  
                          }
                      </div>
                 
                      <div className="flex w-full mr-5">
                          <button className="bg-blue-500 text-white w-[30%] h-10 rounded-md mt-5 ml-5 hover:bg-blue-600"
                              onClick={() => handleSubmit()} 
                          >
                              Chọn ghế
                          </button>
                      </div>
                  </div>
            }
            </div>
            <div 
              className=
                {`bg-orange-500 md:w-full  h-15 rounded-t-md 
                  flex items-center justify-center text-white text-lg md:relative fixed bottom-0 w-full `
                }
                onClick={() => setIsOpenSelected(!isOpenSelected) }
              >
                  Đặt vé phim
            </div>
        </div>
        <div 
          className=
            {`bg-orange-500 md:w-full  h-15 rounded-t-md 
              flex items-center justify-center text-white text-lg `
            }
          >
              Đặt vé phim
        </div>
        {selectedMovies &&
          <div className={`flex flex-col gap-5 mt-5 ml-5 mb-5 md:block  hidden`}>
            <div className="flex flex-row gap-5">
                <div>
                    <img src={selectedMovies.images[0].imageUrl} alt=""  className="md:w-[10vw] md:h-[30vh] "/>
                </div>
                <div>
                    <h2 className="font-bold">Phim { "-" + selectedMovies.title}</h2>
                    {selectedShowTime &&
                        <div className="flex flex-col gap-2 mt-2">
                          <div>
                            <span>Suất { ":" + selectedShowTime?.showTime?.time } </span> -  
                            <span>
                                Ngày  {new Date(selectedShowTime?.showTime?.startTime).toLocaleDateString("vi-VN")}
                            </span>

                          </div>
                          <div>
                            <span>Rạp : {selectedShowTime?.theater?.name}</span>
                            <span> - {selectedShowTime?.theater?.location}</span>
                          </div>
                        </div>  
                  }
                </div>
            </div> 
   
            <div className="flex justify-end mr-5">
                <button className="bg-blue-500 text-white w-[30%] h-10 rounded-md mt-5 ml-5 hover:bg-blue-600"
                    onClick={() => handleSubmit()} 
                >
                    Chọn ghế
                </button>
            </div>
          </div>
        }
    </div>
  );
}   
export default SelectedSeat;