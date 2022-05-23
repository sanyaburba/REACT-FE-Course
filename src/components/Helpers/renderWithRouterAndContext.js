import {MemoryRouter} from "react-router-dom";
import {AuthContext} from "../../Context";
import {setupStore} from "../../Redux/store";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";

export const renderWithRouterAndContext = (component, initialRoute ='/') => {
    const store = setupStore()
    return render(
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
