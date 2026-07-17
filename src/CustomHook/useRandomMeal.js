import { getRandomMeal } from '../Services/MealAPI';
import useFetch from "../CustomHook/useFetch";

function useRandomMeal() {
  return useFetch(getRandomMeal());
}
export default useRandomMeal;