import {screen} from "@testing-library/react";
import {renderWithRouterAndContext} from "../Helpers/renderWithRouterAndContext";
import MovieDetails from "./MovieDetails";
import {MovieMockData} from "../Helpers/MovieMockData";


describe('Moviedetails tests', () => {
    test('Render MovieDetails', () => {
        renderWithRouterAndContext(<MovieDetails/>)

        expect(screen.getByTestId('MovieDetails')).toBeInTheDocument()
    })

    test('get data from server and display it', async () => {
        renderWithRouterAndContext(<MovieDetails movieId={MovieMockData.id}/>)

        const movieTitle = await screen.findByText('Zootopia')
        const runtime = await screen.findByText(/108/i)

        expect(movieTitle).toBeInTheDocument()
        expect(runtime).toBeInTheDocument()
    })

    test('search button render', async () => {
        renderWithRouterAndContext(<MovieDetails movieId={MovieMockData.id}/>)

        const searchButton = await screen.findByTestId('searchButton')
        expect(searchButton).toBeInTheDocument()

    })
})
