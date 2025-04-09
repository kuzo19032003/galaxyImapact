function SelectedLocation({isOpenLocation,selectedlocation,isLoading,location,setIsOpenLocation,SetSelectedlocation,setIsOpenFilm,openLocation,isOpenFilm }) {
  return (
    <div className={`w-[90%] shadow-xl rounded-xs p-5 transition-all duration-700 cursor-pointer overflow-hidden 
        ${isOpenLocation ? ' min-h-[15rem] ' : 'min-h-0 relative'}`}         
      >
          <div onClick={() => openLocation()} >
              <h4 className="font-bold textx-xl">Chọn vị trí {selectedlocation &&  " - " + selectedlocation}</h4>
          </div>
          <div className={` 
                ${isOpenLocation ? 'translate-y-2 opacity-100' : 'translate-y--100rem opacity-20 absolute'}`}
          >
          {isLoading 
            ? 
              <div className="flex justify-center items-center mt-[10vh]">
                <div className="animate-spin rounded-full h-10 w-10 border-b-3 border-gray-500"></div>
              </div>                 
            :
              <div className="grid grid-cols-4 gap-5 mt-7  ">
                {location &&
                  location.map((item,index) => {
                    return (
                      <div key={index} 
                        className="border-2 border-gray-300 p-2 flex justify-center items-center justify-between cursor-pointer hover:bg-gray-200 rounded-md hover:text-gray-500"
                        onClick={() => {setIsOpenLocation(false), SetSelectedlocation(item), setIsOpenFilm(!isOpenFilm)}}
                      >
                        {item}
                      </div>
                    )
                  })
                }
              </div>
          }
          </div>
      </div>
  );
}
export default SelectedLocation;