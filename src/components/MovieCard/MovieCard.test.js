import {render, screen} from "@testing-library/react";
import Moviecard from "./Moviecard";
import userEvent from "@testing-library/user-event";
import {renderWithRouterAndContext} from "../Helpers/renderWithRouterAndContext";


const movie = {
    budget: 150000000,
    genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
    id: 269149,
    overview: "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    poster_path: "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
    release_date: "2016-02-11",
    revenue: 1023784195,
    runtime: 108,
    tagline: "Welcome to the urban jungle.",
    title: "Zootopia",
    vote_average: 7.7,
    vote_count: 6795
}

describe('MovieCard tests', () => {


    test('renders card in the app', () => {
        render(renderWithRouterAndContext(<Moviecard movie={movie}/>))
        expect(screen.getByTestId('movieCard')).toBeInTheDocument()
    })
    test('hover popUp', () => {
        render(renderWithRouterAndContext(<Moviecard movie={movie}/>))
        const img = screen.getByAltText(/zootopia/i)
        const popUp = screen.getByTestId('popUp')
        userEvent.hover(img)
        expect(popUp).toBeInTheDocument()

    })
    test('modals after click on popUp', () => {
        render(renderWithRouterAndContext(<Moviecard movie={movie}/>))

        const popUp = screen.getByTestId('popUp')
        const editButton = screen.getByTestId('editButton')
        const deleteButton = screen.getByTestId('deleteButton')
        userEvent.click(popUp)
        expect(editButton).toBeInTheDocument()
        expect(deleteButton).toBeInTheDocument()
        userEvent.click(editButton)
        expect(screen.getByTestId('editModal')).toBeInTheDocument()
        userEvent.click(deleteButton)
        expect(screen.getByTestId('deleteModal')).toBeInTheDocument()
    })

})
