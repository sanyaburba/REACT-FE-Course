import {screen} from "@testing-library/react";
import {renderWithRouterAndContext} from "../Helpers/renderWithRouterAndContext";
import PopUp from "./PopUp";
import {MovieMockData} from "../Helpers/MovieMockData";
import Moviecard from "../MovieCard/Moviecard";
import userEvent from "@testing-library/user-event";

describe('PopUp tests', () => {
    test('Render popUp', () => {
        renderWithRouterAndContext(<PopUp movie={MovieMockData}/>)

        expect(screen.getByTestId('popUp')).toBeInTheDocument()
    })
    test('edit modal after click on edit button', () => {
        renderWithRouterAndContext(<Moviecard movie={MovieMockData}/>)

        const popUp = screen.getByTestId('popUp')
        const editButton = screen.getByTestId('editButton')
        userEvent.click(popUp)
        expect(editButton).toBeInTheDocument()
        userEvent.click(editButton)
        expect(screen.getByTestId('editModal')).toBeInTheDocument()
    })
    test('delete modal after click on delete button', () => {
        renderWithRouterAndContext(<Moviecard movie={MovieMockData}/>)

        const popUp = screen.getByTestId('popUp')
        const deleteButton = screen.getByTestId('deleteButton')
        userEvent.click(popUp)
        expect(deleteButton).toBeInTheDocument()
        userEvent.click(deleteButton)
        expect(screen.getByTestId('deleteModal')).toBeInTheDocument()
    })
    test('close button', () => {
        renderWithRouterAndContext(<Moviecard movie={MovieMockData}/>)
        expect(screen.getByTestId('closeButton')).toBeInTheDocument()
    })
})
