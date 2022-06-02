import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Main, ErrorPage, RedirectLoginPage } from 'components';

export const AppRouter = ({ isAuth, search, page, movieId, setSearch, setSuccessActive, setPage, setMovieId, headRef }) => {
    return (
        <Routes>
            <Route path='/login' element={<RedirectLoginPage />} />
            <Route path='/' element={<Navigate to='/movies' />} />
            {isAuth ? <Route path='/movies' element={
                <Main search={search}
                    page={page}
                    movieId={movieId}
                    setSearch={setSearch}
                    setSuccessActive={setSuccessActive}
                    setPage={setPage}
                    setMovieId={setMovieId}
                    headRef={headRef} />} />
                : <Route path={'/movies'} element={<Navigate to={'/login'} />} />}
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    );
};

