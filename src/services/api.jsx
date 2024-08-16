import axios from "axios";


const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const listMealCategories = () => {
    return axios.get(`${API_BASE_URL}/categories.php`);
  };

  export const getRandomMeal = () => {
    return axios.get(`${API_BASE_URL}/random.php`);
  };

  export const lookupMealById = (mealId) => {
    return axios.get(`${API_BASE_URL}/lookup.php?i=${mealId}`);
  };

  export const filterMealsByIngredient = (ingredient) => {
    return axios.get(`${API_BASE_URL}/filter.php?i=${ingredient}`);
  };

  export const listMealsByFirstLetter = (letter) => {
    return axios.get(`${API_BASE_URL}/search.php?f=${letter}`);
  };

  export const searchMealByName = (mealName) => {
    return axios.get(`${API_BASE_URL}/search.php?s=${mealName}`);
  };
  
