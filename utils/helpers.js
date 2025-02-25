/**
 * Updates the page title based on the selected category
 * @param {string} category - Selected category
 */
export function updatePageTitle(category) {
    document.title = `Fashion Trends - ${category.charAt(0).toUpperCase() + category.slice(1)}`;
}
