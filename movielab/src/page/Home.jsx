import React, { useEffect } from "react";
import { Routes, Route, Link, Links } from "react-router-dom";
import styles from '../styles/Home.module.css'



const Home = ({data}) => {
  return (
    <div className={styles.home}>
    <h1 className={styles.homeTitle}>Trending tody</h1>

    <nav className={styles.homeNav}>
      {data.map((e) => {
        return <Link to={`/movies/${e.id}`}>{e.title}</Link>
    })}
    </nav>
    </div>
  )
}

export default Home;