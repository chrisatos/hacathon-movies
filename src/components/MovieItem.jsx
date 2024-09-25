import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => (
  <li className="movie-item">
    <img
      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      alt={`${movie.title} Poster`}
      className="movie-poster"
    />
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
    </div>
  </li>
);

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;