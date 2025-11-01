import { Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import { Suspense, lazy } from "react";
import { RotatingLines } from 'react-loader-spinner'


const Home = lazy(() => import('./page/Home.jsx'))
const Movies = lazy(() => import('./page/Movies.jsx'))
const Movie = lazy(() => import('./page/Movie.jsx'))
const Cast = lazy(() => import('./components/Cast.jsx'))
const Rewiews = lazy(() => import('./components/Rewiews.jsx'))

axios.defaults.baseURL = 'https://api.themoviedb.org/3'


function App() {
  const [data, setData] = useState([])

  const FetchMovie = async () => {
    try {
      const response = await axios.get(`/trending/movie/day?language=en-US&api_key=1bac43eb3178f898a40965000a977735`)
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
    <div className='app'>
      <nav className="nav">
        <NavLink className="appLink" to='/' end>Home</NavLink>
        <NavLink className="appLink" to='/movies'>Movies</NavLink>
      </nav>

      <Suspense fallback={<RotatingLines
visible={true}
height="96"
width="96"
color="grey"
strokeWidth="5"
animationDuration="0.75"
ariaLabel="rotating-lines-loading"
wrapperStyle={{}}
wrapperClass=""
/>} >
      <Routes>
      <Route path='/' element={<Home data={data} />} />
      <Route path='/movies' element={<Movies />} />
      <Route path="/movies/:movieId" element={<Movie />}>
      <Route path="cast" element={<Cast />} />
      <Route path="reviews" element={<Rewiews />} />
      </Route>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
