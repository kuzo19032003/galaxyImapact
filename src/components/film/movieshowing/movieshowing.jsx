import MovieCard from "../moviecard/moviecard";
import { posterNGT,posterNuHon,posterDarkNuns,posterCaptain } from "../../../assets/images/images";
import { useEffect ,useState} from "react";
import { useFilm } from "../../../context/filmcontext/filmcontext";
function MovieShowing() {

    const [movies,SetMovies] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const {GetMovies} = useFilm()

    useEffect(() => {
        const getMoviesShowing = async() =>{
            setIsLoading(true)
            const result = await GetMovies()
            SetMovies(result.Movies)
            setIsLoading(false)
        }
        getMoviesShowing()
    },[])

    return (
        isLoading 
        ? 
            <div className="flex justify-center items-center mt-[15vh]">
                <div className="animate-spin rounded-full h-15 w-15 border-b-5 border-white"></div>
            </div>
        :
            <div className= "grid grid-cols-4 gap-4">
                {   
                    <div className="grid grid-cols-3 gap-x-100  ">
                            {
                                movies.map((movie,index) => {
                                return <MovieCard 
                                            key={index} 
                                            Film={movie}
                                        />
                                })    
                            }   
                    </div>
                }
            </div>
    )
}
export default MovieShowing