import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "../../assets/logo.png";
import Button from "../button";
import Input from "../input";
import ListItem from "../listItem";
import { useAuth } from "../../context/authcontext/authcontext";
import {LoginForm} from "../form/loginform/loginform";
import { HiMenu, HiX } from "react-icons/hi"; // icon mở & đóng menu
import {resume} from "../../assets/images/images"
import {userFace} from "../../assets/images/images"
import {logoutIMG} from "../../assets/images/images"
import {scroll} from "../../assets/images/images"


import { menu } from "../../assets/images/images";

function Navbar() {

  
  const {user,isAuthenticated,login,openLoginForm,logout} = useAuth();
  
  const [isOpenForm , setIsOpenForm] = useState(false);
  const [isOpenNav,setIsOpenNav] = useState(true);
  const items = [ 
    {to:"/", name: "Trang chủ"},
    {to: "/booking", name: "Mua vé"},
    {to: "/movie", name: "Phim"},
    {to: "/theater", name: "Rạp / Giá vé"},
    {to: "/event", name: "Sự kiện"},
    {to: "/filmstart", name: "Góc điện ảnh"}
  ];


  
  return (
    <nav className="flex justify-between items-center w-[100%] md:w-[85%] h-[10vh] md:h-auto mx-auto   ">
      <div className="hidden md:block" >
        <img src={logo} alt="Logo" className="w-30"/>
      </div>
      <div className="block md:hidden p-5 text-3xl" onClick={() => setIsOpenNav(!isOpenNav)}>
            <HiMenu/>
      </div>
      <div >
          {isOpenNav && 
              <div
                className="fixed inset-0 bg-black/50 z-20 md:hidden"
                onClick={() => setIsOpenNav(false)}
              />
          } 
            <div className=
               {`md:flex-row md:flex-col md:static md:min-h-fit md:w-auto md:bg-white md:opacity-100 md:h-auto md:translate-x-0 
                  fixed top-0 left-0 w-[75%] bg-gray-300 z-21 transition-all duration-500 ease-in-out overflow-hidden h-[100vh]
                  ${isOpenNav ? "translate-x-0 opacity-100 overflow-hidden" : "-translate-x-full opacity-0"}
                `}>
                <div className="md:hidden text-3xl mb-6 p-5" onClick={() => setIsOpenNav(false)}>
                  <HiX />
                </div>
                <ListItem 
                    search={true} 
                    items={items} 
                    className="flex md:flex-row flex-col items-center gap-[3vh] md:gap-[2vw] p-2 "
                />
            </div>
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
                      <div className="absolute md:left-1 right-0 hidden group-hover:block bg-white md:w-[14vw] w-[25vw] shadow-xl h-auto z-19 mt-3 ">
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