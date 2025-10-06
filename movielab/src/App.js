import { Routes, Route, Link } from "react-router-dom";
import Home from './page/Home.jsx';
import Movies from './page/Movies.jsx';
import Movie from "./page/Movie.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
      </nav>

      <Routes>
      <Route path='/' element={<Home data={data} />} />
      <Route path='/movies' element={<Movies />} />
      <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
