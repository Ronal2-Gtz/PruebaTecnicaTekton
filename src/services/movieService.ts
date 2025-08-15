import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import movieApi from '../api/movieApi';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const useGetPopularMovies = (
  page: number = 1
): UseQueryResult<MovieResponse, Error> => {
  return useQuery({
    queryKey: ['getPopularMovies', page],
    queryFn: async () => {
      const { data } = await movieApi.get<MovieResponse>('/movie/popular', {
        params: {
          page,
          language: 'es-ES',
        },
      });
      return data;
    },
  });
};
