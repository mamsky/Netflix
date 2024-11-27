"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ReusableListMovie from "./ReusableListMovie";
import Skeleton from "../Skeleton/page";

const AiringToday = () => {
  const [data, setData] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `${baseUrl}/tv/airing_today?language=en-US&page=2&api_key=${apiKey}`
        )
        .then((res) => {
          setData(res.data.results.slice(1, 9));
        });
    };
    fetchData();
  }, []);

  return (
    <div className="p-2 text-xl md:text-4xl font-bold font-sans">
      <h1>Airing Today</h1>
      {data == "" ? (
        <Skeleton />
      ) : (
        <div className="grid grid-cols-4 md:grid-cols-8">
          <ReusableListMovie data={data} />
        </div>
      )}
    </div>
  );
};
export default AiringToday;
