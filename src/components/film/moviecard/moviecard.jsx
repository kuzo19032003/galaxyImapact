import { ticket,playbutton } from "../../../assets/images/images";
import {Link} from "react-router-dom" 
function MovieCard({id,img,nameFilm,trailer,src,vote,ages})
{
    return (
        <div className="relative w-100% h-auto">
            <div className="relative rounded-md overflow-hidden w-[300px] h-[450px]">
                <div 
                    className="absolute w-full h-full box-border bg-black/0  hover:bg-black/30 
                    cursor-pointer transition-all duration-300 group z-20"
                >
                    <div className="flex flex-col justify-center items-center w-full h-full gap-7 z-10">
                        <Link 
                            to= {`/dat-ve/${id}`}
                            className="opacity-0 group-hover:opacity-100 bg-orange-500 
                                       w-[35%] h-[9%] 
                                       rounded text-white text-center py-2 px-2 hover:bg-orange-400 
                                       flex gap-2 justify-center" 
                            >
                            <img src={ticket} alt=""  className="filter invert"/>
                            Mua vé
                        </Link>
                        <button 
                            className="opacity-0 group-hover:opacity-100 border border-white w-[35%] h-[9%] 
                                       rounded text-white text-center py-2 px-2 hover:bg-orange-300 hover:border-none
                                       flex gap-2 justify-center"
                        >
                            <img src={playbutton} alt="" className="filter invert" />
                            Trailer
                        </button>
                    </div>
                </div>
                <img 
                    src={img} 
                    alt="poster" 
                    className="object-cover w-full h-full" 
                    loading="lazy" 
                />
                <div>
                    <p className="absolute top-[50vh] right-[0] w-[30%] bg-black/40 p-1">
                        <span className="mr-3">⭐</span>
                        <span className="font-bold text-white">{vote}</span>
                    </p>
                </div>
                <div>
                    <span className="absolute top-[55vh] right-[1%] w-[3vw] text-center font-bold text-white bg-orange-400 p-1 rounded">
                       {ages}
                    </span>
                </div>
            </div>
            <div>
                <h3 className="relative text-left font-bold mt-5 text cursor-pointer w-[50vh]">
                    {nameFilm}
                </h3>
            </div>
        </div>
    )
}
export default MovieCard