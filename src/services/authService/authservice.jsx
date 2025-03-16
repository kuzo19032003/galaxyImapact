import { axiosInstance } from "../../../axiosConfig"; 

const loginAcc = async (username,password) => {
    try{
        const response = await axiosInstance.post("/api/auth/login",{username,password}) 
        
        if(response.data){
            const {accessToken} = response.data
            
            localStorage.setItem("token",accessToken)
            const user = await getInforOfUser(username)
            
            if(user.success){
                console.log(user.user);          
                localStorage.setItem("user",JSON.stringify(user.user))   
                return {success:true,users: user.user}
                
            }else{
                
                return {success:false,message:"Lấy thông tin thất bại rồi !"}
            
            } 
        }       
    }catch(error){
      
        return { success: false, message: error.response?.data?.message || "Đăng nhập thất bại" };
    }
}
const register = async (username,password,fullName,gender,dateOfBirth,email) => {
    try{
        const response = await axiosInstance.post("/api/auth/register",{username,password,fullName,gender,dateOfBirth,email})
        return {success:true}
    }catch(error){
        return { success: false, message: "Đăng ký thất bại" };
    }
}
const getInforOfUser = async (username) =>{
    try{
        const response = await axiosInstance.get(`/api/users/${username}`)
        
        return {success:true, user: response.data}
    }catch(error){
        return {success: false,message: "Lấy thông tin thất bại"}
    }
}
export {loginAcc,register} 