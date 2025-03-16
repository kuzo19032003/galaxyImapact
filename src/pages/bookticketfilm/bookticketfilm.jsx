import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { posterNGT,posterNuHon,posterDarkNuns,posterCaptain,posterDetailNGT } from "../../assets/images/images";

import MovieImage from "../../components/film/movieimage/movieImage";
import MovieDetail from "../../components/film/moviedetail/moviedetail";
import MovieNowPlaying from "../../components/film/movienowplaying/movienowplaying";

function BookTicketFilm()
{
    const { id } = useParams()
    

    const [movie,setMovie] = useState(null)
    const [moviePlayingOther,setMoviePlayingOther] = useState(null)

    
    useEffect (() => {
        
        const moviePoster = [
            { id: 1, src: "abc", trailer: "ac",
              nameFilm: "Nhà gia tiên", vote: "9.7", ages: "T13",img:posterDetailNGT,img2:posterNGT,
              national:"Việt Nam",MovieProducer:"17 Production",Genre:"Hài hước",Director:"Huỳnh Lập",
              Actor:{
                mainActor1:{
                    name:"Phương Mỹ Chi"
                },
                mainActor2:{
                    name:"Huỳnh Lập"
                },
                mainActor3:{
                    name:"Hạnh Thúy"
                }
              },
              ShowTime: [
                {
                    Day: "3/1/2025",
                    Theaters: [
                        {
                            nameTheater: "Galaxy Nguyễn Du",
                            time: ["11h45", "12h45", "1h45"]
                        },
                        {
                            nameTheater: "Galaxy Tân Bình",
                            time: ["11h45", "12h45", "1h45"]
                        },
                        {
                            nameTheater: "Galaxy Kinh Dương Vương",
                            time: ["11h45", "12h45", "1h45"]
                        }
                    ]
                },
                {
                    Day: "4/1/2025",
                    Theaters: [
                        {
                            nameTheater: "Galaxy Nguyễn Minh",
                            time: ["11h45", "12h45", "1h45"]
                        },
                        {
                            nameTheater: "Galaxy Tân Bình",
                            time: ["11h45", "12h45", "1h45"]
                        },
                        {
                            nameTheater: "Galaxy Kinh Dương Vương",
                            time: ["11h45", "12h45", "1h45"]
                        }
                    ]
                }
            ]
            
              ,Time:"117 phút",Day:"19/02/2025",
              Content:"Nhà Gia Tiên xoay quanh câu chuyện đa góc nhìn về các thế hệ khác nhau trong một gia đình, có hai nhân vật chính là Gia Minh (Huỳnh Lập) và Mỹ Tiên (Phương Mỹ Chi). Trở về căn nhà gia tiên để quay các video “triệu view” trên mạng xã hội, Mỹ Tiên - một nhà sáng tạo nội dung thuộc thế hệ Z vốn không tin vào chuyện tâm linh, hoàn toàn mất kết nối với gia đình, bất ngờ nhìn thấy Gia Minh - người anh trai đã mất từ lâu. Để hồn ma của Gia Minh có thể siêu thoát và không tiếp tục làm phiền mình, Mỹ Tiên bắt tay cùng Gia Minh lên kế hoạch giữ lấy căn nhà gia tiên đang bị họ hàng tranh chấp, đòi ông nội chia tài sản. Đứng trước hàng loạt bí mật động trời trong căn nhà gia tiên, liệu Mỹ Tiên có vượt qua được tất cả để hoàn thành di nguyện của Gia Minh?"
            },
            { id: 2, src: "abc", trailer: "ac", nameFilm: "Nụ hôn bạc tỉ", vote: "9.1", ages: "T18",img:posterNuHon },
            { id: 3, src: "abc", trailer: "ac", nameFilm: "Dark Nuns", vote: "9.9", ages: "T18",img:posterDarkNuns },
            { id: 4, src: "abc", trailer: "ac", nameFilm: "Captain America", vote: "9.6", ages: "T13",img:posterCaptain },
        ];

        const movie = moviePoster.find(m => m.id == id)
        const movieOther = moviePoster.filter( m => m.id !== id).slice(0,3)

        setMovie(movie)
        setMoviePlayingOther(movieOther)

       

    },[id])

    
    if(!movie) return <h1>Loading....</h1>

    return (
        <div>
            <MovieImage img={movie.img} />
            <div className="grid grid-cols-7 max-w-[75vw] mx-auto  mt-10">
                <MovieDetail movie={movie}/>
                <MovieNowPlaying movie={moviePlayingOther}/>
            </div>
        </div>
    )
}
export default BookTicketFilm