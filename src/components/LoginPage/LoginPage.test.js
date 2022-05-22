import {render, screen} from '@testing-library/react';
import LoginPage from './LoginPage'
import userEvent from "@testing-library/user-event";
import {renderWithRouterAndContext} from "../Helpers/renderWithRouterAndContext";


describe('Login PAGE Tests', () => {
    test('renders element in the app', () => {
        render(renderWithRouterAndContext(<LoginPage/>, '/login'));
        expect(screen.getByTestId('loginPage')).toBeInTheDocument()
    })
    test('focus on fields and buttons', () => {
        render(renderWithRouterAndContext(<LoginPage/>, '/login'));


        const emailField = screen.getByPlaceholderText(/Enter your email/i)
        const passwordField = screen.getByPlaceholderText(/password/i)
        const resetButton = screen.getByText(/reset/i)
        const logInButton = screen.getByTestId('logInButton')
        const showPasswordButton = screen.getByTestId('showPassword')

        userEvent.tab()
        expect(emailField).toHaveFocus()
        userEvent.tab()
        expect(passwordField).toHaveFocus()
        userEvent.tab()
        expect(showPasswordButton).toHaveFocus()
        userEvent.tab()
        expect(resetButton).toHaveFocus()
        userEvent.tab()

        expect(logInButton).toHaveFocus()
    })
})
