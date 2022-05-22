import {render, screen} from "@testing-library/react";
import Footer from "./Footer";

describe('Footer tests', () => {
    test('renders footer in the app', () => {
        render(<Footer/>)
        expect(screen.getByTestId('footer')).toBeInTheDocument()
        expect(screen.getByAltText('footerImg')).toBeInTheDocument()
    })
})
