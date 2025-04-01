function MovieImage({img})
{
    const Poster = img.find(img => img.name === "Background")?.imageUrl || ""
    
    return (
        <div className="relative flex justify-center w-full min-h-[60vh] bg-black">
            <div className="relative h-full">
                <div className="relative ">
                    <img src={Poster} 
                        alt="" 
                        className="w-[860px] h-[550px]  object-fill object-cover "
                        width="1440px" height="440px"/>
                </div>
            </div>
        </div>
    )
}
export default MovieImage