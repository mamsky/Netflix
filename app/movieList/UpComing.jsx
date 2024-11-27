"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ListMovie from "./ListMovie";
import Skeleton from "../Skeleton/page";

const UpComing = () => {
  const [data, setData] = useState([]);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
        .then((res) => {
          setData(res.data.results.slice(0, 8));
        });
    };
    fetchData();
  }, []);

  return (
    <div className="p-2">
      <h1 className="text-xl md:text-4xl font-sans font-bold p-2">Upcoming</h1>
      {data == "" ? (
        <Skeleton />
      ) : (
        <div className="grid grid-cols-4 md:grid-cols-8">
          <ListMovie data={data} />
        </div>
      )}
    </div>
  );
};

export default UpComing;
