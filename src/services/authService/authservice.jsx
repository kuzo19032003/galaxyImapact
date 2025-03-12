import { axiosInstance } from "../../../axiosConfig"; 

const loginAcc = async (username,password) => {
    try{
        const response = await axiosInstance.post("/api/auth/login",{username,password}) 
        
        
        const {accessToken} = response.data
        localStorage.setItem("token",accessToken)
        localStorage.setItem("user",user)


        
        return {success:true,user}
    }catch(error){
      
        return { success: false, message: error.response?.data?.message || "Đăng nhập thất bại" };
    }
}
const register = async (username,password,fullName,gender,dateOfBirth,email) => {
    try{
        const response = await axiosInstance.post("/api/auth/register",{username,password,fullName,gender,dateOfBirth,email})
        return {success:true}
    }catch(error){
        return { success: false, message: error.response?.data?.message || "Đăng ký thất bại" };
    }
}
const getInforOfUser = async () =>{
    
}
export {loginAcc,register} 