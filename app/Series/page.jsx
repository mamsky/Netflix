"use client";
import { usePathname } from "next/navigation";
import Navbar from "../navbar";
import BgImage from "../../assets/3saudara.png";
import Image from "next/image";
import ListMovie from "./ListMovie";

const Series = () => {
  const pathName = usePathname();
  return (
    <>
      <div className="bg-black w-full h-screen text-white fixed overflow-y-auto">
        <Navbar pathname={pathName}>
          <div className="relative min-h-screen">
            <Image
              src={BgImage}
              alt="Bg"
              heigh="100vh"
              layout="fill" // Memastikan gambar memenuhi
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute -bottom-1 md:bottom-0  left-0 right-0 h-1/4 bg-gradient-to-b from-transparent via-black/90 to-black/100 z-10" />
          </div>
          <h1 className="absolute left-10 top-20 font-bold font-serif text-4xl bg-gradient-to-r from-cyan-500 via-cyan-300 to-white bg-clip-text text-transparent ">
            Series
          </h1>
          <div className="absolute bottom-[15%] md:w-1/3 md:left-10 bg-white/20 backdrop-blur-sm p-2 rounded-lg">
            <h1 className="text-2xl md:text-4xl font-bold">Three Brothers</h1>
            <div className="flex items-center gap-3">
              <h1 className="text-center text-xs bg-red-600 p-1 rounded-lg font-bold">
                TOP
                <br />
                <span>1</span>
              </h1>
              <h1 className="text-md font-bold">No 1 dalam serial</h1>
            </div>
            <h1 className=" text-md ">
              Kisah 3 orang saudara yang saling melindungi sejak kecil dan
              merantau dari kalimantan barat untuk mencoba menjadi orang sukses.
            </h1>
          </div>
        </Navbar>
        <ListMovie />
      </div>
    </>
  );
};

export default Series;
