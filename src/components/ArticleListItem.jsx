import React from 'react';
import './ArticleListItem.scss';

export default function ArticleListItem({ article }) {
  return (
    <div className='article-container'>
      <img src={article.image_url} alt='' className='article-image' />
      <div className='article-content-container'>
        <h3 className='article-title'>{article.title}</h3>
        <p className='article-preview'>{article.description}</p>
      </div>
    </div>
  );
}
