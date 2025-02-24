import FilmStart from "../pages/filmstart"
import Home from "../pages/home"
import Movie from "../pages/movie"
import Theater from "../pages/theater"
import TicketPrice from "../pages/ticketprice"
import EventFilm from "../pages/event"
import MovieFuture from "../pages/moviefuture/moviefuture"
import MovieShowing from "../pages/movieshowing/movieshowing"
import { OnlyHeaderLayout } from "../layouts"



const publicRouter = [
    {
        path:"/",
        elememt:<Home />
    },
    {
        path:"/movie",
        elememt:<Movie />,
        layout:  OnlyHeaderLayout
    },
    {
        path:"/ticketprice",
        elememt:<TicketPrice />
    },
    {
        path:"/filmstart",
        elememt:<FilmStart />
    },    {
        path:"/theater",
        elememt:<Theater />
    },
    {
        path:"/event",
        elememt:<EventFilm />
    }
]
const privateRouter = []
const filmRouter = [
    { 
        path: "/filmFuture",
        elememt: <MovieFuture/>
    },
    { 
        path: "/filmShowing",
        elememt: <MovieShowing/>
    },
]

export { publicRouter,privateRouter,filmRouter }