"use client";
import { useState, useEffect } from "react";
import ListMovie from "./ListMovie";
import axios from "axios";
import Skeleton from "../Skeleton/page";
const NowPlaying = () => {
  const [data, setData] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`)
        .then((res) => {
          setData(res.data.results.slice(8, 16));
        });
    };
    fetchData();
  }, []);

  return (
    <div className="p-2">
      <div className="text-xl md:text-4xl font-bold font-sans p-2">
        <h1>Now Playing</h1>
        {data == "" ? (
          <Skeleton />
        ) : (
          <div className="grid grid-cols-4 md:grid-cols-8">
            <ListMovie data={data} />
          </div>
        )}
      </div>
    </div>
  );
};
export default NowPlaying;
