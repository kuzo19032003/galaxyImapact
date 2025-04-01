import { axiosInstance } from "../../../axiosConfig"; 


const getSeatOfHall = async (idHall) => {
    try{

        const response = await axiosInstance.get(`/api/seats/hall/${idHall}`)
        
        if(response.data){
            return {success:true,seats:response.data}
        }else{
            return {success:false,Message:"loi !!"}
        }
    }catch(error){
        return {success:false,Message:error}
    }
}
const holdAndBook = async (userId,showtimeId,seatIds) => {
    try{
        console.log(showtimeId);
        
        const response = await axiosInstance.post(`/api/bookings/hold-and-book/14`,{showtimeId,seatIds})
        if(response.data){
            return {success:true,paymentUrl : response.data}
        }
    }catch(error){
        return {success:false,Message:error}
    }
}
const getTransactionInfor = async (txtRef) => {
    try{
        
        const response = await axiosInstance.get(`/api/payments/transactionInfo/${txtRef}`)

        if(response.data){
            return {success:true,paymentUrl : response.data}
        }
    }catch(error){
        return{success:false,Message:error}
    }
}
const getBookedseats = async (showTimeId) => {
    try{  
        const response = await axiosInstance.get(`/api/seats/${showTimeId}/booked-seats`)
        if(response.data){
            return {success:true,paymentUrl : response.data}
        }
    }catch(error){
        return{success:false,Message:error}
    }
}
const getTheaterOfFilm = async (movieId) => {
    try{
        const response = await axiosInstance.get(`/api/movies/${movieId}/theaters`)
        if(response.data){
            return {success:true,Theaters:response.data}
        }
    }catch(error){
        return{success:false,Message:error}
    }
}
const getShowTimeOfTheater = async (movieId,theaterId) => {
    try{
        const response = await axiosInstance.get(`/api/movies/${movieId}/cinemas/${theaterId}/showtimes`)
        if(response.data){
            return {success:true,ShowTimes:response.data}
        }
    }catch(error){
        return{success:false,Message:error}
    }
}
const getMovie = async () => {
    try{
        const response = await axiosInstance.get(`/api/movies`)
        if(response.data){
            return {success:true,Movies:response.data}
        }
    }catch(error){
        return{success:false,Message:error}
    }
}
const getMovieById = async (movieId) => {
    try{
        const response = await axiosInstance.get(`/api/movies/${movieId}`)
        if(response.data){
            return {success:true,Movie:response.data}
        }
    }catch(error){
        return{success:false,Message:error}
    }
}
export {getSeatOfHall,holdAndBook,getTransactionInfor,getBookedseats,getTheaterOfFilm,getShowTimeOfTheater,getMovie,getMovieById}

