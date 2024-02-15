import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(r => r.json())
    .then(data => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <ul>
           {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>  
        ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
