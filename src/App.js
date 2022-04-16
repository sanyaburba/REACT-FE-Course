import './App.css';
import Head from "./components/Head/Head";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {useRef, useState} from "react";
import SuccessAdd from "./components/modals/SuccessAdd";
import LoginPage from "./components/LoginPage/LoginPage";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

function App() {

    const [page, setPage] = useState('HEAD')
    const [movieId, setMovieId] = useState(null)
    const [successActive, setSuccessActive] = useState(false)

    const headRef = useRef(null);

    return (
        // <ErrorBoundary>
            <BrowserRouter>
                <div className='App'>
                    {page === 'HEAD' && <Head setSuccessActive={setSuccessActive}/>}
                    {page === 'DETAILS' && <MovieDetails movieId={movieId} headRef={headRef} setPage={setPage}/>}
                    <Routes>
                        <Route path='/' element={<Navigate to='/movies'/>}/>
                        <Route path='/movies' element={<Main setPage={setPage} setMovieId={setMovieId} headRef={headRef}/>}/>
                        <Route path='/error' element={<ErrorPage/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                    </Routes>
                    <SuccessAdd active={successActive} setActive={setSuccessActive}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        // </ErrorBoundary>
    );
}

export default App;
