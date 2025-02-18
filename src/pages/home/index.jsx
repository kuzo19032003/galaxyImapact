import Slider from "../../components/slider/slider";
import Bookticket from "../../components/bookticket/bookticket";
function Home() {
  return (
    <div className="overflow-x-hidden">
      <Slider />
      <Bookticket />
    </div>
  );
}

export default Home;