"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ReusableListAnime from "./ReusableListAnime";
import Skeleton from "../Skeleton/page";

const ForYou = () => {
  const [data, setData] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_ANIME;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`${baseUrl}/top/anime?rating=pg13`).then((res) => {
          setData(res.data.data.slice(0, 8));
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="p-2 text-xl md:text-4xl font-bold font-sans">
        <h1>Anime For You</h1>
        {data == "" ? (
          <Skeleton />
        ) : (
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 p-2">
            <ReusableListAnime data={data} />
          </div>
        )}
      </div>
    </>
  );
};
export default ForYou;
