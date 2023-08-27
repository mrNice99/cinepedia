//other
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
//helper
import { fetchMovies } from "../../helpers/fetchMovies";
//components
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
//style
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
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredMovies = data.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <header className="header" id="mainHeader">
        <h1>Welcome to Cinepedia</h1>
        <Search search={search} setSearch={setSearch} />
      </header>

      <div className="movie-list" id="movieList">
        {filteredMovies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <Card movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
