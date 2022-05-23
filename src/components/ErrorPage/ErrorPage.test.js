import {screen} from '@testing-library/react';
import ErrorPage from './ErrorPage'
import {renderWithRouterAndContext} from "../Helpers/renderWithRouterAndContext";

describe('ERROR PAGE Tests', () => {
    test('renders element in the app', () => {
        renderWithRouterAndContext(<ErrorPage/>, '/asfg')

        expect(screen.getByTestId('errorPage')).toBeInTheDocument()
        expect(screen.getByText(/page not found/i)).toBeInTheDocument()
    })
})
