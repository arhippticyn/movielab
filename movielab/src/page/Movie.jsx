  import React, { useEffect, useState } from 'react';
  import { useParams, Link, Outlet } from 'react-router-dom';
  import axios from 'axios';
  import  styles  from '../styles/Movie.module.css'

  const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState([])

    const FetchMovie = async () => {
      try {
        const response = await axios.get(`/movie/${id}?language=en-US&api_key=1bac43eb3178f898a40965000a977735`)
        setMovie(response.data)
        console.log(movie)
      }
      catch {
        console.log('error');
      }
    }

    useEffect(() => {
      FetchMovie()
    },[id])

    const year = movie.release_date?.split('-')[0]

    return (
      <div className={styles.movie}>
        <div className={styles.movieInfo}>
        <img className={styles.movieInfoImg} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={id} />

        <div className={styles.movieInfoText}>
          <h2 className={styles.movieInfoTextTitle}>{movie.title} ({year})</h2>
          <span className={styles.movieInfoTextScore}>User Score: {Math.round(movie.vote_average / 0.1)}%</span>
          <h3 className={styles.movieInfoTextOverviewT}>Overview</h3>
          <p className={styles.movieInfoTextOverview}>{movie.overview}</p>
          <h3 className={styles.movieInfoTextGenres}>Genres</h3>
          <ul className={styles.movieInfoTextGenresItems}>
            {movie?.genres?.map((genre) => {
              return <li key={genre.id} className={styles.movieInfoTextGenresItem}>{genre.name}</li>
            })}
          </ul>
        </div>
      </div>

      <hr />

      <div className={styles.movieAddinfo}>
        <h4 className={styles.movieAddinfoTitle}>addictional information</h4>

        <ul className={styles.movieAddinfoItemslinks}>
          <li className={styles.movieAddinfoItemlink}><Link to='cast'>Cast</Link></li>
          <li className={styles.movieAddinfoItemlink}><Link to='reviews'>Reviews</Link></li>
        </ul>
      </div>

      <hr />


      <div className={styles.movieOutlet}>
        <Outlet />
      </div>
      </div>
      
    )
  }

  export default Movie;