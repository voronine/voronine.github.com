import { useState, useEffect } from 'react';
import './News.css';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadNews = () => {
    setIsLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=83d50c851bd8495db4d90bef6106f224&page=${page}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews([...news, ...data.articles]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadNews();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleDelete = (articleId) => {
    const index = news.findIndex((item) => item.articleId === articleId);
    const newNews = [...news];
    newNews.splice(index, 1);
    setNews(newNews);
  };

  if (error) {
    return <div>{error.message}</div>;
  }


  return (
    <div className='news-container'>
      <div className="news-grid">
        {news.map((item) => (
          <div key={item.articleId} className="news-item">
            <img src={item.urlToImage} alt="News" className="news-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noreferrer">{t('news.readMore')}</a>
            <button onClick={() => handleDelete(item.articleId)}>{t('news.delete')}</button>
          </div>
        ))}
      </div>
      {isLoading ? (
        <div>{t('news.loading')}</div>
      ) : (
        <button className='news-button' onClick={handleLoadMore}>{t('news.loadMore')}</button>
      )}
    </div>
  );
};

export default News;