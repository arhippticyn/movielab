import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/Cast.module.css';


const Cast = () => {
    const [cast, setCast] = useState([])
    const { id } = useParams()

    const FetchCast = async () => {
        try {
            const response = await axios.get(`/movie/${id}/credits?api_key=1bac43eb3178f898a40965000a977735&language=en-US`)
        setCast(response.data.cast)
        }
        catch {
            console.log('error');
        }
    }

    useEffect(() => {
        FetchCast()
    }, [id])
  return (
    <ul className={styles.cast}>
        {cast.map((cast) => (
            <li className={styles.castItem} key={cast.id}>
                <img className={styles.castItemImg} src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name} />
                <h3 className={styles.castItemTitle}>{cast.name}</h3>
                <p className={styles.castItemCharacters}>Characters: {cast.character  }</p>
            </li>
        ))}
    </ul>
  )
}

export default Cast;