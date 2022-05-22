import {MemoryRouter} from "react-router-dom";
import AppRouter from "../Router/AppRouter";
import {AuthContext} from "../../Context";
import {setupStore} from "../../Redux/store";
import {Provider} from "react-redux";

export const renderWithRouterAndContext = (component, initialRoute ='/') => {
    const store = setupStore()
    return (
        <Provider store={store}>
        <MemoryRouter initialEntries={[initialRoute]}>
            <AuthContext.Provider value={{
                isAuth: true,
                setIsAuth: () => {
                }
            }}>
                {component}
            </AuthContext.Provider>

        </MemoryRouter>
            </Provider>
    )
}
