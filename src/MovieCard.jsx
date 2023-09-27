import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <figure className="">
        <div className="content w-[95%] m-auto mt-4">
          <img
            className="w-[600px] h-[250px]"
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt="movie.Title"
          />
          <figcaption className="bg-black h-[150px] py-2 px-4 flex flex-col items-start">
            <div className="flex gap-2">
              <span>{movie.Year}</span>
              <span>{movie.Type}</span>
            </div>
            <h3 className="flex justify-start">{movie.Title}</h3>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};
export default MovieCard;
