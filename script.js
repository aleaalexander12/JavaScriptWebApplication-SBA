import { fetchFashionTrends } from "./api/fetchTrends.js";

async function displayFashionTrends() {
    const trendsContainer = document.getElementById("trends"); // Make sure this exists in your HTML
    trendsContainer.innerHTML = "<p>Loading trends...</p>";

    const trends = await fetchFashionTrends();
    
    if (trends.length === 0) {
        trendsContainer.innerHTML = "<p>No fashion trends found.</p>";
        return;
    }

    trendsContainer.innerHTML = trends.map(article => `
        <div class="trend-card">
            <img src="${article.urlToImage || 'default-image.jpg'}" alt="Fashion Image">
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        </div>
    `).join('');
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", displayFashionTrends);
