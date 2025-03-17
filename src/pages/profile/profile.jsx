function Profile()
{
    const user = JSON.parse(localStorage.getItem("user"))
 
    
    return(
        <div className="mt-2  min-h-[100vh] bg-gray-200">
            <div className="flex gap-x-[20vw]">
                <div className="bg-white shadow-xl w-[25vw] h-[70vh] m-[5vw]">
                    {user && 
                        <div className="border-b-2 border-gray-200 h-[30%] text-right ">
                            <span className="font-bold text-normal ">
                                {user.fullName}
                            </span>
                        </div>
                    }
                    <div></div>
                </div>
                <div>
                    h2
                </div>
            </div>
        </div>
    )
}
export default Profile