import {render, screen} from '@testing-library/react';
import ErrorPage from './ErrorPage'
import {MemoryRouter} from "react-router-dom";

describe('ERROR PAGE Tests', () => {
    test('renders element in the app', () => {
        render(
            <MemoryRouter initialEntries={['/asfa']}>
                <ErrorPage/>
            </MemoryRouter>
        );
        expect(screen.getByTestId('errorPage')).toBeInTheDocument()
    })
})
