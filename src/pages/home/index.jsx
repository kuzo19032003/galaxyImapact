import Slider from "../../components/slider/slider";
import Bookticket from "../../components/bookticket/bookticket";
import Film from "../../components/film/film";
import Introduction from "../../components/intro/introduction";
import  "../../styles/background.css"
function Home() {
  return (
    <div className="">
      <Slider />
      <Bookticket className="mt-10 flex justify-center select-none"/>
      <Film 
          className= "mt-[5vh] min-h-[50vh] gradient-bg"
      /> 
      <Introduction/>
    </div>
  );
}

export default Home;