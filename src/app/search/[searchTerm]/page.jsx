import Results from "@/components/Results";
import React from "react";

export default async function SearchPage({ params }) {
  console.log(params);
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&page=1&include_adult=false`
  );
  console.log(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&page=1&include_adult=false`
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 ? (
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold mt-4 md:mt-0">No results found</h1>
        </div>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
}
