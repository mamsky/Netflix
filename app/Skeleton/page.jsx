import JsonData from "../../json/placehold.json";
import { CiImageOn } from "react-icons/ci";

const Skeleton = () => {
  return (
    <div className="rounded-md p-0.5">
      <div className="grid grid-cols-4 md:grid-cols-8">
        {JsonData.data.map((skeleton) => (
          <div key={skeleton.id}>
            <div className="animate-pulse text-white">
              <CiImageOn
                width={300}
                height={300}
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
