import { useState } from "react"
import { useAuth } from "../../../../context/authcontext/authcontext"
 
function RegisterForm({login,setLogin,isLoading})
{
    const [fullName,setFullName] = useState("")
    const [username,setUsername] = useState("")
    const [isPassword,setIsPassword] = useState("")
    const [isRePassword,setIsRePassword] = useState("")
    const [gender,setGender] = useState("")
    const [dateOfBirth,setDateOfBirth] = useState("")
    const [email,setEmail] = useState("")

    const [error,setError] = useState("")
    
    const {registerAccout} = useAuth();

    const handleRegister = async (e) => {
        e.preventDefault()
        let password = null
        if(!fullName ||!isPassword || !isRePassword ||!username ||!gender || !dateOfBirth || !email){
            setError("Vui ")
            return;
        }
        if(isPassword !== isRePassword){
            setError("Vui ")
            return;
        }
        password = isPassword 
        const result = await registerAccout(username,password,fullName,gender,dateOfBirth,email)
        if(result){
            setLogin(true)
        }

        
    }    
    return(
        
        <div className={login ? "translate-x-[0%] transition-all duration-500 ease-in-out bg-blue-300 p-4 rounded-l-[30%] w-[40%] "  
            : "-translate-x-[-10%] transition-all duration-500 ease-in-out p-4 "}>
        { login && 
        <div className="flex flex-col items-center translate-y-30 gap-y-5">
            <h1 className="text-2xl text-white font-bold text-center">WELCOME TO GALAXY IMPACT</h1>
            <span className="texl-xs text-white">you can register account at here </span>
            <button 
                className="text-blue-500 p-2 rounded-md w-[80%] my-2" 
                onClick={() => setLogin(false)}
                disabled={isLoading}
            >
                Register
            </button>
        </div>
        }
        { !login &&
        <div className="flex flex-col ">
            <h1 className="text-2xl font-bold">Register</h1>
            <div className="flex flex-col gap-y-5  -translate-x-55 mt-2">
            <input type="text" 
                className="w-[170%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 " 
                placeholder="Full Name..."
                onChange={(e) => setFullName(e.target.value)}
            />
            <input type="text" 
                className="w-[170%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 " 
                placeholder="User name..."
                onChange={(e) => setUsername(e.target.value)}
            />
            <input type="text" 
                className="w-[170%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 " 
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="cursor-pointer flex gap-x-5">
                <div className="flex gap-x-1">
                    <input type="radio" 
                        name="Gender"
                        value="Male"
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <span>Male</span>
                </div>
                <div  className="flex gap-x-1">
                    <input type="radio" 
                        name="Gender"
                        value="Female"
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <span>Female</span>
                </div>
            </div>
            <input type="date" 
                className="w-[170%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Birthday..."
                onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <input type="password" 
                        className="w-[170%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Password...."
                        onChange={(e) => setIsPassword(e.target.value)}
            />
            <input type="password" 
                        className="w-[170%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Re-enter...."
                        onChange={(e) => setIsRePassword(e.target.value)}
            />
            </div>
            <div >
            <button 
                className="bg-sky-400 rounded-lg p-2 w-[50%] my-2 text-white mt-5 -translate-x-0"
                onClick={handleRegister}
            >
                Register
            </button>
            </div>
        </div>
        }   
        </div>  
    )
}
export default RegisterForm