import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Rewiews = () => {
    const { movieId } = useParams()
    const [reviews, setReviews] = useState([])

    const FetchReviews = async () => {
        try {
            const response = await axios.get(`/movie/${ movieId}/reviews?language=en-US&api_key=1bac43eb3178f898a40965000a977735`)
            setReviews(response.data.results)
        }
        catch {
            console.log('error');
        }
    }

    useEffect(() => {
        FetchReviews()
    }, [movieId])
  return (
    <div>
        {reviews && reviews.length > 0 ? (
             <ul>
            {reviews.map((review) => (
            <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
            </li>
            ))}
            </ul>
        ) : (
           <p>We don't have any reviews for this movie.</p>
        )}
        
    </div>
  )
}

export default Rewiews;