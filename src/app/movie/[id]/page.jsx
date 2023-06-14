import Image from "next/image";
import React from "react";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  );
  return await res.json();
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/loading.svg"
          alt={movie.title}
          className="rounded-lg shadow-md"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="p-2">
          <h2 className="text-3xl font-bold mt-4 md:mt-0">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3 pt-5">
            <span className="font-semibold mr-2">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="mr-2 font-semibold">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="mr-2 font-semibold">Raiting:</span>
            {movie.vote_average || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
