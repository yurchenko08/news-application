import { Link } from 'react-router-dom';
import './FullArticle.scss';
export default function FullArticle({ article }) {
  return (
    <>
      <div className='current-article-container'>
        <h3 className='current-article-title'>{article.title}</h3>
        <div className='article-full-image-container'>
          <img src={article.image_url} alt='' />
        </div>
        <div className='article-full-text'>{article.description}</div>
        <Link to='/'>Come back</Link>
      </div>
    </>
  );
}
