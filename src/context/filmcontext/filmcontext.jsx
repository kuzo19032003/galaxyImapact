import { Children, createContext, useContext, useReducer } from "react"
import {getSeatOfHall,holdAndBook,getTransactionInfor,getBookedseats,getTheaterOfFilm,getShowTimeOfTheater} from "../../services/filmService/filmService"
import { data } from "react-router-dom"

const FilmContext = createContext()
const useFilm = () =>  useContext(FilmContext)

//trạng thái ban đầu
const initialState = {
    isGetSuccess:false,
    data:[]
}
//Quản lí hành động
const FilmReducer = (state,action) => {
    switch(action.type){
        case 'GetSeatOfHall':
            return {isGetSuccess:true, data: action.payload}
        case 'HoldAndBook':
            return {isGetSuccess:true, data: action.payload}
        case 'GetTransactionInfor':
            return {isGetSuccess:true, data: action.payload}
        case 'GetTheaterOfFilm':
            return {isGetSuccess:true, data: action.payload}
        default: 
            return state
    }
}
const FilmProvider = ({children}) => {
    const [state,dispatch] = useReducer(FilmReducer,initialState)

    const GetSeatOfHall = async (idHall) => {
        const result = await getSeatOfHall(idHall)     
        
        if(result.success){
            dispatch({type:"GetSeatOfHall",payload: result.seats})
        }
        return result
    }
    const HoldAndBook = async (userId,showTimeId,seatIds) => {
        const result = await holdAndBook(14,showTimeId,seatIds)
       
        if(result.success){
            dispatch({type:"HoldAndBook",payload: result.paymentUrl})
        }
        return result
    }
    const GetTransactionInfor = async (txtRef) => {
        const result = await getTransactionInfor(txtRef)
       
        if(result.success){
            dispatch({type:"GetTransactionInfor",payload: result.paymentUrl})
        }
        return result
    }
    const GetBookedseats = async (showTimeId) => {
        const result = await getBookedseats(showTimeId)
       
        if(result.success){
            dispatch({type:"GetBookedseats",payload: result.paymentUrl})
            return result
        }
    }
    const GetTheaterOfFilm = async (movieId) => {
        const result = await getTheaterOfFilm(movieId)
        if(result.success){
            dispatch({type:"GetTheaterOfFilm",payload: result.Theaters})
            return result
        }
    }
    const GetShowTimeOfTheater = async (movieId,theaterId) => {
        const result = await getShowTimeOfTheater(movieId,theaterId)
        if(result.success){
            dispatch({type:"GetShowTimeOfTheater",payload: result.ShowTimes})
            return result
        }
    }
    return (
        <FilmContext.Provider value={{...state,GetSeatOfHall,HoldAndBook,GetTransactionInfor,GetBookedseats,GetTheaterOfFilm,GetShowTimeOfTheater}}>
            {children}
        </FilmContext.Provider> 
    )
}

export {FilmProvider,useFilm}
