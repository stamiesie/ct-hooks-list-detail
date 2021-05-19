import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockCharacterData from '../../fixtures/characters.json';
import AllCharacters from './AllCharacters';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
    rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
        return res(ctx.json(mockCharacterData));
    })
);

describe('AllCharacters container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('renders a list of characters to the page', async () => {
        render(
            <MemoryRouter>
                <AllCharacters />
            </MemoryRouter>
        );

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'characters' });
        expect(ul).not.toBeEmptyDOMElement();
        expect(ul).toMatchSnapshot();

        return waitFor(() => {
            screen.getByText('Analay', { exact: false })
        })
    });

   

})
