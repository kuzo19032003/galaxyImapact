import FilmStart from "../pages/filmstart"
import Home from "../pages/home"
import Movie from "../pages/movie"
import Theater from "../pages/theater"
import TicketPrice from "../pages/ticketprice"
import EventFilm from "../pages/event"

import BookTicketFilm from "../pages/bookticketfilm/bookticketfilm"
import Booking from "../pages/ticketprice/booking/booking"
import Profile from "../pages/profile/profile"

import ProfileDetail from "../pages/profile/profileDetail/profileDetail"
import Transaction from "../pages/profile/transaction/transaction"
import { OnlyHeaderLayout } from "../layouts"


// Router admin
import Admin from "../pages/admin/admin"
import User from "../pages/admin/user/user"

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
        path:"/booking",
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
    { 
        path: "/booking/:movieName",
        element: <Booking/>,
    }
    ,
    { 
        path: "/profile",
        element: <Profile/>,
    },
    { 
        path: "/profile/#profile",
        element: <ProfileDetail/>,
    },    { 
        path: "/profile/#transaction",
        element: <Transaction/>,
    },
]

const privateRouter = [
    {path: "/admin" , element: <Admin/>},
    {path: "/adminUser" , element: <User/>},
    {path: "/adminFilm" , element: <Admin/>},
    {path: "/adminDashboard" , element: <Admin/>},


]


export { publicRouter,privateRouter}