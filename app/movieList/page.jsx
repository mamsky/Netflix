import PopularMovie from "./popular";
import NowPlaying from "./NowPlaying";
import TopRated from "./TopRated";
import UpComing from "./UpComing";
import Footer from "../footer";

const movieList = () => {
  return (
    <div className="w-full h-screen bg-black text- p-4">
      <div className="grid grid-rows-4 gap-4">
        {/* popular  */}
        <div className="">
          <PopularMovie />
        </div>
        {/* end popular  */}
        <div className="">
          <NowPlaying />
        </div>
        <div className="">
          <TopRated />
        </div>
        <div className="">
          <UpComing />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default movieList;
