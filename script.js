import { fetchFashionTrends } from "./api/fetchTrends.js";
import { renderFashionTrends } from "./renderTrends.js";
import { updatePageTitle } from "./helpers.js";

/**
 * Loads fashion trends based on selected category
 * @param {string} category - Selected category
 */
async function loadFashionTrends(category = "fashion") {
    updatePageTitle(category);
    const trends = await fetchFashionTrends(category);
    renderFashionTrends(trends);
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
    loadFashionTrends();
});

// Handle category selection
document.getElementById("category-select").addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    loadFashionTrends(selectedCategory);
});
