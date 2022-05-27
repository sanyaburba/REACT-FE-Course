import {render, screen} from "@testing-library/react";
import Head from "./Head";
import {Provider} from "react-redux";
import {setupStore} from "../../Redux/store";
import {renderWithRouterAndContext} from "../Helpers/renderWithRouterAndContext";
import userEvent from "@testing-library/user-event";
import AppRouter from "../Router/AppRouter";
import {MemoryRouter} from "react-router-dom";
import {AuthContext} from "../../Context";


describe('Head tests', () => {
    test('renders head in the app', () => {
       renderWithRouterAndContext(<Head/>);

        expect(screen.getByTestId('head-page')).toBeInTheDocument()
    })
    test('render modal after click', () => {
        renderWithRouterAndContext(<Head/>);

        const addMovieButton = screen.getByTestId('addButton')
        userEvent.click(addMovieButton)
        expect(screen.getByTestId('addModal')).toBeInTheDocument()
    })
    test('render login page after click on quit', () => {

        const store = setupStore()
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <AuthContext.Provider value={{
                        isAuth: false,
                        setIsAuth: () => {
                        }
                    }}>
                        <AppRouter/>
                        <Head />
                    </AuthContext.Provider>

                </MemoryRouter>
            </Provider>
    )

        const quitButton = screen.getByTestId('quitButton')
        userEvent.click(quitButton)
        expect(screen.getByTestId('loginPage')).toBeInTheDocument()
    })
})
