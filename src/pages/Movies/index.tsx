import { useState } from 'react';

import { useGetPopularMovies } from '../../services/movieService';
import { Loading, MovieCard, Navbar, Paginator } from '../../components';

import './movies.css';

const Movies: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetPopularMovies(page);

  return (
    <div className="movies">
      <div className="movies__search">
        <Navbar />
        <input type="text" placeholder="Buscar por nombre de película" />
      </div>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p>Hubo un error al cargar las películas.</p>
      ) : (
        <div className="movies__grid">
          {data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      <Paginator
        currentPage={page}
        totalPages={data?.total_pages ?? 1}
        onPrev={() => setPage((p) => Math.max(1, p - 1))}
        onNext={() => setPage((p) => p + 1)}
      />
    </div>
  );
};

export default Movies;
