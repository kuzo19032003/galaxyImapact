import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "../../assets/logo.png";
import Button from "../button";
import Input from "../input";
import ListItem from "../listItem";
import { useAuth } from "../../context/authcontext/authcontext";
import {LoginForm} from "../form/loginform/loginform";

import {resume} from "../../assets/images/images"
import {userFace} from "../../assets/images/images"
import {logoutIMG} from "../../assets/images/images"
import {scroll} from "../../assets/images/images"




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



  
  return (
    <nav className="flex justify-between items-center w-[85%] mx-auto ">
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
                 <div className="flex gap-x-4">
                    
                    <div className="relative text-black font-bold group">
                      <Link to="/profile" className="hover:text-orange-500 flex gap-5">
                         <img src={userFace} alt="" /> hi, {user.fullName}
                      </Link>
                      <div className="absolute w-[10vw] h-50 hidden bg- group-hover:block"></div>
                      <div className="absolute left-1 hidden group-hover:block bg-white w-[14vw] shadow-xl h-auto z-19 mt-3 ">
                          <div 
                              className = 
                              "hover:bg-orange-100 hover:text-orange-400 hover:border-l-4  transition-all duration-300 ease-in-out border-orange-400 "
                          >
                              <Button  className="text-sm font-normal m-3 ">
                                  <Link to="/profile/#profile" className="flex gap-x-3 ">
                                       <img src={resume} alt=""/>Tài khoản
                                  </Link>
                              </Button>
                          </div>
                          <div className=" hover:bg-orange-100 hover:text-orange-400 hover:border-l-4 trasition-all duration-300 ease-in-out border-orange-400">
                            <Button  className="text-sm font-normal m-3 ">
                                <Link to="/profile/#transaction" className="flex gap-x-3 ">
                                   <img src={scroll} alt="" />Lịch sử giao dịch
                                </Link> 
                            </Button>
                          </div>
                          <div className=" hover:bg-orange-100 hover:text-orange-400 hover:border-l-4 trasition-all duration-300 ease-in-out border-orange-400">
                            <Button onclick={logout} className="text-sm font-normal m-3 ">
                               <div className="flex gap-x-3">
                                  <img src={logoutIMG} alt="" />Đăng xuất 
                               </div>
                            </Button>
                          </div>
                      </div> 
                    </div>
                    
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