import FilmStart from "../pages/filmstart"
import Home from "../pages/home"
import Movie from "../pages/movie"
import Theater from "../pages/theater"
import TicketPrice from "../pages/ticketprice"
import EventFilm from "../pages/event"

import BookTicketFilm from "../pages/bookticketfilm/bookticketfilm"

import { OnlyHeaderLayout } from "../layouts"


// const publicRouter1 = [
//    {
//         path: "/",

//    }

// ]
const publicRouter = [
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/movie",
        element:<Movie />,
        layout:  OnlyHeaderLayout
    },
    {
        path:"/ticketprice",
        element:<TicketPrice />
    },
    {
        path:"/filmstart",
        element:<FilmStart />
    },    {
        path:"/theater",
        element:<Theater />
    },
    {
        path:"/event",
        element:<EventFilm />
    },
    { 
        path: "/dat-ve/:id",
        element: <BookTicketFilm/>,
    },
]

const privateRouter = []
const filmRouter = [
]

export { publicRouter,privateRouter,filmRouter }