function ShowTime({showTime}){
    return(
        <div className="showTime mt-10">
            <div className="flex">
                <span className="border-l-3 border-blue-700 mr-2"></span>
                <h1 className= "font-medium text-xl">
                    Lịch chiếu phim
                </h1>
            </div>
            <div className="mt-5">
                <div className="flex flex-rows gap-10 ">
                    {
                       showTime.map((show,index)=>(
                            <p key={index} className="w-auto h-[10vh]  rounded-lg p-3 text-center bg-blue-600 text-white" >
                                {show.Day}
                            </p>
                       ))
                    }
                </div>
                <div className="w-full border-1 border-blue-700 my-5"></div>
                <div>
                    <div className="">
                        {
                            showTime.map((show)=>(
                                show.Theaters.map((Theater,index)=>(
                                    <div  key={index} className="my-10">
                                        {
                                            <div>
                                                <div >
                                                    <h1>
                                                        {Theater.nameTheater}
                                                    </h1>
                                                </div>
                                                <div >
                                                        <p >
                                                            {Theater.time}
                                                        </p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))
                            ))                       
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowTime