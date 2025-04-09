import { useEffect, useState } from "react";
import { ticket,playbutton } from "../../../assets/images/images";
import {Link} from "react-router-dom" 

function MovieCard({Film,classCard,classTitle,isLink})
{
    
    const Poster = Film.images.find(img => img.name === "Poster")?.imageUrl || ""
    const sharpImage = Poster.replace("/upload/", "/upload/dpr_auto/");

    const defaultClassCard = "w-[300px] h-[450px]"
    const finalClassCard =  classCard || defaultClassCard

    const defaultClassName = "w-[50vh] text-gray-100"
    const finalClassName = classTitle || defaultClassName

    return (
        <div className="relative w-100% h-auto mt-5">
            <div className={`relative rounded-md overflow-hidden ${finalClassCard}`}>
                <div 
                    className="absolute w-full h-full box-border bg-black/0  hover:bg-black/30 
                    cursor-pointer transition-all duration-300 group z-1"
                >
                    {
                        isLink && 
                        <div className="flex flex-col justify-center items-center w-full h-full gap-7 z-2">
                            <Link 
                                to= {`/dat-ve/${Film.id}`}
                                className="opacity-0 group-hover:opacity-100 bg-orange-500 
                                        w-[35%] h-[9%] h-[10%] whitespace-nowrap
                                        rounded text-white text-center py-2 px-2 hover:bg-orange-400 
                                        flex gap-2 justify-center" 
                                >
                                <img src={ticket} alt=""  className="filter invert"/>
                                Mua vé
                            </Link>
                            <button className="opacity-0 group-hover:opacity-100 border border-white w-[35%] h-[9%] 
                                            rounded text-white text-center py-2 px-2 hover:bg-orange-300 hover:border-none
                                            flex gap-2 justify-center"
                            >
                                <img src={playbutton} alt="" className="filter invert" />
                                    Trailer
                            </button>
                        </div>
                    }
                </div>
                <img  src={sharpImage} alt="poster" className="object-cover md:w-full md:h-full w-full h-full" />
                {/* <div>
                    <p className="absolute top-[50vh] right-[0] w-[30%] bg-black/40 p-1">
                        <span className="mr-3">⭐</span>
                        <span className="font-bold text-white">{vote}</span>
                    </p>
                </div>
                <div>
                    <span className="absolute top-[55vh] right-[1%] w-[3vw] text-center font-bold text-white bg-orange-400 p-1 rounded">
                       {ages}
                    </span>
                </div> */}
            </div>
            <div>
                <h3 className={`relative text-left font-bold mt-5 cursor-pointer ${finalClassName}`}>
                    {Film.title}
                </h3>
            </div>
        </div>
    )
}
export default MovieCard