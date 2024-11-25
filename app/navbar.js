"use client";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=" text-white p-2">
        <div className="flex justify-between p-2 mx-2">
          <div className="flex items-center gap-4 font-sans">
            <Image src={Logo} alt="Logo" className="w-16" />
            {/* //togle  */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center hover:cursor-pointer text-xs"
              >
                Menu <IoMdArrowDropdown className="w-5 h-5" />
              </button>
              {isOpen && (
                <div className="absolute bg-black p-2">
                  <div className="text-[10px]">Awal</div>
                  <div className="text-[10px]">Seri</div>
                  <div className="text-[10px]">Film</div>
                  <div className="text-[10px]">
                    Berita yang paling banyak dilihat
                  </div>
                  <div className="text-[10px]">Telusuri berdasarkan bahasa</div>
                </div>
              )}
            </div>
            {/* toogle end  */}
            <div className="text-[10px] hidden md:block ">Awal</div>
            <div className="text-[10px] hidden md:block">Seri</div>
            <div className="text-[10px] hidden md:block">Film</div>
            <div className="text-[10px] hidden md:block">
              Berita yang paling banyak dilihat
            </div>
            <div className="text-[10px] hidden md:block">
              Telusuri berdasarkan bahasa
            </div>
          </div>
          <div className="ml-10 gap-4 flex items-center">
            <div className="text-[10px]">Search</div>
            <div className="text-[10px]">Profile</div>
          </div>
        </div>
      </div>
      <div className="">{children}</div>
    </>
  );
};

export default Navbar;
