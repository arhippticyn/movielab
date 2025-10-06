import React, { useEffect } from "react";
import { Routes, Route, Link, Links } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";



const Home = ({data}) => {
  return (
    <div>
    <h1>Trending tody</h1>

    <nav>
      {data.map((e) => {
        return <Link to={`/movies/${e.id}`}>{e.title}</Link>
    })}
    </nav>

    
    
    </div>
  )
}

export default Home;