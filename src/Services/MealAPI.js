const BASE_URL =
  "https://www.themealdb.com/api/json/v1/1";

export const getMealsByName = (name) =>
  `${BASE_URL}/search.php?s=${name}`;

export const getMealById = (id) =>
  `${BASE_URL}/lookup.php?i=${id}`;

export const getListCategoriesOrAreas = (data) =>
  `${BASE_URL}/list.php?${data}=list`;

export const getRandomMeal = () =>
  `${BASE_URL}/random.php`;

export const getMealsByCategory = (category) =>
  `${BASE_URL}/filter.php?c=${category}`;
