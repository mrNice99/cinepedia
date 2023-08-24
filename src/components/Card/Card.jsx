import React from "react";
import "./card.scss";

const Card = ({ movie }) => {
  const { title, poster_path } = movie;
  const movieCoverLink = `https://image.tmdb.org/t/p/w500`;

  return (
    <div className="card-movie">
      <img src={`${movieCoverLink}${poster_path}`} alt={`${title} Poster`} />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
