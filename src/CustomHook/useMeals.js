import useFetch from './useFetch';
import useDebounce from './useDebounce';
import { getMealsByName , getMealsByCategory, getMealsByArea} from '../Services/MealAPI';

function useMeals(searchTerm,selectedCategory,selectedArea) {

    const debouncedSearchTerm =
        useDebounce(searchTerm, 500);
       
    let url = null;

    if (selectedCategory) {
        url = getMealsByCategory(selectedCategory);
    } else if (selectedArea) {
        url = getMealsByArea(selectedArea);
    } else if (debouncedSearchTerm) {
        url = getMealsByName(debouncedSearchTerm);
    }

    const {
        data: searchResponse,
        loading,
        error
    } = useFetch(url);

    const meals =
        searchResponse?.meals || [];
      

    return {
        meals: meals,
        loading,
        error
    };
}

export default useMeals;