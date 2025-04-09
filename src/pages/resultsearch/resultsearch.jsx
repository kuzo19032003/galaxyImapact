import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useFilm } from "../../context/filmcontext/filmcontext"
import MovieCard from "../../components/film/moviecard/moviecard"

function ResultSearch(){
    const [moviesSearch,setMoviesSearch] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const {GetResultMovies} = useFilm()

console.log(moviesSearch);

    useEffect(() => {
        const fetchResultSearch = async () => {
            setIsLoading(true)
            const result = await GetResultMovies(title)
            if(result){
                setMoviesSearch(result.Movies)
                setIsLoading(false)
            }
        }
        fetchResultSearch()
    },[title])
    return(
        <div className=" flex justify-center w-full ">
            {isLoading 
                ? 
                    <div className="flex justify-center items-center mt-[10vh]">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-3 border-gray-500"></div>
                    </div>   
                :
                    <div className="w-[50vw]  border-t-2 mt-10">
                        { moviesSearch && 
                            moviesSearch.length ==0 
                                ? 
                                    <div className="justify-start mt-5">
                                        {moviesSearch.length} Kết quả tìm kiếm cho  "{title}"
                                    </div>
                                :
                                <div className="flex flex-col gap-10">
                                    <div className="justify-start mt-5">
                                        {moviesSearch.length} Kết quả tìm kiếm cho  "{title}"
                                    </div>
                                    <div className="grid grid-cols-3 gap-x-20">
                                        {
                                            moviesSearch.map((movie) => (
                                                <MovieCard 
                                                    Film={movie}
                                                    classCard="w-65 h-100"
                                                    classTitle="text-black"
                                                    isLink={true}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                        }
                    </div>

            }
        </div>
    )
}
export default ResultSearch