import Image from "next/image";
const ReusableListAnime = ({ data }) => {
  return (
    <>
      {data.map((fields) => (
        <div
          key={fields.mal_id}
          className="bg-gray-200 rounded-md p-0.5 hover:cursor-pointer hover:scale-125 duration-300"
        >
          <Image
            src={`${fields.images.jpg.image_url}`}
            width={300}
            height={300}
            alt={fields.title}
            className="bg-cover w-[100%] h-[100%]"
          />
        </div>
      ))}
    </>
  );
};
export default ReusableListAnime;
