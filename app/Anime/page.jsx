"use client";
import Image from "next/image";
import Navbar from "../navbar";
import BgImage from "../../assets/Anime.png";
import { usePathname } from "next/navigation";
import ListAnime from "./ListAnime";

const Page = () => {
  const pathName = usePathname();
  return (
    <div className="bg-black w-full h-screen text-white fixed overflow-y-auto">
      <Navbar pathname={pathName}>
        <div className="relative min-h-screen">
          <Image
            src={BgImage}
            alt="BG"
            heigh="100vh"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute -bottom-1 md:bottom-0  left-0 right-0 h-1/5 bg-gradient-to-b from-transparent via-black/80 to-black/100 z-10" />
        </div>
        <h1 className="absolute top-20 left-10 text-4xl font-bold font-serif">
          Anime
        </h1>
        <div className="absolute bottom-[15%] left-2 md:left-10 md:w-1/4">
          <h1 className="text-2xl md:text-6xl font-serif">Two Fighter</h1>
          <h1 className=" text-md md:text-xl ">
            Anak kecil yang memulai perjalanan untuk meningkatkan keterampilan
            mereka setelah mengalami kekalahan brutal di jalanan.
          </h1>
        </div>
      </Navbar>
      <ListAnime />
    </div>
  );
};

export default Page;
