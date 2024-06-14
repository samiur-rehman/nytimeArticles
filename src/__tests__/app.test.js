import React from 'react';
import axios from 'axios';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { API_URL, mockArticlesList } from '../utils/constants';

jest.mock('axios');

describe('App Component', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({ data: { results: mockArticlesList } });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders the component with articles', async () => {
        render(<App />);

        expect(screen.getByText(/Most Popular Articles/i)).toBeInTheDocument();

        // await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
        // expect(axios.get).toHaveBeenCalledWith(`${API_URL}1.json?api-key=${process.env.API_KEY}`);

        await waitFor(() => {
            expect(screen.getAllByText(/Test Article 1/i)).toHaveLength(1);
            expect(screen.getAllByText(/Test Article 2/i)).toHaveLength(1);
        });
    });

    test('changes articles when button is clicked', async () => {
        render(<App />);

        await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

        const button7days = screen.getByText(/7 Days/i);

        fireEvent.click(button7days);

        await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));
        expect(axios.get).toHaveBeenCalledWith(`${API_URL}7.json?api-key=${process.env.API_KEY}`);
    });

    test('selects an article and displays ArticleDetail', async () => {
        render(<App />);

        await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

        const articles = screen.getAllByText(/Test Article 1/i);
        fireEvent.click(articles[0]);

        await waitFor(() => {
            expect(articles[0].closest('li')).toHaveClass('bg-blue-100 border-l-4 border-blue-400');
            expect(screen.getByText(/Test Article 2/i).closest('li')).toHaveClass('bg-white border-l-4 border-gray-100');
        });
    });
});
