import {useEffect, useRef, useState} from "react";
import {BrowserRouter, Route, Routes, Navigate,} from "react-router-dom";
import './App.css';
import {AuthContext} from "./Context";

import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SuccessAdd from "./components/Modals/SuccessAddModal";
import RedirectLoginPage from "./components/LoginPage/RedirectLoginPage";

function App() {

    const [page, setPage] = useState('HEAD')
    const [movieId, setMovieId] = useState(null)
    const [successActive, setSuccessActive] = useState(false)
    const [search, setSearch] = useState('');
    const [isAuth, setIsAuth] = useState(false);

    const headRef = useRef(null);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])

    return (
        <ErrorBoundary>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth
            }}>
                <BrowserRouter>
                    <div className='App'>
                        <Routes>
                            <Route path='/login' element={<RedirectLoginPage/>}/>
                            <Route path='/' element={<Navigate to='/movies'/>}/>
                            {isAuth ? <Route path='/movies' element={
                                    <Main search={search}
                                          page={page}
                                          movieId={movieId}
                                          setSearch={setSearch}
                                          setSuccessActive={setSuccessActive}
                                          setPage={setPage}
                                          setMovieId={setMovieId}
                                          headRef={headRef}/>}/>
                                : <Route path={'/movies'} element={<Navigate to={'/login'}/>}/>}
                            <Route path='*' element={<ErrorPage/>}/>
                        </Routes>
                        <SuccessAdd active={successActive} setActive={setSuccessActive}/>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </AuthContext.Provider>
        </ErrorBoundary>
    );
}

export default App;
