import React from 'react';

function Article({ article }) {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noreferrer">
        Read More
      </a>
    </div>
  );
}

export default Article;
