import { type Movie } from '../../services/movieService';

import './movieCard.css';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movies__card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movies__image"
      />
      <div className="movies__info">
        <p className="movies__title">{movie.title}</p>
        <p className="movies__date">{movie.release_date}</p>
      </div>
    </div>
  );
};
