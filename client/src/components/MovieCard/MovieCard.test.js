import { screen} from "@testing-library/react";
import Moviecard from "./Moviecard";
import userEvent from "@testing-library/user-event";
import {renderWithRouterAndContext} from "../Helpers/renderWithRouterAndContext";
import {MovieMockData} from "../Helpers/MovieMockData";


describe('MovieCard tests', () => {


    test('renders card in the app', () => {
        renderWithRouterAndContext(<Moviecard movie={MovieMockData}/>)
        expect(screen.getByTestId('movieCard')).toBeInTheDocument()
    })
    test('hover popUp', () => {
      renderWithRouterAndContext(<Moviecard movie={MovieMockData}/>)
        const img = screen.getByAltText(/zootopia/i)
        const popUp = screen.getByTestId('popUp')
        userEvent.hover(img)
        expect(popUp).toBeInTheDocument()
    })

})
