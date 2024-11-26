import Image from "next/image";
const ReusableListMovie = ({ data }) => {
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE;
  return (
    <>
      {data.map((fields) => (
        <div
          key={fields.id}
          className="bg-gray-200 rounded-md p-0.5 hover:cursor-pointer hover:scale-125 duration-300"
        >
          <Image
            src={`${imageUrl}${fields.poster_path}`}
            width={300}
            height={300}
            alt={fields.poster_path}
            className="bg-cover w-[100%] h-[100%]"
          />
        </div>
      ))}
    </>
  );
};
export default ReusableListMovie;
