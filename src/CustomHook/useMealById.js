// useMealById.js

import useFetch from "./useFetch";
import { getMealById } from "../Services/MealAPI";

function useMealById(id) {
  const { data, loading, error } = useFetch(
    id ? getMealById(id) : null
  );

  return {
    meal: data?.meals?.[0] || null,
    loading,
    error,
  };
}

export default useMealById;