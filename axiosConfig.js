import axios from "axios"
const axiosInstance = axios.create({
    baseURL: "https://moviespring.onrender.com",
    headers:{
        "Content-Type":"application/json"
    }
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")

    if(token){
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
},(error) => {
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use(
    (response) => response,
    
    (error) => {
        if(error.response && error.response.status === 401){
            console.log("hết thời gian làm việc !");
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            window.location.href = "/"
        }
        return Promise.reject(error)
    }
)
export {axiosInstance}