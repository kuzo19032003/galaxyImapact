import { useState } from "react"
import MovieFuture from "../moviefuture/moviefuture"
import MovieShowing from "../movieshowing/movieshowing"


function Film({className})
{
    const [selectedTab,setSelectedTab] = useState("showing")

    
    return ( 
        <div className={className}>
            <div className="w-[82%] mx-auto p-10">
                <div className="flex  items-center gap-10">
                    <div className="flex ">
                        <span className="border-l-3 border-blue-700 mr-2"></span>
                        <h1 className=" font-bold text-2xl uppercase">
                            PHIM
                        </h1>
                    </div>
                    <button 
                        onClick={() => setSelectedTab("showing")}
                        className={selectedTab === "showing" ? "border-b-2 text-xl text-indigo-700 font-bold transition-all duration-300 ease-in-out cursor-pointer opacity-100" : "text-lg text-gray-500 font-bold transition-all duration-300 ease-in-out cursor-pointer opacity-50"}>
                            Đang chiếu
                    </button>
                    <button
                        onClick={() => setSelectedTab("future")} 
                        className={selectedTab === "future" ? "border-b-2 text-xl text-indigo-700 font-bold transition-all duration-300  ease-in-out cursor-pointer" : " text-lg text-gray-500 font-bold transition-all duration-300 ease-in-out cursor-pointer opacity-50"}>
                            Sắp chiếu
                    </button>

                </div>
                <div className="mt-[6vh]">
                    {
                        selectedTab == "showing" 
                        ? <MovieShowing className= "grid grid-cols-4 gap-4"/> 
                        : <MovieFuture/>
                    }
                </div>

            </div>
        </div>
    )
}
export default Film