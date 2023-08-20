import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../helpers/fetchMovies";
import Card from "../../components/Card/Card";
import "../Home/home.scss";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["allMovies"],
    queryFn: fetchMovies,
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredMovies = data.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <header className="header">
        <h1>Welcome to Cinepedia</h1>

        <div className="search-container">
          <span className="search-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 17L22 22M19.5 10.75C19.5 15.5825 15.5825 19.5 10.75 19.5C5.91751 19.5 2 15.5825 2 10.75C2 5.91751 5.91751 2 10.75 2C15.5825 2 19.5 5.91751 19.5 10.75Z"
                stroke="#01b4e4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            className="search"
            type="text"
            placeholder="Title Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            {" "}
            <Card movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
