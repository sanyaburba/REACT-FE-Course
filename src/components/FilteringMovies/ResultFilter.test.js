import {render, screen} from "@testing-library/react";
import ResultFilter from "./ResultFilter";

describe('Filtering tests', () => {
    test('renders list in the app', () => {
        render(<ResultFilter/>)
        expect(screen.getByTestId('ResultFilter')).toBeInTheDocument()
        expect(screen.getByText(/all/i)).toBeInTheDocument()
    })
})
