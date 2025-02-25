const API_KEY = "Yed1f2b1b8b8b4ea8929fd557cc7516fa";  // Replace with your actual API key
const BASE_URL = "https://newsapi.org/v2/everything?language=en&sortBy=publishedAt";

/**
 * Fetches fashion news articles based on category
 * @param {string} category - Selected fashion category
 * @returns {Promise<Array>} - Array of articles
 */
export async function fetchFashionTrends(category = "fashion") {
    try {
        const response = await fetch(`${BASE_URL}&q=${category}&apiKey=${API_KEY}`);
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
