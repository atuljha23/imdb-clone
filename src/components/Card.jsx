import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default function Card({ result }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt={result.title}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/loading.svg"
          style={{ maxWidth: "100%", height: "auto" }}
        ></Image>
        <h2 className="mt-2 truncate text-lg font-bold">
          {result.title || result.name}
        </h2>
        <p className="line-clamp-3 mt-2">{result.overview}</p>
        <p className="mt-2 flex">
          {result.release_date || result.first_air_date}
          <BsFillHandThumbsUpFill className="text-amber-600 h-5 mr-1 ml-3" />
          {result.vote_count}
        </p>
      </Link>
    </div>
  );
}
