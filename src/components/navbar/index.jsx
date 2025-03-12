import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/logo.png";
import Button from "../button";
import Input from "../input";
import ListItem from "../listItem";
import { useAuth } from "../../context/authcontext/authcontext";
import {LoginForm} from "../form/loginform/loginform";
function Navbar() {

  
  const {user,isAuthenticated,login,openLoginForm,logout} = useAuth();
  const [isOpenForm , setIsOpenForm] = useState(false);
  const items = [ 
    {to:"/", name: "Trang chủ"},
    {to: "/booking", name: "Mua vé"},
    {to: "/movie", name: "Phim"},
    {to: "/theater", name: "Rạp / Giá vé"},
    {to: "/event", name: "Sự kiện"},
    {to: "/filmstart", name: "Góc điện ảnh"}
  ];

console.log(user);


  
  return (
    <nav className="flex justify-between items-center w-[92%] mx-auto ">
      <div >
        <img src={logo} alt="Logo" className="w-30"/>
      </div>
      <div className="flex md:flex-row flex-col md:flex-col md:static absolute md:min-h-fit min-h-[15vh] top-[19%] left-0 md:w-auto w-full md:bg-white bg-gray-300">
        <ListItem search={true} items={items} className="flex md:flex-row flex-col items-center gap-[3vh] md:gap-[2vw] p-2"/>
      </div>
      <div className="flex gap-2">
        {
          isAuthenticated ? (
            <div className="flex gap-2">
                { user &&
                 <div>
                    <Link to="/profile" className="text-black">
                        WELCOME, {user}
                    </Link>
                    <Button onclick={logout} className="bg-red-500">
                        Log out
                    </Button>
                 </div>
                }

            </div>
          ) : (
            <Button 
                onclick={() => setIsOpenForm(!isOpenForm)} 
                className="text-gray-500 p-2 hover:text-blue-500"
            >
                Đăng nhập
            </Button>
          )
        }
          <LoginForm 
              isOpen={isOpenForm} 
              isClose={() => setIsOpenForm(false)} 
          />
        
      </div>
  </nav>
  );
}   

export default Navbar;