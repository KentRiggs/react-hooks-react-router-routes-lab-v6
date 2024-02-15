import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Home from "./Home";

function Movie() {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${params.id}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch((error) => console.error(error));
  }, [params.id]);

  if (!movie) {
    return <div>Loading...</div>
  }

  return (
    <>
      <header>
        <Home />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        <div>
        Genres:{""}
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie
