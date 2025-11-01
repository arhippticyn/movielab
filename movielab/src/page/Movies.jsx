import React, { useState } from "react";
import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/Movies.module.css'

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [data, setData] = useState([])

  const value = searchParams.get('value')

  const SearchFetch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`/search/movie?include_adult=false&query=${value}&language=en-US&api_key=1bac43eb3178f898a40965000a977735`)
      setData(response.data.results)
    } catch {
      console.log('error');
    }
  }
  return (
    <div className={styles.movies}>
      <form action="" onSubmit={SearchFetch} className={styles.moviesSearch}>
        <input type="text" onChange={e => setSearchParams({ value: e.target.value})} value={value} />

        <button type="submit">Search</button>
      </form>

      <ul>
        {data.map((e) => {
          return (
            <li key={e.id}><NavLink to={`/movies/${e.id}`} className={styles.SearchLink}>{e.title}</NavLink></li>
          )
        })}
      </ul>
    </div>
  )
}

export default Movies;