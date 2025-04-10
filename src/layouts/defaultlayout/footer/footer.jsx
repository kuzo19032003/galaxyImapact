import logo from "../../../assets/logo.png"
import { FaFacebook, FaYoutube, FaInstagram,FaTelegramPlane, FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer()
{
    return (
        <div className="flex flex-col justify-center items-center min-h-[40vh] bg-sky-800 p-15 gap-y-10 whitespace-nowrap ">
            <div className="flex md:justify-between text-white  text-lg cursor-pointer">
                <div className="grid grid-cols-3 md:gap-x-30 gap-x-20">
                    <div>
                        <h1 className="font-bold">Giới thiệu </h1>
                        <ul className="mt-8  flex flex-col text-gray-400  gap-y-5 ">
                            <li className="hover:text-gray-200">Về chúng tôi</li>
                            <li className="hover:text-gray-200">Thỏa thuận sử dụng</li>
                            <li className="hover:text-gray-200">Chính sách bảo mật</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold">Góc điện ảnh</h1>
                        <ul className="mt-8  flex flex-col text-gray-400  gap-y-5 ">
                            <li className="hover:text-gray-200">Sự kiện điện ảnh </li>
                        </ul>
                    </div>    
                    <div>
                        <h1 className="font-bold">Hỗ trợ</h1>
                        <ul className="mt-8  flex flex-col text-gray-400  gap-y-5 ">
                            <li className="hover:text-gray-200">Góp ý </li>
                        </ul>
                    </div>            
                </div>
                <div className="col-span-2 flex flex-col md:mx-40 justify-center items-center">
                    <div className="rounded-2xl">
                        <img width="70px" height="70px" src={logo} alt="" className="rounded-xl" />
                    </div>
                    <div className="text-2xl flex flex-rows gap-x-5 mt-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="hover:text-blue-600 transition duration-300" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="hover:text-red-600 transition duration-300" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-pink-500 transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-500 md:w-[90%] w-[90%] flex flex-rows">
                <div className="md:mt-5 md:block  md:mx-10 hidden ">
                    <img width="70px" height="70px" src={logo} alt="" className="rounded-3xl" />
                </div>
                <div className="  flex flex-col text-white font-medium mt-5">
                    <span>CÔNG TY CỔ PHẦN PHIM H&H </span>
                    <span>273 An Dương Vương – Phường 3 – Quận 5</span>
                    <div className="flex md:flex-rows gap-x-5">
                        <div className="flex flex-rows justify-center items-center gap-x-3">
                            <a href="tel:+84123456789">
                                <FaPhoneAlt className="hover:text-green-500 transition duration-300" /> 
                            </a>
                            <p>0869955323</p>
                        </div>
                        <div className="flex flex-rows justify-center items-center gap-x-3">
                            <a href="mailto:yourmail@example.com">
                                <MdEmail className="hover:text-red-500 transition duration-300" />
                            </a>
                            <p>dph@gmail.com</p>
                        </div>
                        <div className="flex flex-rows justify-center items-center gap-x-3">
                            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaTelegramPlane className="hover:text-blue-500 transition duration-300" />
                            </a>
                            <p>hotro@GalaxyImpact.h&h</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );    
}
export default Footer;  