import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const Home = () => {
  const [data, setData] = useState([])

  const FetchMovie = async () => {
    try {
      const response = await axios.get(`/trending/all/day?language=en-US&api_key=1bac43eb3178f898a40965000a977735`)
      setData(response.data.results)
      console.log(data)
    }
    catch {
      console.log('error');
    }
  }

  useEffect(() => {
    FetchMovie()
  },[])
  return (
    <div>Home</div>
  )
}

export default Home;