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
        const response = await axiosInstance.post(`/api/bookings/hold-and-book/14`,{showtimeId,seatIds})
        if(response.data){
            return {success:true,paymentUrl : response.data}
        }
    }catch(error){
        return {success:false,Message:error}
    }
}
export {getSeatOfHall,holdAndBook}

