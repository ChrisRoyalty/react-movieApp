import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2df7ce7a";
const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // document.getElementById("data").innerHTML = data;
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div>
      <div id="data"></div>
      <h1 class="text-4xl font-bold bg-gradient-to-r from-slate-50 via-slate-400 to-slate-900 inline-block text-transparent bg-clip-text mt-10">
        MovieLand
      </h1>

      <div className="search w-full flex justify-center">
        <div className="max-md:w-[90%] md:w-[70%] lg:w-[40%] h-[50px] mt-[50px] bg-gray-950 px-4 shadow-lg rounded-[30px] text-slate-200 flex justify-between items-center">
          <input
            className="outline-none border-none bg-transparent"
            type="text"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch
            className="text-[22px] text-gray-400"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="container w-[80%] m-auto h-fit grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-white gap-4">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
