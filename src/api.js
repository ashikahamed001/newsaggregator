import config from './config';

const API_URL = 'https://newsapi.org/v2';

export function getTopHeadlines() {
  const url = `${API_URL}/top-headlines?country=us&apiKey=${config.newsApiKey}`;
  return fetch(url).then((response) => response.json());
}

export function searchArticles(query) {
  const url = `${API_URL}/everything?q=${query}&apiKey=${config.newsApiKey}`;
  return fetch(url).then((response) => response.json());
}
