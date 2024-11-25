"use client";
import Image from "next/image";
import OptionProfile from "../json/option.json";
import Logo from "../assets/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-black">
        <Image
          src={Logo}
          alt="logo"
          width={140}
          className="fixed -top-0 -left-0 p-4"
        />
        <div className="grid grid-rows-[0.5fr, 1fr] gap-4 text-white">
          <div className="text-center text-2xl sm:text-3xl md:text-6xl">
            Siapa Kamu? Pilih Profil Anda
          </div>
          <div className="grid grid-cols-4 gap-4">
            {OptionProfile.option.map((profil, i) => (
              <div
                className="text-white transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
                key={i}
              >
                <Link
                  href="/Dashboard"
                  className="transition-all ease-in-out duration-1000"
                >
                  <Image
                    src={profil.image}
                    alt="Profil"
                    width={180}
                    height={1800}
                  />
                  <h1 className="text-center">{profil.name}</h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
