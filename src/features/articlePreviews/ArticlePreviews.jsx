import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAllPreviews,
  selectAllPreviews,
  isLoading,
} from './articlePreviewsSlice';
import ArticleListItem from '../../components/ArticleListItem';
import { loadCurrentArticle } from '../currentArticle/currentArticleSlice';
import { Link } from 'react-router-dom';
import './ArticlePreviews.scss';

const ArticlePreviews = () => {
  const dispatch = useDispatch();
  const articlePreviews = useSelector(selectAllPreviews);
  const isLoadingPreviews = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadAllPreviews());
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (article) => {
    dispatch(loadCurrentArticle(article.uuid));
  };

  const handleLoadMore = () => {
    dispatch(loadAllPreviews());
  };
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    if (documentHeight - (scrollTop + windowHeight) < 50) {
      handleLoadMore();
    }
  };

  return (
    <>
      {isLoadingPreviews ? (
        <div>Loading articles...</div>
      ) : (
        <section className='articles-container'>
          <div className='articles-grid'>
            {articlePreviews.map((article) => (
              <Link
                to={`/article/${article.uuid}`}
                onClick={() => handleClick(article)}
                key={article.uuid}
              >
                <ArticleListItem article={article} />
              </Link>
            ))}
          </div>
          <div className='articles-button-container'>
            <button
              className='articles-button-loadMore'
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default ArticlePreviews;
