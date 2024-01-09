import {render, screen} from '@testing-library/react';
import App from './Investors';
import {BrowserRouter, MemoryRouter} from "react-router-dom";
import Investors from "./Investors";

it("should display investors page", async () => {
    render(<BrowserRouter>
        <Investors/>
    </BrowserRouter>);
    expect(screen.getByText(/Investors/i)).toBeInTheDocument()
});

it("should display investors page table", async () => {
    const {container} = render(<BrowserRouter>
        <Investors/>
    </BrowserRouter>);
    expect(screen.getByText("There are no records to display")).toBeInTheDocument()
});