import React from 'react';
import { render, screen } from '@testing-library/react';
import AllCharacters from './AllCharacters';


describe('AllCharacters container', () => {
    it('renders a list of characters to the page', async () => {
        render(<AllCharacters />);

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'characters' });
        expect(ul).not.toBeEmptyDOMElement();
        // expect(ul).toMatchSnapshot();
    })
})
