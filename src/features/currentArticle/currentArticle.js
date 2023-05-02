import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectCurrentArticle,
  isLoadingCurrentArticle,
} from './currentArticleSlice';
import FullArticle from '../../components/FullArticle';

const CurrentArticle = () => {
  const { id } = useParams();
  const article = useSelector(selectCurrentArticle);
  const isLoading = useSelector(isLoadingCurrentArticle);

  if (isLoading || article === undefined) {
    return <p>Loading...</p>;
  }

  return <FullArticle article={article} />;
};

export default CurrentArticle;
