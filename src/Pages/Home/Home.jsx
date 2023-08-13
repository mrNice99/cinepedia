import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../../helpers/fetchMovies";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["allMovies"],
    queryFn: fetchMovies,
  });

  return <div className="home">home</div>;
};

export default Home;
