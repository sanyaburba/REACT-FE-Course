import {useEffect, useRef, useState} from "react";
import './App.css';
import {AuthContext} from "./Context";

import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import SuccessAdd from "./components/Modals/SuccessAddModal";
import AppRouter from "./components/Router/AppRouter";

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
                <div className='App'>
                    <AppRouter isAuth={isAuth}
                               search={search}
                               page={page}
                               movieId={movieId}
                               setSearch={setSearch}
                               setSuccessActive={setSuccessActive}
                               setPage={setPage}
                               setMovieId={setMovieId}
                               headRef={headRef}
                    />
                    <SuccessAdd
                        active={successActive}
                        setActive={setSuccessActive}
                    />
                    <Footer/>
                </div>
            </AuthContext.Provider>
        </ErrorBoundary>
    );
}

export default App;
