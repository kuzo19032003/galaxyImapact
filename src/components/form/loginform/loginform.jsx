    import { useState,useEffect } from "react";   
    import { useAuth } from "../../../context/authcontext/authcontext";
    import RegisterForm from "./registerform/registerform";
    import ForgotPasswordForm from "./forgotpasword/forgotpasswordform";
    
    function LoginForm({isOpen,isClose})
    {   
        const { loginAccount } = useAuth();


        const [login, setLogin] = useState(true);
        const [forgotPassword, setForgotPassword] = useState(false);

        const [username,setUsername] = useState(""); 
        const [password,setPassword] = useState("");  

        const [isLoading,setIsLoading] = useState(false)
        const handleSubmitLogin = async (e) => {
            e.preventDefault();
            setIsLoading(true)
            const result = await loginAccount(username,password)
            setIsLoading(false)
            if(result){
                isClose(); 
            }
            
        }

        useEffect(() =>{
            if(isOpen === true){
                document.body.style.overflow = "hidden";
            }else{
                document.body.style.overflow = "unset";
            }
        },[isOpen])
      
        return (
            <div >
                {isOpen && (
                        <div >
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center  z-10 ">   
                              <div className="absolute inset-0 bg-black/50 z-1" onClick={isClose} ></div>     
                              { !forgotPassword && 
                                <div className="bg-white p-2 rounded-2xl w-[60vw] min-h-[65vh] flex flex-rows justify-between z-11 "> 
                                    <div className = 
                                        { login 
                                          ? "translate-x-[10%] transition-all duration-500 ease-in-out " 
                                          : "translate-x-[0%] transition-all duration-500 ease-in-out bg-blue-300 p-4 rounded-r-[30%] w-[40%] "
                                        }>
                                        { login &&
                                          <div className="flex flex-col ">
                                             <h1 className="text-2xl font-bold mt-4">Login</h1>
                                             <div className="flex flex-col gap-y-15 mt-15 translate-x-20">
                                                <input 
                                                    type="text" 
                                                    className="w-[150%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 " 
                                                    placeholder="Email..."
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                                <input 
                                                    type="password" 
                                                        className="w-[150%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                                        placeholder="Password..."
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                                <div className="translate-x-69 mt-5 "> 
                                                    <p 
                                                       className =
                                                        "hover:text-orange-500 hover:underline hover:cursor-pointer text-sm text-gray-500"
                                                       onClick={() => setForgotPassword(true)}
                                                    >
                                                       Quên mật khẩu?
                                                    </p>
                                                </div>
                                                <button 
                                                    className = "bg-sky-400 rounded-lg p-2 w-[50%] my-2 text-white mt-5 translate-x-70"                                              
                                                    onClick={handleSubmitLogin}
                                                    disabled={isLoading}
                                                >
                                                    {
                                                        isLoading 
                                                        ? ( 
                                                            <div className="flex items-center justify-center">
                                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white">
                                                                </div>
                                                            </div>
                                                         ) 
                                                        : ("Login")
                                                    }
                                                </button>
 
                                          </div>
                                        }
                                        {/* WELCOME */}
                                        { 
                                          !login &&
                                          <div className="flex flex-col items-center translate-y-40 gap-y-5">
                                                    <h1 className="text-2xl text-white font-bold text-center">WELCOME BACK GALAXY IMPACT</h1>
                                                    <span className="texl-xs text-white">you can login account at here </span>
                                                    <button className="text-blue-500 p-2 rounded-md w-[80%] my-2" onClick={() => setLogin(true)}>
                                                        Login
                                                    </button>
                                          </div>
                                        }
                                    </div>
                                    <RegisterForm setLogin={setLogin} login={login} isLoading={isLoading}/>
                                </div>
                              }      
                                <ForgotPasswordForm 
                                    forgotPassword={forgotPassword} 
                                    setForgotPassword={setForgotPassword}
                                />
                            </div>
                        </div>
                )
                }
            </div>
        )
    }
    export {LoginForm};