import React from "react";
import { Link } from "react-router-dom";
import "../Card/card.scss";

const Card = ({ movie }) => {
  const { title, poster_path } = movie;
  const movieCoverLink = `http://image.tmdb.org/t/p/w500`;

  return (
    <div className="card-movie">
      <img src={`${movieCoverLink}${poster_path}`} alt={`${title} Poster`} />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
