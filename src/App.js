import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleDetail from './ArticleDetail';
import { API_URL, timeFrame } from './utils/constants';


const App = () => {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [selectedTimeframe, setSelectedTimeframe] = useState('1');

    const fetchArticles = async (noDays) => {
        const cookUrl = `${API_URL}${noDays}.json?api-key=${process.env.API_KEY}`
        try {
            const response = await axios.get(cookUrl);
            const articlesData = response.data.results.map((article) => {
                const { media } = article;
                const imageUrl = media?.[0]?.['media-metadata']?.[2]?.url;
                const imageCaption = media?.[0]?.caption;
                const imageCopyright = media?.[0]?.copyright;
                return { ...article, imageUrl, imageCaption, imageCopyright };
            });
            setArticles(articlesData);
        } catch (error) {
            // console.error(error);
        }
    };

    useEffect(() => {
        fetchArticles(selectedTimeframe);
    }, [selectedTimeframe]);

    return (
        <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">Most Popular Articles</h1>
                <div className="flex space-x-4">
                    {timeFrame.map((button) => (
                        <button
                            key={button.noDays}
                            className={`px-4 py-2 rounded ${selectedTimeframe === button.noDays
                                ? 'bg-blue-400 text-white'
                                : 'bg-gray-200'
                                }`}
                            onClick={() => {
                                setSelectedTimeframe(button.noDays);
                                setSelectedArticle(null);
                            }}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-1 flex-col md:flex-row md:space-x-4 overflow-hidden">
                <div className="w-full md:w-1/3 flex-shrink-0 overflow-y-auto h-full">
                    <ul className="space-y-4">
                        {articles.map((article) => (
                            <li
                                key={article.id}
                                className={`p-4 rounded shadow cursor-pointer ${selectedArticle && selectedArticle.id === article.id
                                    ? 'bg-blue-100 border-l-4 border-blue-400'
                                    : 'bg-white border-l-4 border-gray-100'
                                    }`}
                                onClick={() => setSelectedArticle(article)}
                            >
                                <p
                                    className="text-xl">
                                    {article.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                {selectedArticle && (
                    <ArticleDetail selectedArticle={selectedArticle} />
                )}
            </div>
        </div>
    );
};

export default App;
