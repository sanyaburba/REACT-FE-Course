import {render, screen} from '@testing-library/react';
import LoginPage from './LoginPage'
import {MemoryRouter} from "react-router-dom";
import {AuthContext} from "../../Context";

describe('Login PAGE Tests', () => {
    test('renders element in the app', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={{
                    isAuth: false,
                    setIsAuth: ()=> {}
                }}>
                <LoginPage />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getByTestId('loginPage')).toBeInTheDocument()
    })
})
