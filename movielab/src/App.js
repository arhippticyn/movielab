import { Routes, Route, Link } from "react-router-dom";
import Home from './page/Home.jsx';
import Movies from './page/Movies.jsx';



function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
      </nav>

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
