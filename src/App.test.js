import {render, screen} from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";

test('landing on an existing page', () => {
    const rootRoute = '/'
    render(
        <MemoryRouter initialEntries={[rootRoute]}>
            <App/>
        </MemoryRouter>,
    )
    expect(screen.getByText(/Investors/)).toBeInTheDocument()
})

test('landing on a bad page', () => {
    const badRoute = '/some/bad/route'

    render(
        <MemoryRouter initialEntries={[badRoute]}>
            <App/>
        </MemoryRouter>,
    )
    expect(screen.getByText(/no match/i)).toBeInTheDocument()
})