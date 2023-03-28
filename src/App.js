//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from './searchbar';
import Article from './article';
import { getTopHeadlines, searchArticles } from './api';
function App() {
  const [articles, setArticles] = useState(undefined);

  const handleSearch = (searchQuery) => {
    searchArticles(searchQuery)
      .then((data) => setArticles(data.articles))
      .catch((error) => console.log(error));
  };

  const handleTopHeadlines = () => {
    getTopHeadlines()
      .then((data) => setArticles(data.articles))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>News Aggregator App</h1>
      <SearchBar onSearch={handleSearch} />
      <button onClick={handleTopHeadlines}>Top Headlines</button>
      {articles &&
        articles.map((article) => (
          <Article key={article.url} article={article} />
        ))}
    </div>
  );
}

export default App;
