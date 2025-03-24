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
export {getSeatOfHall}

