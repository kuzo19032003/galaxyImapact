import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/logo.png";
import Button from "../button";
import Input from "../input";
import ListItem from "../listItem";


function Navbar() {
 
  const items = [
    {to:"/", name: "Trang chủ"},
    {to: "/ticketprice", name: "Mua vé"},
    {to: "/movie", name: "Phim"},
    {to: "/theater", name: "Rạp / Giá vé"},
    {to: "/event", name: "Sự kiện"},
    {to: "/filmstart", name: "Góc điện ảnh"}
  ];


  return (
    <nav className="flex justify-between items-center w-[92%] mx-auto ">
      <div >
        <img src={logo} alt="Logo" className="w-30"/>
      </div>
      <div className="flex md:flex-row flex-col md:flex-col md:static absolute md:min-h-fit min-h-[15vh] top-[19%] left-0 md:w-auto w-full md:bg-white bg-gray-300">
        <ListItem search={true} items={items} className="flex md:flex-row flex-col items-center gap-[3vh] md:gap-[2vw] p-2"/>
      </div>
      <div className="flex gap-2">
        <Button className="bg-red-300 rounded-full p-2" > Đăng ký </Button>
        <Button className="bg-yellow-300 p-2 "  > Đăng nhập </Button>
      </div>
  </nav>
  );
}   

export default Navbar;