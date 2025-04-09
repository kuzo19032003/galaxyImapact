import { useState,useEffect } from "react";
import {useFilm} from "../../context/filmcontext/filmcontext"

import MovieCard from "../../components/film/moviecard/moviecard";
function Movie() {
  const {GetMovies} = useFilm()
  
  const [movies,setMovies] = useState([])
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true)
      const result = await GetMovies() 
      if(result.success){
        setMovies(result.Movies);
        setIsLoading(false)
      }
    }
    fetchMovies()
  },[])

    return (
      <div className="flex justify-center ">
        {isLoading 
          ? 
            <div className="flex justify-center items-center mt-[10vh]">
              <div className="animate-spin rounded-full h-10 w-10 border-b-3 border-gray-500"></div>
            </div>   
          :
            <div className="border-t-1 w-[95%] mt-5  flex flex-col justify-center gap-y-3 items-center">
              <div className="mt-5">
                <h1 className="font-bold text-2xl ">
                  Các phim đang chiếu tại rạp
                </h1>
              </div>
              <div className="grid md:grid-cols-3 mt-3 grid-cols-1 ">
                  { movies && 
                      movies.map((movie,index) => (
                        <div key={index}>
                            <MovieCard 
                              Film={movie}
                              isLink={true}
                              classTitle="text-black w-10rem"
                          />
                        </div>
                    ))
                  }
              </div>
            </div>
        }
      </div>
    );
  }
  export default Movie;