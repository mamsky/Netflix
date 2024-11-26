"use client";
import Image from "next/image";
import Navbar from "../navbar";
import { usePathname } from "next/navigation";
import BgImage from "../../assets/plantvszombie.JPG";
import ListMovie from "./ListMovie";

const Film = () => {
  const pathName = usePathname();
  return (
    <>
      <div className="w-full h-screen bg-black fixed text-white overflow-y-auto">
        <Navbar pathname={pathName}>
          <div className="relative min-h-screen">
            <Image
              src={BgImage}
              alt="bg"
              heigh="100vh"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute -bottom-1 md:bottom-0  left-0 right-0 h-1/4 bg-gradient-to-b from-transparent via-black/90 to-black/100 z-10" />
          </div>
          <h1 className="absolute top-20 left-10 text-4xl font-serif">Film</h1>
          <div className="absolute bottom-14 md:bottom-[20%] left-5 md:left-10 bg-white/20 rounded-tr-lg p-2 backdrop-blur-md">
            <h1 className="text-4xl text-center md:text-6xl bg-gradient-to-b from-green-900 via-green-700 to-black bg-clip-text text-transparent">
              Plant <br />
              <span>VS</span>
              <br /> Zombie
            </h1>
          </div>
        </Navbar>
        <ListMovie />
      </div>
    </>
  );
};

export default Film;
