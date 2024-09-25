import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchPopularMovies } from './api/tmdb';
import MoviesList from './components/MoviesList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMovies = async () => {
    try {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return <div className="loader">Loading movies...</div>;
  }

  if (error) {
    return <div className="error">Failed to load movies. Please try again later.</div>;
  }

  return (
    <div className="app-container">
      <h1>Popular Movies</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default App;
