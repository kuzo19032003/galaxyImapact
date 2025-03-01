function ContentFilm({content}){
    return(
        <div className="content-film mt-10 ">
            <div className="flex">
                <span className="border-l-3 border-blue-700 mr-2"></span>
                <h1 className= "font-medium text-xl">
                    Nội dung phim
                </h1>
            </div>
            <div className="mt-10 text-justify">
                <span >
                    {content}
                </span>
            </div>
        </div>
    )
}
export default ContentFilm