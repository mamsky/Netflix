import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import UpComing from "./UpComing";

const ListMovie = () => {
  return (
    <>
      <div className="w-full h-screen bg-black text- p-4">
        <div className="grid grid-rows-4 gap-4">
          {/* popular  */}
          <div className="">
            <NowPlaying />
          </div>
          {/* end popular  */}
          <div className="">
            <UpComing />
          </div>
          <div className="">
            <Popular />
          </div>
          <div className="">
            <TopRated />
          </div>
        </div>
      </div>
    </>
  );
};
export default ListMovie;
