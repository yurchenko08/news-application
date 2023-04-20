import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAllPreviews,
  selectAllPreviews,
  isLoading,
} from './articlePreviewsSlice';
import ArticleListItem from '../../components/ArticleListItem';
import './ArticlePreviews.scss';

const ArticlePreviews = () => {
  const dispatch = useDispatch();
  const articlePreviews = useSelector(selectAllPreviews);
  const isLoadingPreviews = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadAllPreviews());
    console.log(articlePreviews);
  }, [dispatch]);

  return (
    <>
      {isLoadingPreviews ? (
        <div>loading state</div>
      ) : (
        <section className='articles-container'>
          <div className='section-title'>All Articles</div>
          {articlePreviews.map((article) => (
            <div key={article.id}>
              <ArticleListItem article={article} />
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default ArticlePreviews;
