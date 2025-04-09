function SelectedSeat({selectedMovies,selectedShowTime,handleSubmit  }) {
  return (
    <div className="col-span-1 mt-20 shawdow-2xl rounded-xs bg-white  h-[75vh] overflow-hidden mr-10">
    <div className="bg-orange-500 w-full h-15 rounded-t-md flex items-center justify-center text-white text-lg">
            Đặt vé phim
    </div>
        {selectedMovies &&
          <div className="flex flex-col gap-5 mt-5 ml-5">
            <div className="flex flex-row gap-5">
                <div>
                    <img src={selectedMovies.images[0].imageUrl} alt=""  className="w-[10vw] h-[30vh]"/>
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
            <div>
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