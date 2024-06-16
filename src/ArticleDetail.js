import React from 'react';
import PropTypes from 'prop-types';

function ArticleDetail({ selectedArticle }) {
  return (
    <div className="w-full bg-white p-4 rounded shadow flex-shrink-0 overflow-y-auto h-full">
      <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
      {selectedArticle.imageUrl && (
        <div className="mb-4 max-w-[450px]">
          <img
            src={selectedArticle.imageUrl}
            alt={selectedArticle.title}
            className="mb-2 rounded"
          />
          {selectedArticle.imageCaption && (
            <p className="text-sm text-gray-600 px-2">
              {selectedArticle.imageCaption}
            </p>
          )}
          {selectedArticle.imageCopyright && (
            <p className="text-xs text-gray-500 px-2">
              ©
              {' '}
              {selectedArticle.imageCopyright}
            </p>
          )}
        </div>
      )}
      <p className="text-lg mb-4">{selectedArticle.abstract}</p>
      <p className="text-sm text-gray-600 mb-2">{selectedArticle.byline}</p>
      <p className="text-sm text-gray-600 mb-2">
        Published on:
        {' '}
        {new Date(selectedArticle.published_date).toLocaleDateString()}
      </p>
      <div className="text-sm text-gray-600 mb-4">
        Keywords:
        {' '}
        {selectedArticle.des_facet && selectedArticle.des_facet.length > 0
          ? selectedArticle.des_facet.join(', ')
          : 'None'}
      </div>
      <a
        href={selectedArticle.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read more
      </a>
    </div>
  );
}

ArticleDetail.propTypes = {
  selectedArticle: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    imageCaption: PropTypes.string,
    imageCopyright: PropTypes.string,
    abstract: PropTypes.string,
    byline: PropTypes.string,
    published_date: PropTypes.string,
    des_facet: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
  }),
};

export default ArticleDetail;
