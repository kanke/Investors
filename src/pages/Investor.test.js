import {render, screen} from '@testing-library/react';
import Investor from "./Investor";

test('should display investor details page', async () => {
    render(<Investor />);

    const linkElement = screen.getByText(/Investor Details/i);
    expect(linkElement).toBeInTheDocument();
})
