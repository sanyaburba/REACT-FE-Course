import {renderWithRouterAndContext} from "../Helpers/renderWithRouterAndContext";
import { DeleteModal, AddModal } from "components";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe('Add Modal tests', () => {

    test('render modal', async () => {
        renderWithRouterAndContext(<AddModal/>)

        const addModal = await screen.findByTestId('addModal')
        expect(addModal).toBeInTheDocument()
    })

    test('tab options', async () => {
        renderWithRouterAndContext(<AddModal/>)


        const title = await screen.findByPlaceholderText(/your title/i)
        const date = await screen.findByPlaceholderText(/Select Date/i)
        userEvent.tab()
        expect(title).toHaveFocus()
        userEvent.tab()
        expect(date).toHaveFocus()
        expect(title).not.toHaveFocus()
    })

    test('reset button works', async () => {
        renderWithRouterAndContext(<AddModal/>)

        const title = await screen.findByPlaceholderText(/your title/i)
        const resetButton = await screen.findByTestId('resetButton')
        userEvent.type(title, 'hello world')
        expect(title.value).toEqual('hello world')
        userEvent.click(resetButton)
        expect(title.value).toEqual('')
    })
})

describe('Delete Modal tests', () => {

    test('render modal', async () => {
        renderWithRouterAndContext(<DeleteModal/>)

        const deleteModal = await screen.findByTestId('deleteModal')
        expect(screen.getByText(/delete movie/i)).toBeInTheDocument()
        expect(deleteModal).toBeInTheDocument()
    })

})
