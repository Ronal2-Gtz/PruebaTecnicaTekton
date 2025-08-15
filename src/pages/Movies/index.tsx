import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import {
  useGetPopularMovies,
  useSearchMovies,
} from '../../services/movieService';
import {
  ErrorPage,
  Loading,
  MovieCard,
  Navbar,
  Paginator,
} from '../../components';

import './movies.css';
import { useForm } from '../../hooks/useForm';

interface searchMovieFilterFields {
  querySerchMovie: string;
}

const searchMovieFilters: searchMovieFilterFields = {
  querySerchMovie: '',
};

const Movies: React.FC = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const { querySerchMovie, onInputChange } = useForm(searchMovieFilters);
  const {
    data,
    isLoading: popularLoading,
    isError,
  } = useGetPopularMovies(page);
  const {
    data: searchData,
    isLoading: searchLoading,
    isError: searchError,
  } = useSearchMovies(query, page);

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery(querySerchMovie);
    setPage(1);
  };

  const showResults = searchData ?? data;
  const totalPages = searchData?.total_pages ?? data?.total_pages;
  const isLoading = popularLoading || searchLoading;

  return (
    <div className="movies">
      <div className="movies__search">
        <Navbar />
        <div className="movies__search-box">
          <form onSubmit={onSearchSubmit} className="movies__search-form">
            <input
              type="text"
              id="querySerchMovie"
              name="querySerchMovie"
              value={querySerchMovie}
              onChange={onInputChange}
              placeholder="Buscar película"
              className="movies__search-input"
            />
            <button type="submit" className="movies__search-button">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
      </div>
      {isError || searchError ? (
        <ErrorPage />
      ) : (
        <>
          <div className="movies__grid">
            {showResults?.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          {totalPages !== 1 && (
            <Paginator
              currentPage={page}
              totalPages={totalPages ?? 1}
              onPrev={() => setPage((p) => Math.max(1, p - 1))}
              onNext={() => setPage((p) => p + 1)}
            />
          )}
        </>
      )}
      {isLoading ? <Loading /> : null}
    </div>
  );
};

export default Movies;
