import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleDetail from '../ArticleDetail';
import { mockArticleDetail } from '../utils/constants';

describe('ArticleDetail Component', () => {
  test('renders the article details correctly', () => {
    const { getByText, getByAltText, getByRole } = render(
      <ArticleDetail selectedArticle={mockArticleDetail} />,
    );

    expect(getByText(/Test Article/i)).toBeInTheDocument();
    expect(getByAltText(/Test Article/i)).toBeInTheDocument();
    expect(getByText(/Test Caption/i)).toBeInTheDocument();
    expect(getByText(/© Test Copyright/i)).toBeInTheDocument();
    expect(getByText(/This is a test abstract for the article./i)).toBeInTheDocument();
    expect(getByText(/By Sami/i)).toBeInTheDocument();
    expect(getByText(/Published on: 6\/14\/2023/i)).toBeInTheDocument();
    expect(getByText(/Keywords: test, article/i)).toBeInTheDocument();
    expect(getByRole('link', { name: /Read more/i })).toHaveAttribute('href', 'https://www.nytimes.com/2024/06/13/world/europe/g7-leaders-weakened.html');
  });

  test('renders correctly without ArticleDetails', () => {
    const withoutArticleDetails = {
      ...mockArticleDetail,
      imageUrl: null,
      imageCaption: null,
      imageCopyright: null,
      des_facet: [],
    };

    const { queryByAltText, queryByText, getByText } = render(
      <ArticleDetail selectedArticle={withoutArticleDetails} />,
    );

    expect(queryByAltText(/Test Article/i)).toBeNull();
    expect(queryByText(/Test Caption/i)).toBeNull();
    expect(queryByText(/© Test Copyright/i)).toBeNull();
    expect(getByText(/Keywords: None/i)).toBeInTheDocument();
  });
});
