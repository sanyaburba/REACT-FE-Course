import {render, screen} from '@testing-library/react';
import App from './App'
import userEvent from "@testing-library/user-event";

describe('App Tests', () => {
    test('renders element in the app', () => {
        render(<App/>);
        const searchLink = screen.getByTestId('search-click');
        userEvent.click(searchLink)
        expect(screen.getByTestId('head-page')).toBeInTheDocument()
    })
})
