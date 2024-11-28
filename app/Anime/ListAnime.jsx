import Footer from "../footer";
import ForYou from "./ForYou";
import TopAnime from "./TopAnime";
import TopReview from "./TopReview";

const ListAnime = () => {
  return (
    <>
      <div className="w-full h-screen bg-black text- p-4">
        <div className="grid grid-rows-3 gap-4">
          {/* popular  */}
          <div className="">
            <ForYou />
          </div>
          {/* end popular  */}
          <div className="">
            <TopAnime />
          </div>
          <div className="">
            <TopReview />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ListAnime;
