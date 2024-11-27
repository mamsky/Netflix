"use client";
import Image from "next/image";
import Navbar from "../navbar";
import Bg from "../../assets/bg.JPG";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../movieList/page";
import { usePathname } from "next/navigation";
import JsonData from "../../json/placehold.json";
import { CiImageOn } from "react-icons/ci";

const App = () => {
  const pathName = usePathname();
  const [data, setData] = useState([]);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const movieDB = async () => {
      await axios
        .get(
          `${baseUrl}/discover/movie?language=id-ID&with_original_language=id&year=2024&api_key=${apiKey}`
        )
        .then((res) => {
          setData(res.data.results.slice(1, 9));
        });
    };
    movieDB();
  }, []);

  return (
    <div className="bg-black text-white w-full h-screen fixed overflow-y-auto">
      <Navbar pathname={pathName}>
        <div className="relative min-h-screen">
          <Image
            src={Bg}
            alt="background"
            heigh="100vh"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-b from-transparent via-black/30 to-black/100 z-10" />
        </div>
        <div className="w-4/5 absolute top-[55%] sm:top-[40%] md:top-[38%] left-[5%]">
          <div className="grid grid-rows-2 gap-4 md:gap-0 ">
            <div className="md:w-2/3 lg:w-1/2">
              <h1 className="text-xl md:text-4xl lg:text-6xl font-mono">
                Fly Like A Bird
              </h1>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-8 h-8 md:w-12 md:h-16 text-center text-[10px] md:text-lg font-bold p-1 bg-red-600 rounded-md">
                  TOP <br />
                  <span className="text-[12px] md:text-xl">1</span>
                </div>
                <div className="text-md md:text-4xl font-sans">
                  #1 di film hari ini
                </div>
              </div>
              <div className="mt-4 text-[14px] md:text-2xl">
                Ketika seorang anak muda dengan penuh semangat mengejar
                cita-citanya setinggi langit untuk menjadi programer.
              </div>
              <div className="mt- w-1/2 sm:w1/3">
                <Link
                  href="https://github.com/mamsky"
                  target="_blank"
                  className="flex border text-md rounded-md bg-white text-black items-center gap-3 p-2"
                >
                  <FaGithub className="w-6 h-6" />
                  Github
                </Link>
              </div>
            </div>
            <div>
              <div className="hidden sm:block absolute md:-right-14">
                <h1 className="text-md md:text-2xl font-sans">
                  8 film terpopuler saat ini di Indonesia
                </h1>
                <div className=" grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {data == "" ? (
                    <>
                      {JsonData.data.map((f) => (
                        <div key={f.id}>
                          <div className="animate-pulse text-black">
                            <CiImageOn
                              width={250}
                              height={300}
                              className="w-14 h-18 md:w-24 md:h-32 rounded-md"
                            />
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {data.map((field) => (
                        <div
                          key={field.id}
                          className="transition ease-in-out duration-300 hover:scale-150 hover:cursor-pointer"
                        >
                          <Image
                            width={250}
                            height={300}
                            className="w-14 h-18 md:w-24 md:h-32 rounded-md"
                            src={
                              process.env.NEXT_PUBLIC_IMAGE + field.poster_path
                            }
                            alt="foto"
                          />
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
      <MovieList />
    </div>
  );
};

export default App;
