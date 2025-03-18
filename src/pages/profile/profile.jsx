import { useState } from "react"
import { Link } from "react-router-dom"
import ProfileDetail from "./profileDetail/profileDetail"
import Transaction from "./transaction/transaction"

function Profile()
{
    const user = JSON.parse(localStorage.getItem("user"))   
    
    const [activeTab, setActiveTab] = useState("profile")
    
    return(
        <div className="mt-2  min-h-[100vh] bg-gray-200">
            <div className="flex ">
                <div className="bg-white shadow-xl w-[25vw] h-[70vh] m-[5vw]">
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

                        <Link to="#transaction" onClick={() => setActiveTab("transaction")} className="during-500 ease-in-out">
                             { activeTab=="transaction" 
                               ? <span className="text-blue-800 ">Lịch Sử Giao Dịch</span> 
                               : <span className="text-gray-500">Lịch Sử Giao Dịch</span> 
                             }
                        </Link>

                        <Link to="#profile"  onClick={() => setActiveTab("profile")} className="during-500 ease-in-out">
                            { activeTab=="profile" 
                               ? <span className="text-blue-800 ">Thông Tin Cá Nhân</span> 
                               : <span className="text-gray-500">Thông Tin Cá Nhân</span> 
                            }
                        </Link>
                        
                        
                    </div>
                    <div className="mt-5">
                        { activeTab === "profile" 
                          ? <ProfileDetail user={user}/>  
                          : activeTab === "transaction" &&  <Transaction/>  
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile