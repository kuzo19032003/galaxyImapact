import { useEffect,useState } from "react"
import { Link,useLocation } from "react-router-dom"
import ProfileDetail from "./profileDetail/profileDetail"
import Transaction from "./transaction/transaction"
import { useAuth } from "../../context/authcontext/authcontext"
function Profile()
{
    const user = JSON.parse(localStorage.getItem("user"))   
    const location = useLocation()
    const activeTab = location.hash.replace("#","") || "profile"


    const {GetInforBookingOfUser} = useAuth()
    
    const [inforBooking,setInforBooking] = useState([])
    const [isLoading,setIsLoading] = useState([])


    useEffect(() => {
        const fetchInforBookingUser = async () => {
            if(user){
                setIsLoading(true)
                const result = await GetInforBookingOfUser(user.id)
                if(result.success){
                   setInforBooking(result.inforBookings)
                   setIsLoading(false)
                }
            }
        }
        fetchInforBookingUser()
    },[])

    return(
        <div className="mt-2  min-h-[110vh] bg-gray-200 overflow-hidden">
            <div className="flex ">
                <div className="bg-white shadow-xl md:w-[25vw] md:h-[70vh] m-[5vw]">
                    {user && 
                        <div className=" h-[30%]   ">
                            <span className="font-bold text-normal flex flex-col gap-10  justify-center items-center">
                                <span className="font-medium">Thông tin cá nhân </span>
                                {user.fullName}
                            </span>
                        </div>
                    }
                    <div className="mt-5">
                        <div className="border-t-2 border-gray-200 p-5">
                            Hotline hỗ trợ : 09899999123
                        </div>
                        <div className="border-t-2 border-gray-200 p-5">
                            Email : hungdogmail.com
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div className=" m-[2vw]">
                    <div className="flex flex-row gap-x-10 border-b-2 border-gray-300 p-3 transition ">
                        <Link 
                            to="#transaction"  
                            className="during-500 ease-in-out"
                        >
                             { activeTab=="transaction" 
                               ? <span className="text-blue-800 ">Lịch Sử Giao Dịch</span> 
                               : <span className="text-gray-500">Lịch Sử Giao Dịch</span> 
                             }
                        </Link>
                        <Link 
                            to="#profile"  
                            className="during-500 ease-in-out"
                        >
                            { activeTab=="profile" 
                               ? <span className="text-blue-800 ">Thông Tin Cá Nhân</span> 
                               : <span className="text-gray-500">Thông Tin Cá Nhân</span> 
                            }
                        </Link>
                    </div>
                    <div className="mt-5">
                        { activeTab === "profile" 
                          ? 
                            <ProfileDetail user={user}/>  
                          : 
                            activeTab === "transaction" && 
                            <Transaction inforBooking={inforBooking} isLoading={isLoading} />  
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile