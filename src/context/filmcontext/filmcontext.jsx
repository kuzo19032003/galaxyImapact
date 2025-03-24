import { Children, createContext, useContext, useReducer } from "react"
import {getSeatOfHall} from "../../services/filmService/filmService"
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
    return (
        <FilmContext.Provider value={{...state,GetSeatOfHall}}>
            {children}
        </FilmContext.Provider> 
    )
}

export {FilmProvider,useFilm}
