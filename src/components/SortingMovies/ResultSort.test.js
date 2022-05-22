import {render, screen} from "@testing-library/react";
import ResultSort from "./ResultSort";
import userEvent from "@testing-library/user-event";

describe('Sorting tests', () => {
    test('renders select in the app', () => {
        render(
            <ResultSort/>
        )
        expect(screen.getByTestId('ResultSort')).toBeInTheDocument()
        expect(screen.getByText(/sort by/i)).toBeInTheDocument()
    })
    test('click on options and change values', () => {
        render(
            <ResultSort setSort={() => {
            }}/>
        )
        userEvent.selectOptions(screen.getByRole('combobox'), "all")
        expect(screen.getByText(/all/i).selected).toBeTruthy();

        userEvent.selectOptions(screen.getByRole('combobox'), "title")
        expect(screen.getByText(/z-a/i).selected).toBeTruthy();
        expect(screen.queryByText(/all/i).selected).toBeFalsy();

        userEvent.selectOptions(screen.getByRole('combobox'), "release_date")
        expect(screen.getByText(/newest/i).selected).toBeTruthy();
        expect(screen.queryByText(/z-a/i).selected).toBeFalsy();
        expect(screen.queryByText(/all/i).selected).toBeFalsy();

    })
})
