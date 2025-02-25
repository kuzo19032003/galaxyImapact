import { posterNGT,ticket,playbutton } from "../../assets/images/images"
function MovieCard()
{
    return (
        <div className="relative w-100% h-auto">
            <div className="relative rounded-md overflow-hidden w-[300px] h-[450px]">
                <div className="absolute w-full h-full box-border bg-black/0  hover:bg-black/30 cursor-pointer transition-all duration-300 group">
                    <div className="flex flex-col justify-center items-center w-full h-full gap-7 z-10">
                        <a className="opacity-0 group-hover:opacity-100 bg-orange-500 w-[40%] h-[9%] rounded text-white text-center py-2 px-2 hover:bg-orange-400 flex gap-2 justify-center" href=""><img src={ticket} alt="" />Mua vé</a>
                        <button className="opacity-0 group-hover:opacity-100 border border-white w-[40%] h-[9%] rounded text-white text-center py-2 px-2 hover:bg-orange-300 hover:border-none flex gap-2 justify-center"><img src={playbutton} alt="" />Trailer</button>
                    </div>
                </div>
                <img src={posterNGT} alt="poster" className="object-cover w-full h-full" loading="lazy" />
            </div>
        </div>
    )
}
export default MovieCard