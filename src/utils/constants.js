export const API_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/';

export const timeFrame = [
  { noDays: '1', label: "Today's Articles" },
  { noDays: '7', label: 'Last 7 Days Articles' },
  { noDays: '30', label: 'Last 30 Days Articles' },
];

export const mockArticlesList = [
  {
    id: 1,
    title: 'Test Article 1',
    media: [
      {
        'media-metadata': [{}, {}, { url: 'image1.jpg' }],
        caption: 'Caption 1',
        copyright: 'Copyright 1',
      },
    ],
  },
  {
    id: 2,
    title: 'Test Article 2',
    media: [
      {
        'media-metadata': [{}, {}, { url: 'image2.jpg' }],
        caption: 'Caption 2',
        copyright: 'Copyright 2',
      },
    ],
  },
];

export const mockArticleDetail = {
  title: 'Test Article',
  imageUrl:
        'https://static01.nyt.com/images/2024/06/13/multimedia/13g7-leaders-home-fvgm/13g7-leaders-home-fvgm-superJumbo.jpg?quality=75&auto=webp',
  imageCaption: 'Test Caption',
  imageCopyright: 'Test Copyright',
  abstract: 'This is a test abstract for the article.',
  byline: 'By Sami',
  published_date: '2023-06-14',
  des_facet: ['test', 'article'],
  url: 'https://www.nytimes.com/2024/06/13/world/europe/g7-leaders-weakened.html',
};
