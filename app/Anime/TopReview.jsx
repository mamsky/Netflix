"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ReusableListAnime from "./ReusableListAnime";

const TopReview = () => {
  const [data, setData] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_ANIME;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${baseUrl}/top/anime?type=tv_special&limit=8`)
        .then((res) => {
          setData(res.data.data);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="p-2 text-xl md:text-4xl font-bold font-sans">
        <h1>Special Anime</h1>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 p-2">
          <ReusableListAnime data={data} />
        </div>
      </div>
    </>
  );
};
export default TopReview;