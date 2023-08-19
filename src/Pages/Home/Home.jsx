import React, { useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="home">
      <h1>Welcome to Cinepedia</h1>
      <div className="movie-list">
        {data.map((movie) => (
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
