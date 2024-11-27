"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ReusableListMovie from "./ReusableListMovie";
import Skeleton from "../Skeleton/page";

const PopularSeries = () => {
  const [data, setData] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${baseUrl}/tv/popular?language=en-US&page=2&api_key=${apiKey}`)
        .then((res) => {
          setData(res.data.results.slice(4, 12));
        });
    };
    fetchData();
  }, []);

  return (
    <div className="p-2 text-xl md:text-4xl font-bold font-sans">
      <h1>Popular Series</h1>
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
export default PopularSeries;
