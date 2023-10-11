import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import { fetchTrailer } from "../../helpers/fetchTrailer";
import "./moviePage.scss";

const apiKey = "b225eac962521eb30923e3ca6aece892";
const apiEndpoint = `https://api.themoviedb.org/3/movie/`;

const MoviePage = () => {
  const { movieId } = useParams();

  const [officialTrailer, setOfficialTrailer] = useState(null);

  const { isLoading, error, data } = useQuery(["movie", movieId], () =>
    axios.get(`${apiEndpoint}${movieId}`, {
      params: {
        api_key: apiKey,
      },
    })
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  useEffect(() => {
    async function fetchMovieTrailer() {
      const trailer = await fetchTrailer(movieId);
      setOfficialTrailer(trailer);
    }

    fetchMovieTrailer();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const movie = data.data;

  return (
    <div className="movie-page">
      <button className="back-button" onClick={() => window.history.back()}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.36004 11.2307L10.67 18.8007C11.28 19.3607 12.27 18.9207 12.27 18.0907V14.4607C12.27 14.1107 12.56 13.8207 12.91 13.8207H28.77C29.43 13.8207 29.96 13.2907 29.96 12.6307V8.42067C29.96 7.76067 29.43 7.23067 28.77 7.23067H12.91C12.56 7.23067 12.27 6.94067 12.27 6.59067V2.96067C12.27 2.13067 11.28 1.69067 10.67 2.25067L2.36004 9.82067C1.94004 10.2007 1.94004 10.8507 2.36004 11.2307Z"
                fill="black"
              />
              <path
                d="M16.33 28.7607L13.79 21.8107C13.63 21.3207 13.17 21.0007 12.66 21.0007C12.15 21.0007 11.69 21.3207 11.54 21.7907L8.96999 28.7707C8.78999 29.2507 9.03999 29.7707 9.51999 29.9507C9.61999 29.9807 9.72999 30.0007 9.83999 30.0007C10.21 30.0007 10.57 29.7707 10.7 29.4007L11.11 28.2707C11.15 28.2807 11.19 28.2807 11.23 28.2807H14.1C14.13 28.2807 14.17 28.2807 14.2 28.2707L14.61 29.3907C14.79 29.8707 15.31 30.1207 15.79 29.9407C16.26 29.7707 16.5 29.2407 16.33 28.7607ZM11.79 26.4407L12.66 24.0607L13.52 26.4407H11.79Z"
                fill="#321B41"
              />
              <path
                d="M8.23 23.7107C8.23 24.2407 8.08 24.7307 7.82 25.1407C8.47 25.6307 8.89 26.4207 8.89 27.2907C8.89 28.6707 7.84 29.8307 6.49 29.9807C6.45 29.9907 6.4 30.0007 6.36 29.9907C6.3 30.0007 6.24 30.0007 6.18 30.0007H2.92C2.41 30.0007 2 29.5907 2 29.0707V21.9107C2 21.4107 2.41 21.0007 2.92 21.0007H5.52C5.62 21.0007 5.71 21.0007 5.79 21.0107C5.82 21.0157 5.8525 21.0207 5.885 21.0257C5.9175 21.0307 5.95 21.0357 5.98 21.0407C7.26 21.2607 8.23 22.3807 8.23 23.7107ZM5.53 22.8407H3.84V24.5807H5.52C6 24.5807 6.4 24.1907 6.4 23.7107C6.4 23.2307 6.01 22.8407 5.53 22.8407ZM3.84 26.4107V28.1507H6.19C6.67 28.1507 7.06 27.7607 7.06 27.2807C7.06 26.8007 6.67 26.4107 6.19 26.4107H3.84Z"
                fill="#321B41"
              />
              <path
                d="M22.6001 28.3507C22.0101 29.3707 20.9201 30.0007 19.7401 30.0007C17.9101 30.0007 16.4301 28.5207 16.4301 26.6907V24.3107C16.4301 22.4807 17.9101 21.0007 19.7401 21.0007C20.9201 21.0007 22.0201 21.6407 22.6101 22.6507C22.8701 23.0907 22.7101 23.6507 22.2801 23.9107C21.8401 24.1707 21.2801 24.0207 21.0201 23.5807C20.7501 23.1307 20.2701 22.8407 19.7401 22.8407C18.9401 22.8407 18.2701 23.5007 18.2701 24.3107V26.6907C18.2701 27.5007 18.9401 28.1607 19.7401 28.1607C20.2701 28.1607 20.7501 27.8807 21.0201 27.4207C21.2801 26.9907 21.8301 26.8307 22.2801 27.0907C22.7001 27.3507 22.8601 27.9107 22.6001 28.3507Z"
                fill="#321B41"
              />
              <path
                d="M27.23 24.8707L29.83 28.5507C30.12 28.9707 30.03 29.5407 29.6 29.8407C29.18 30.1307 28.61 30.0307 28.32 29.6207L25.91 26.2007L25.22 26.8907V29.0907C25.22 29.6007 24.81 30.0107 24.3 30.0107C23.79 30.0107 23.38 29.6007 23.38 29.0907V21.9207C23.38 21.4107 23.79 21.0007 24.3 21.0007C24.81 21.0007 25.22 21.4107 25.22 21.9207V24.2907L28.23 21.2707C28.59 20.9107 29.17 20.9107 29.53 21.2707C29.89 21.6307 29.89 22.2107 29.53 22.5707L27.23 24.8707Z"
                fill="#321B41"
              />
            </svg>
          }
        </svg>
      </button>
      <div className="movie-header">
        <h1 className="movie-title">{movie.title}</h1>
      </div>
      <div className="movie-details">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p className="movie-release-date">
            Release Date: {movie.release_date}
          </p>
        </div>
        <div className="movie-summary">
          <h2>Overview</h2>
          <p className="movie-overview">{movie.overview}</p>
          {officialTrailer && (
            <div className="movie-trailer">
              <iframe
                title="Official Trailer"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${officialTrailer.key}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
      <div className="movie-metadata">
        <div className="metadata-item">
          <h3>Movie Info</h3>
          <p>
            <span className="metadata-label">Original Language:</span>
            {movie.original_language}
          </p>
          <p>
            <span className="metadata-label">Popularity:</span>
            {movie.popularity}
          </p>
          <p>
            <span className="metadata-label">Vote Average:</span>
            {movie.vote_average}
          </p>
          <p>
            <span className="metadata-label">Vote Count:</span>
            {movie.vote_count}
          </p>
        </div>
        <div className="metadata-item">
          <h3>Genres</h3>
          <ul className="movie-genres">
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
