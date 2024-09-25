import React from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => (
  <ul className="movies-list">
    {movies.map((movie) => (
      <MovieItem key={movie.id} movie={movie} />
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;