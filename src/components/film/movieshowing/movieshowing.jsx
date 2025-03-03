import MovieCard from "../moviecard/moviecard";
import { posterNGT,posterNuHon,posterDarkNuns,posterCaptain } from "../../../assets/images/images";
function MovieShowing({className}) {
    const moviePoster =[
        {id:1,img:posterNGT,src:"abc",trailer:"ac",nameFilm:"Nhà gia tiên",vote:"9.7",ages:"T13"},
        {id:2,img:posterNuHon,src:"abc",trailer:"ac",nameFilm:"Nụ hôn bạc tỉ",vote:"9.1",ages:"T18"},
        {id:3,img:posterDarkNuns,src:"abc",trailer:"ac",nameFilm:"Dark Nuns",vote:"9.9",ages:"T18"},
        {id:4,img:posterCaptain,src:"abc",trailer:"ac",nameFilm:"Captain America",vote:"9.6",ages:"T13"},
    ]
    
    return (
        <div className= {className}>
            <div className="grid grid-cols-3 gap-x-100 gap-y-7">
                {
                    moviePoster.map((movie,index) => (
                        <MovieCard id={movie.id} key={index} img={movie.img} nameFilm={movie.nameFilm} vote={movie.vote} ages={movie.ages}/>
                    ))    
                }   

            </div>
        </div>
    )
}
export default MovieShowing