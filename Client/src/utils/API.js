export const searchRecipes = (query) => {
    return fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
};
