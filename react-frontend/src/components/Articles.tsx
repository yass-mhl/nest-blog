import React, { useState, useEffect } from 'react';
import { Article } from '../types';

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>Author: {article.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;