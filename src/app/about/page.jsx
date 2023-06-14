import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-medium text-amber-600">About</h1>
      <p className="mt-3">
        Welcome to our IMDb clone, a movie and TV show database built with
        Next.js and styled with Tailwind CSS! Our app aims to provide a
        user-friendly platform for exploring and discovering a vast collection
        of films, television series, actors, and more. With our IMDb clone, you
        can browse through a comprehensive library of movies and TV shows,
        search for specific titles, and access detailed information about each
        entry. Get access to ratings, reviews, cast and crew information,
        trailers, and other key details that will help you make informed
        decisions about what to watch next.{" "}
        <p className="mt-3">
          We've implemented a clean and intuitive user interface, leveraging the
          power of Next.js for seamless navigation and dynamic rendering. The
          application's responsiveness and performance are enhanced through the
          use of Tailwind CSS, a utility-first CSS framework that allows for
          rapid development and easy customization. Our IMDb clone is a
          collaborative effort by a team of passionate developers, committed to
          delivering a high-quality movie and TV show discovery experience. We
          strive to keep the app up-to-date, continuously adding new content and
          features to enhance your browsing and exploration.{" "}
        </p>
        <p className="mt-3">
          We hope you enjoy using our IMDb clone and find it a valuable resource
          for exploring your favorite movies and TV shows, as well as
          discovering new ones. Feel free to provide feedback or suggestions to
          help us improve and make your experience even better. Happy exploring
          and happy watching!
        </p>
      </p>
    </div>
  );
}
