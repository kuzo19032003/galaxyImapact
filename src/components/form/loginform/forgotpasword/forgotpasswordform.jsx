function ForgotPasswordForm({forgotPassword,setForgotPassword})
{
    return(
        <div className="z-12">
             {forgotPassword &&
                <div className= {`bg-white p-2 rounded-2xl w-[60vw] h-[65vh] flex flex-col  transition-all duration-500 ease-in-out ${forgotPassword ? "tranplate-y-1000" : "tranplate-y-20"}  `}>
                    <div className="bg-blue-300 p-4 rounded-b-[30%]  w-[100%] min-h-[30%]  text-center text-white  flex flex-col gap-y-5">
                        <h1 className=" text-2xl font-bold">
                            Forgot Password
                        </h1>
                        <span>You need to enter your Email here !</span>
                    </div>
                    <div className="flex flex-col  gap-y-10 mt-15 ">
                        <div className="translate-x-[30%]">
                            <input 
                                  type="text" 
                                  className="w-[40%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  
                                  placeholder="Your Email ..." 
                            />
                        </div>
                        <div className="translate-x-[270%] bg-sky-500 w-[15%] p-2 rounded-lg text-white text-center">
                            <button onClick={() => setForgotPassword(false)}>
                                Reset Password
                            </button>
                        </div>
                    </div>
                </div>
             }
        </div>
    )
}
export default ForgotPasswordForm