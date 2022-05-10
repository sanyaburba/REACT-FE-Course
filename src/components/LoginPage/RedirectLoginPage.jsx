import React, {useContext} from 'react';
import LoginPage from "./LoginPage";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../../Context";

const RedirectLoginPage = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        !isAuth ? <LoginPage/> : <Navigate to='/movies'/>
    );
};

export default RedirectLoginPage;
