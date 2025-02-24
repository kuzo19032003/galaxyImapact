import Slider from "../../components/slider/slider";
import Bookticket from "../../components/bookticket/bookticket";
import Film from "../film/film";
function Home() {
  return (
    <div className="">
      <Slider />
      <Bookticket className="mt-10 flex justify-center select-none"/>
      <Film className= "mt-[5vh] min-h-[100vh] bg-red-200"/> 
    </div>
  );
}

export default Home;