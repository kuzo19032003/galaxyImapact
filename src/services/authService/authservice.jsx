import { axiosInstance } from "../../../axiosConfig"; 

const loginAcc = async (username,password) => {
    try{
        const response = await axiosInstance.post("/api/auth/login",{username:username,password:password}) 
        
        console.log(response);
        
        const {accessToken} = response.data
        localStorage.setItem("token",accessToken)

        
        return {success:true}
    }catch(error){
        console.error("Loi");
        return { success: false, message: error.response?.data?.message || "Đăng nhập thất bại" };
    }
}

export {loginAcc} 