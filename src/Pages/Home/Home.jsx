import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../../helpers/fetchMovies";
import Card from "../../components/Card/Card";
import "../Home/home.scss";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["allMovies"],
    queryFn: fetchMovies,
  });

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
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
