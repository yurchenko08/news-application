import './App.scss';
import React from 'react';
import ArticlePreviews from '../features/articlePreviews/ArticlePreviews';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>News App</h1>
      </header>
      <main>
        <div className='articles-container'>
          <ArticlePreviews />
        </div>
      </main>
    </div>
  );
}

export default App;
