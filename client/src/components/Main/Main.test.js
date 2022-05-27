import Main from "./Main";
import { screen} from "@testing-library/react";
import {renderWithRouterAndContext} from "../Helpers/renderWithRouterAndContext";

global.IntersectionObserver = class IntersectionObserver {
    constructor() {
    }

    observe() {
        return null;
    }

    disconnect() {
        return null;
    };

    unobserve() {
        return null;
    }
};

describe('main page tests', () => {
    test('render a Main component', () => {
        renderWithRouterAndContext(<Main/>, '/movies')
        expect(screen.getByTestId('main-page')).toBeInTheDocument()

    })

    test('rendering movies', async () => {
        renderWithRouterAndContext(<Main/>, '/movies')

        const movies = await screen.findAllByTestId('movieCard')
        expect(movies).toHaveLength(12)

    })

})
