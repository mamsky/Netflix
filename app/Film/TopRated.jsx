"use client";
import { useState, useEffect } from "react";
import ReusableListMovie from "./ReusableListMovie";
import axios from "axios";
const TopRated = () => {
  const [data, setData] = useState([]);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `${baseUrl}/movie/top_rated?language=id-ID&page=1&api_key=${apiKey}`
        )
        .then((res) => {
          setData(res.data.results.slice(8, 16));
        });
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="p-2 text-xl md:text-4xl font-bold font-sans">
      <h1>TopRated</h1>
      <div className="grid grid-cols-4 md:grid-cols-8">
        <ReusableListMovie data={data} />
      </div>
    </div>
  );
};
export default TopRated;
