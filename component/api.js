// api.js

// API endpoints
const API_STOCK_LIST =
  "https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT%2CBA%2CNKE%2CSBUX%2CGE%2CHD%2CBRK%2CBTM%2CHPQ-B&api_token=FbmahMUYlqkHyv66WmHVVXxo6MLdEUxXwlkm4Cx5";
const API_NEWS_FEED =
  "https://api.stockdata.org/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT%2CBA%2CNKE%2CSBUX%2CGE%2CHD%2CBRK%2CBTM%2CHPQ-&filter_entities=true&language=en&api_token=FbmahMUYlqkHyv66WmHVVXxo6MLdEUxXwlkm4Cx5";
const API_SEARCH_STOCK =
  "https://api.stockdata.org/v1/entity/search?api_token=FbmahMUYlqkHyv66WmHVVXxo6MLdEUxXwlkm4Cx5&search=";

// Fetch stock list from API
export const fetchStockList = () => {
  return fetch(API_STOCK_LIST)
    .then((response) => response.json())
    .then((json) => json.data)
    .catch((error) => {
      console.error("Error fetching stock list:", error);
      return [];
    });
};

// Fetch news feed from API
export const fetchNewsFeed = () => {
  return fetch(API_NEWS_FEED)
    .then((response) => response.json())
    .then((json) => json.data)
    .catch((error) => {
      console.error("Error fetching news feed:", error);
      return [];
    });
};

// Search for stock based on search term
export const searchStock = (searchTerm) => {
  return fetch(API_SEARCH_STOCK + searchTerm)
    .then((response) => response.json())
    .then((json) => {
      if (json.data && Array.isArray(json.data)) {
        return json.data;
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error("Error searching for stocks:", error);
      return [];
    });
};
