/**
 * Renders fetched fashion trends in the UI
 * @param {Array} trends - Array of fashion articles
 */
export function renderFashionTrends(trends) {
    const trendsContainer = document.getElementById("trends");
    trendsContainer.innerHTML = trends.length === 0
        ? "<p>No fashion trends found.</p>"
        : trends.map(article => `
            <div class="trend-card">
                <img src="${article.urlToImage || 'default-image.jpg'}" alt="Fashion Image">
                <h3>${article.title}</h3>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.url}" target="_blank">Read More</a>
            </div>
        `).join('');
}
