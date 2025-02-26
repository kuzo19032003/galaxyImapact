import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
function BookTicketFilm()
{
    const { id } = useParams()


    
    
    const [movie,setMovie] = useState(null)
    
    useEffect (() => {
        
        const moviePoster = [
            { id: 1, src: "abc", trailer: "ac", nameFilm: "Nhà gia tiên", vote: "9.7", ages: "T13" },
            { id: 2, src: "abc", trailer: "ac", nameFilm: "Nụ hôn bạc tỉ", vote: "9.1", ages: "T18" },
            { id: 3, src: "abc", trailer: "ac", nameFilm: "Dark Nuns", vote: "9.9", ages: "T18" },
            { id: 4, src: "abc", trailer: "ac", nameFilm: "Captain America", vote: "9.6", ages: "T13" },
        ];

        const movie = moviePoster.find(m => m.id == id)

        setMovie(movie)
    },[id])

    
    if(!movie) return <h1>Loading....</h1>

    return (
        <div>
            <h1>{movie.nameFilm}</h1>
        </div>
    )
}
export default BookTicketFilm