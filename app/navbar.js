"use client";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = ({ children, pathname }) => {
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
                className="flex items-center hover:cursor-pointer text-md"
              >
                Menu <IoMdArrowDropdown className="w-5 h-5" />
              </button>
              {isOpen && (
                <div className="absolute z-10 bg-black p-2 rounded-b-lg">
                  <div className="my-1">
                    <Link
                      href="/Dashboard"
                      className={`text-xs hover:cursor-pointer hover:scale-125 ${
                        pathname == "/Dashboard"
                          ? "text-yellow-100 text-md"
                          : ""
                      } `}
                    >
                      Awal
                    </Link>
                  </div>
                  <div className="my-1">
                    <Link
                      href="/Series"
                      className={`text-xs hover:cursor-pointer hover:scale-105 ${
                        pathname == "/Series" ? "text-yellow-100 text-md" : ""
                      } `}
                    >
                      Seri
                    </Link>
                  </div>
                  <div className="my-1">
                    <Link
                      href="/Film"
                      className={`text-xs hover:cursor-pointer hover:scale-105 ${
                        pathname == "/Film" ? "text-yellow-100 text-md" : ""
                      } `}
                    >
                      Film
                    </Link>
                  </div>
                  <div className="my-1">
                    <Link
                      href="/Anime"
                      className={`text-xs hover:cursor-pointer hover:scale-105 ${
                        pathname == "/Anime" ? "text-yellow-100 text-md" : ""
                      } `}
                    >
                      Anime
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {/* toogle end  */}
            <Link
              href="/Dashboard"
              className={`text-md hidden md:block hover:cursor-pointer hover:scale-125 ${
                pathname == "/Dashboard" ? "text-yellow-100 text-lg" : ""
              } `}
            >
              Awal
            </Link>
            <Link
              href="/Series"
              className={`text-md hidden md:block hover:cursor-pointer hover:scale-125 ${
                pathname == "/Series" ? "text-yellow-100 text-lg" : ""
              } `}
            >
              Series
            </Link>
            <Link
              href="/Film"
              className={`text-md hidden md:block hover:cursor-pointer hover:scale-125 ${
                pathname == "/Film" ? "text-yellow-100 text-lg" : ""
              } `}
            >
              Film
            </Link>
            <Link
              href="/Anime"
              className={`text-md hidden md:block hover:cursor-pointer hover:scale-125 ${
                pathname == "/Anime" ? "text-yellow-100 text-lg" : ""
              } `}
            >
              Anime
            </Link>
          </div>
          <div className="ml-10 gap-4 flex items-center">
            <div className="text-md">Search</div>
            <div className="text-md">Profile</div>
          </div>
        </div>
      </div>
      <div className="">{children}</div>
    </>
  );
};

export default Navbar;
