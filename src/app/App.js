import './App.scss';
import React from 'react';
import ArticlePreviews from '../features/articlePreviews/ArticlePreviews';
import { Route, Routes } from 'react-router-dom';
import CurrentArticle from '../features/currentArticle/currentArticle';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>News App</h1>
      </header>
      <main>
        <div className='articles-container'>
          <Routes>
            <Route path='/' element={<ArticlePreviews />} />
            <Route path='/article/:id' element={<CurrentArticle />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
