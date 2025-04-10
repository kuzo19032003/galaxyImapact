function SelectedShowTimes({isOpenShowTimes,date,startIndex,visibleCount,isLoading,showTime,selectedDay,setSelectedDay,selectedShowTime,setSelectedShowTime,handleNext,handlePrev,OpenShowTimes          }) {
  return (
    <div className={`w-[90%] shadow-xl rounded-xs p-5 transition-all duration-700 overflow-hidden cursor-pointer 
        ${isOpenShowTimes ? ' min-h-[15rem]' : 'min-h-0 relative'}`}         >
        <div onClick={() => OpenShowTimes()} >
            <h4 className="font-bold textx-xl">Chọn Suất Chiếu </h4>
        </div>
        <div className={` 
            ${isOpenShowTimes ? ' translate-y-2 opacity-100 ' : 'translate-y--20rem opacity-10 absolute'}`}
        >
        <div className="flex flex-rows gap-x-1 mt-7 md:p-5 p-3  relative overflow-hidden border-b-2 " >
            <button 
            className="absolute md:top-12 top-7 md:left--20  z-10 "
            onClick={() => handlePrev()}
            >
            ◀ 
            </button>
            <button 
            className="absolute md:right-25 right-10 md:top-12 top-7 z-10"
            onClick={() => handleNext()}
            >
            ▶
            </button>
            {date &&
            date.slice(startIndex,startIndex + visibleCount).map((item,index) => {
                return (                    
                <div className =
                    {
                    `md:w-[6vw] w-[11vw] h-[5rem] flex flex-col items-center justify-center 
                        rounded-xl cursor-pointer md:ml-8 ml-5 transition-all 
                        duration-300 ease-in-out`
                    + (selectedDay === item ? " bg-blue-500 text-white" : " bg-gray-200 text-black")
                    }  
                    key={index}
                    style={{ transform: `translateX(-${startIndex * 3}vw)` }}
                    onClick={() => {setSelectedDay(item)}}
                >
                    <p className="overflow-auto whitespace-nowrap">
                        {
                            new Date(item).toLocaleDateString("vi-VN",{weekday:"long"})
                        }
                    </p>  
                    <p>
                        {new Date(item).toLocaleDateString("vi-VN",{day:"2-digit", month:"2-digit"})}
                    </p>
                </div>
                )}) 
            } 
        </div>
        <div>
        {isLoading 
            ? 
            <div className="flex justify-center items-center mt-[10vh]">
                <div className="animate-spin rounded-full h-10 w-10 border-b-3 border-gray-500"></div>
            </div> 
            : 
            showTime && 
                <div className="flex flex-col md:gap-5 gap-10 md:mt-7 mt-10 p-5 ">
                    {showTime.map((item,index) => (
                        <div key={index}>
                        <h2 className="font-bold text-lg">{item.theater.name}</h2>
                        <div className="flex flex-row gap-2 mt-2 ml-20">
                            {item.showtimes.map((showtime,index) => (
                                <button 
                                key={index} 
                                className={`px-4 py-2 rounded-lg border border-gray-300 text-gray-700 
                                    hover:bg-blue-100 hover:text-blue-600 transition-all duration-200 
                                    ${selectedShowTime?.showTime?.id === showtime.id ? "bg-blue-500 text-white font-semibold" : ""}
                                `}
                                onClick={() => setSelectedShowTime({ theater: item.theater, showTime: showtime })}
                                >
                                {showtime.time}
                                </button>
                            ))}
                        </div>
                        </div>      
                    ))}
                </div>
        }
        </div>
        </div>
    </div>
  );
}
export default SelectedShowTimes;