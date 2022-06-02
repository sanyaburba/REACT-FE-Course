import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Moviecard,
  ResultFilter,
  ResultSort,
  MovieDetails,
  Head,
} from "components";
import styles from "./Main.module.scss";
import { moviesAPI } from "../../services/MoviesService";
import { useObserver } from "hooks/useObserver";

export const Main = ({
  setPage,
  headRef,
  setMovieId,
  search,
  page,
  setSearch,
  movieId,
  setSuccessActive,
}) => {
  const [filter, setFilter] = useState("");
  const [limit, setLimit] = useState(12);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const lastElement = useRef();

  const {
    data: movies,
    error,
    isLoading,
  } = moviesAPI.useFetchAllMoviesQuery({
    filter,
    search,
    offset,
    limit,
    sort,
    sortOrder,
  });
  const [deleteMovie, {}] = moviesAPI.useDeleteMovieMutation();

  useObserver(lastElement, limit < 4000, isLoading, () => {
    setLimit((prevState) => prevState + 12);
  });

  const handleDeleteMovie = (movie) => {
    deleteMovie(movie);
  };

  console.log(movies);
  console.log(search);

  return (
    <div data-testid="main-page">
      {page === "HEAD" && (
        <Head
          setSearch={setSearch}
          search={search}
          setSuccessActive={setSuccessActive}
        />
      )}
      {page === "DETAILS" && (
        <MovieDetails movieId={movieId} headRef={headRef} setPage={setPage} />
      )}
      <main className={styles.content}>
        <div className={styles.sort}>
          <div className={styles.sorting_row}>
            <ResultFilter setFilter={setFilter} />
            <ResultSort sort={sort} setSort={setSort} />
          </div>
        </div>
        {movies?.data?.length ? (
          <>
            <h2 className={styles.moviesNumber}>
              <strong style={{ marginRight: ".5rem" }}>
                {movies?.totalAmount}
              </strong>
              movies found
            </h2>
            <div className={styles.flex_group}>
              {isLoading && <h1>Loading movies...</h1>}
              {error && <h1>{error}</h1>}
              {movies &&
                movies.data.map((movie) => (
                  <Moviecard
                    handleRemove={handleDeleteMovie}
                    headRef={headRef}
                    setPage={setPage}
                    movie={movie}
                    setMovieId={setMovieId}
                    key={movie.id}
                  />
                ))}
            </div>
          </>
        ) : (
          <div className={styles.noMovie}>
            <p className={styles.noMovieText}>No Movie Found</p>
          </div>
        )}
        <hr ref={lastElement} />
      </main>
    </div>
  );
};
