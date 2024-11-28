import Footer from "../footer";
import AiringToday from "./AiringToday";
import OnAirSeries from "./OnAirSeries";
import PopularSeries from "./PopularSeries";
import TopRated from "./TopRated";
const ListMovie = () => {
  return (
    <>
      <div className="w-full h-screen bg-black text- p-4">
        <div className="grid grid-rows-4 gap-4">
          {/* popular  */}
          <div className="">
            <OnAirSeries />
          </div>
          {/* end popular  */}
          <div className="">
            <AiringToday />
          </div>
          <div className="">
            <PopularSeries />
          </div>
          <div className="">
            <TopRated />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ListMovie;
