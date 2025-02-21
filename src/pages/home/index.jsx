import Slider from "../../components/slider/slider";
import Bookticket from "../../components/bookticket/bookticket";
function Home() {
  return (
    <div className="">
      <Slider />
      <Bookticket className="mt-10 flex justify-center select-none"/>
    </div>
  );
}

export default Home;