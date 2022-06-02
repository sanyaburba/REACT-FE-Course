import React, { useContext } from 'react';
import { LoginPage } from 'components';
import { Navigate } from "react-router-dom";
import { AuthContext } from 'context';

export const RedirectLoginPage = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    return (
        !isAuth ? <LoginPage /> : <Navigate to='/movies' />
    );
};


