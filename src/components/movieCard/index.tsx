import { type Movie } from '../../services/movieService';
import Not_icon from '../../assets/not_Image.webp';

import './movieCard.css';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const IMG_PATH = movie.poster_path
    ? `${import.meta.env.VITE_PATH_IMG}${movie.poster_path}`
    : Not_icon;

  return (
    <div className="movies__card">
      <img
        src={IMG_PATH}
        alt={movie.title}
        className="movies__image"
        loading="lazy"
      />
      <div className="movies__card-info">
        <p className="movies__card-title">{movie.title}</p>
        <p className="movies__card-date">{movie.release_date}</p>
      </div>
    </div>
  );
};
