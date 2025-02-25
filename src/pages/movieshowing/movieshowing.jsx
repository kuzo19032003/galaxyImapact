import MovieCard from "../../components/moviecard/moviecard"
function MovieShowing({className}) {
    console.log(className);
    
    return (
        <div className= {className}>
            <div className="grid grid-cols-3 gap-x-100 gap-y-30">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>

            </div>
        </div>
    )
}
export default MovieShowing