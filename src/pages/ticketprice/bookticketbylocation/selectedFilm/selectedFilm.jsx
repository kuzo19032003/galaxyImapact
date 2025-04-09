import MovieCard from "../../../../components/film/moviecard/moviecard";
function SelectedFilm({isOpenFilm,selectedMovies,isLoading,movies,handleSelectedFilm,openMovies   }){
    return(
        <div className={`w-[90%] shadow-xl rounded-xs p-5 transition-all duration-700 overflow-hidden cursor-pointer 
            ${isOpenFilm ? ' min-h-[15rem]' : 'min-h-0 relative'}`}         >
        <div onClick={() => openMovies()} >
            <h4 className="font-bold textx-xl">Chọn Phim {selectedMovies &&  "-" + `${selectedMovies.title}` }</h4>
        </div>
        <div className={` 
              ${isOpenFilm ? ' translate-y-2 opacity-100 ' : 'translate-y--20rem opacity-10 absolute'}`}
        >
          {isLoading 
            ? 
              <div className="flex justify-center items-center mt-[10vh]">
                <div className="animate-spin rounded-full h-10 w-10 border-b-3 border-gray-500"></div>
              </div> 
            :
              <div className="grid grid-cols-3 gap-5 mt-7 ">
                {
                  movies.map((item,index) => {
                    return (                    
                      <div key={index} onClick={() => handleSelectedFilm(item)}>
                          <MovieCard 
                            key={index} 
                            Film={item} 
                            classCard="w-[12rem] h-[37vh]"  
                            classTitle={"text-black"} 
                            isLink={false} 
                          />
                      </div>
                    )})
                } 
              </div>
          }
        </div>
    </div>
    )
}
export default SelectedFilm;