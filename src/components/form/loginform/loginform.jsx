    import { useState,useEffect } from "react";   
    function LoginForm()
    {
        const [login, setLogin] = useState(true);



        return (
            <div >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center  z-10  ">
                
                    <div className="bg-white p-2 rounded-2xl w-[60vw] h-[65vh] flex flex-rows justify-between "> 
                        <div className={ login ? "translate-x-[10%] transition-all duration-300 ease-in-out " 
                                               : "translate-x-[0%] transition-all duration-300 ease-in-out  bg-blue-300 p-4 rounded-r-[30%] w-[40%] "}>
                            { login &&
                                <div className="flex flex-col ">
                                    <h1 className="text-2xl font-bold mt-4">Login</h1>
                                    <div className="flex flex-col gap-y-15 mt-15 translate-x-20">
                                        <input type="text" 
                                               className="w-[150%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 " 
                                               placeholder="Email..."
                                        />
                                        <input type="password" 
                                               className="w-[150%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                               placeholder="Password..."
                                        />
                                    </div>
                                    <div className="translate-x-69 mt-5 "> 
                                        <p className="hover:text-orange-500 hover:underline hover:cursor-pointer text-sm text-gray-500">
                                            Quên mật khẩu?
                                        </p>
                                    </div>
                                    <div >
                                        <button className="bg-sky-400 rounded-lg p-2 w-[50%] my-2 text-white mt-5 translate-x-70">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            }

                            { !login &&
                                <div className="flex flex-col items-center translate-y-30 gap-y-5">
                                    <h1 className="text-2xl text-white font-bold text-center">WELCOM TO GALAXY IMPACT</h1>
                                    <span className="texl-xs text-white">you can login account at here </span>
                                    <button className="text-blue-500 p-2 rounded-md w-[80%] my-2" onClick={() => setLogin(true)}>
                                        Login
                                    </button>
                                </div>
                            }
                        </div>

                        <div className={login ? "translate-x-[0%] transition-all duration-300 ease-in-out bg-blue-300 p-4 rounded-l-[30%] w-[40%] "  
                                              : "-translate-x-[-10%] transition-all duration-300 ease-in-out p-4 "}>
                            { login && 
                                <div className="flex flex-col items-center translate-y-30 gap-y-5">
                                    <h1 className="text-2xl text-white font-bold text-center">WELCOM TO GALAXY IMPACT</h1>
                                    <span className="texl-xs text-white">you can register account at here </span>
                                    <button className="text-blue-500 p-2 rounded-md w-[80%] my-2" onClick={() => setLogin(false)}>
                                        Register
                                    </button>
                                </div>
                            }

                            { !login &&
                                <div className="flex flex-col ">
                                    <h1 className="text-2xl font-bold">Register</h1>
                                    <div className="flex flex-col gap-y-5  -translate-x-55 mt-4">
                                        <input type="text" 
                                            className="w-[170%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 " 
                                            placeholder="Full Name..."
                                        />
                                        <input type="text" 
                                            className="w-[170%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 " 
                                            placeholder="Email..."
                                        />
                                        <div className="cursor-pointer flex gap-x-5">
                                            <div className="flex gap-x-1">
                                                <input type="radio" 
                                                       name="Gender"
                                                       value="Man"
                                                />
                                                <span>Man</span>
                                            </div>
                                            <div  className="flex gap-x-1">
                                                <input type="radio" 
                                                       name="Gender"
                                                       value="Female"
                                                />
                                                <span>Female</span>
                                            </div>
                                        </div>
                                        <input type="date" 
                                            className="w-[170%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                            placeholder="Birthday..."
                                        />
                                       <input type="password" 
                                            className="w-[170%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                            placeholder="Password...."
                                        />
                                        <input type="password" 
                                            className="w-[170%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                            placeholder="Re-enter...."
                                        />
                                    </div>

                                    <div >
                                        <button className="bg-sky-400 rounded-lg p-2 w-[50%] my-2 text-white mt-5 -translate-x-0">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            }   
                        </div>   
                    </div>
                </div>
            </div>
        );
    }
    export {LoginForm};