import React from 'react';
import './ArticleListItem.scss';

export default function ArticleListItem({ article }) {
  return (
    <button key={article.id} className='article-container'>
      <img src={article.urlToImage} alt='' className='article-image' />
      <div className='article-content-container'>
        <h3 className='article-title'>{article.author}</h3>
        <p className='article-preview'>{article.content}</p>
      </div>
    </button>
  );
}
