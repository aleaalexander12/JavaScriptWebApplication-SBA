const API_KEY = "ed1f2b1b8b8b4ea8929fd557cc7516fa";  // Replace with your API key
const BASE_URL = "https://newsapi.org/v2/everything?language=en&sortBy=publishedAt";

/**
 * Fetch fashion trends based on category or search query
 * @param {string} query - Search term or category
 * @returns {Promise<Array>} - Array of articles
 */
export async function fetchFashionTrends(query = "fashion") {
    try {
        const response = await fetch(`${BASE_URL}&q=${query}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching fashion trends:", error);
        return [];
    }
}
