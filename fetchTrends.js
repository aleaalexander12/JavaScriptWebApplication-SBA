const API_KEY = "YOUR_NEWSAPI_KEYed1f2b1b8b8b4ea8929fd557cc7516fa";  
const BASE_URL = "https://newsapi.org/v2/everything?q=fashion&language=en&sortBy=publishedAt";

/**
 * Fetches fashion news articles from NewsAPI
 * @returns {Promise<Array>} - Returns an array of fashion-related articles
 */
export async function fetchFashionTrends() {
    try {
        const response = await fetch(`${BASE_URL}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.articles; // Extracts the articles array from the API response
    } catch (error) {
        console.error("Error fetching fashion trends:", error);
        return []; // Return an empty array in case of an error
    }
}
