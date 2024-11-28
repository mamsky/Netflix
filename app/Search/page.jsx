"use client";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Navbar from "../navbar";
import axios, { all } from "axios";
import Image from "next/image";
import Footer from "../footer";
const Page = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE;

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  let allData = [];

  const fetchData = async () => {
    await axios
      .get(
        `${baseUrl}/search/multi?query=${searchQuery}&include_adult=false&language=id-ID&&page=1&api_key=${apiKey}`
      )
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    await axios
      .get(
        `${baseUrl}/search/multi?query=${searchQuery}&include_adult=false&language=id-ID&&page=2&api_key=${apiKey}`
      )
      .then((res) => {
        allData.push(res.data.results);
        setData1(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    await axios
      .get(
        `${baseUrl}/search/multi?query=${searchQuery}&include_adult=false&language=id-ID&&page=3&api_key=${apiKey}`
      )
      .then((res) => {
        allData.push(res.data.results);
        setData2(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  allData.push(data.concat(data1, data2));
  let dataArr = [];

  for (let i = 0; i < allData.length; i++) {
    dataArr.push(...allData[i]);
  }

  for (let i = 0; i < dataArr.length; i++) {
    if (dataArr[i].poster_path == null) {
      dataArr.splice(i, 1);
      i--;
    }
  }

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return (
    <div className="w-full h-screen bg-black fixed overflow-y-auto">
      <Navbar pathname={pathName} />
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2 pt-2">
        {dataArr == "" ? (
          <div className="text-2xl text-white absolute left-5 top-20">
            Data yang ingin anda cari tidak ada...
          </div>
        ) : (
          dataArr.map((fields, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-md p-0.5 text-white transition hover:scale-125 duration-300"
            >
              <Image
                src={imageUrl + fields.poster_path}
                width={300}
                height={250}
                alt="Missing"
                className="rounded-md"
              />
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Page;
