import React from 'react';
import Header from '.';
import { render, screen } from '@testing-library/react';

describe('<Header />', () => {
    it('should render heading', () => {
        const { container } = render(<Header />);
        expect(
            screen.getByRole('heading', { name: /exotic/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
