function TicketPrice() {
    return (
      <div >
        <div className="w-full h-2 bg-gray-100"></div>
        <div className="w-full min-h-140 ">
          <div className="bg-white w-full min-h-25 flex items-center justify-center">
              <p className="text-lg font-bold text-blue-600">
                  Chọn phim / Rạp / Suất 
              </p>
          </div>
          <div className="bg-gray-100 min-h-115 grid grid-cols-3">
             <div className="col-span-2 m-15">
                <div  className="w-[50%] bg-red-200 shadow-xl rounded-xs">
                    a
                </div>
                <div>
                  b
                </div>
                <div>
                  c
                </div>
             </div>
             <div className="col-span-1">
                b
             </div>
          </div>
        </div>
      </div>
    );
  }
  export default TicketPrice;