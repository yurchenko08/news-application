import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAllPreviews,
  selectAllPreviews,
  isLoading,
} from './articlePreviewsSlice';
import ArticleListItem from '../../components/ArticleListItem';
import './ArticlePreviews.scss';
import { loadCurrentArticle } from '../currentArticle/currentArticleSlice';
import { Link } from 'react-router-dom';
const ArticlePreviews = () => {
  const dispatch = useDispatch();
  const articlePreviews = useSelector(selectAllPreviews);
  const isLoadingPreviews = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadAllPreviews());
  }, []);

  const handleClick = (article) => {
    dispatch(loadCurrentArticle(article.uuid));
  };

  return (
    <>
      {isLoadingPreviews ? (
        <div>Loading articles...</div>
      ) : (
        <section className='articles-container'>
          <div className='section-title'>All Articles</div>
          {articlePreviews.map((article) => (
            <Link
              to={`/article/${article.uuid}`}
              onClick={() => handleClick(article)}
              key={article.uuid}
            >
              <ArticleListItem article={article} />
            </Link>
          ))}
        </section>
      )}
    </>
  );
};
export default ArticlePreviews;
