import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import mockDetailData from '../../fixtures/detail.json';
import DetailCharacter from './DetailCharacter';

const server = setupServer(
    rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68d1', (req, res, ctx) => {
        return res(ctx.json(mockDetailData));
    })
);


describe('DetailCharacter container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('fetches a character detail', async () => {
        render(
            <MemoryRouter>
                <DetailCharacter match={{
                    params: {
                        "id": "5cf5679a915ecad153ab68d1"
                    }
                }}/>
            </MemoryRouter>
        );
        screen.getByText('Loading...');

        // const detail = await screen.findByRole('div', { name: 'detail' });
        // expect(detail).not.toBeEmptyDOMElement();
        // expect(detail).toMatchSnapshot();

        return waitFor(() => {
            screen.getByAltText('Analay')
            screen.getByText('Unnamed team', { exact: false})
        });
    })
    
})
