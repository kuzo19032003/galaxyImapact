import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { posterNGT,posterNuHon,posterDarkNuns,posterCaptain,posterDetailNGT } from "../../assets/images/images";
import { useFilm } from "../../context/filmcontext/filmcontext";

import MovieImage from "../../components/film/movieimage/movieImage";
import MovieDetail from "../../components/film/moviedetail/moviedetail";
import MovieNowPlaying from "../../components/film/movienowplaying/movienowplaying";

function BookTicketFilm()
{
    const { id } = useParams()
    
    const [isMovie,setIsMovie] = useState(null)
    const [moviePlayingOther,setMoviePlayingOther] = useState(null)
    const [isLoading,setIsLoading] = useState(false)

    const {GetMovieById} = useFilm()

   
    
    useEffect (() => { 
                
        const getMovieDetail = async () =>{
            try {
                setIsLoading(true)
                const result = await GetMovieById(id);
                if (result?.Movie) {
                    setIsMovie(result.Movie);
                } else {
                    console.error("Movie not found!");
                }
            } catch (error) {
                console.error("Error fetching movie:", error);
            }finally {
                setIsLoading(false);
            }     
        }
        getMovieDetail()
        
    },[id])
  


    return (
      isMovie ? 
        <div>
            <MovieImage img={isMovie.images} />
            <div className="grid grid-cols-7 max-w-[75vw] mx-auto  mt-10">
                <MovieDetail movie={isMovie} />
                <MovieNowPlaying />
            </div>
            
        </div>
        : 
        <div className="flex justify-center items-center mt-[15vh]">
            <div className="animate-spin rounded-full h-15 w-15 border-b-3 border-black"></div>
        </div>
    )
}
export default BookTicketFilm