import { useNavigate } from 'react-router-dom';
import MealCard from './MealCard';

function MealGrid({ meals, selectedFilter }) {
    const navigate = useNavigate();
    const filteredMeals = selectedFilter === 'All' ? meals : meals.filter((meal) => {
        if (selectedFilter === 'Veg') {
            const category = meal.strCategory?.toLowerCase() || '';
            return category.includes('vegetarian') || category.includes('veg');
        }
        if (selectedFilter === 'Seafood') {
            return meal.strCategory === 'Seafood';
        }
        if (selectedFilter === 'Dessert') {
            return meal.strCategory === 'Dessert';
        }
        if (selectedFilter === 'Indian') {
            return meal.strArea === 'Indian';
        }
        return true;
    });

    return (
        <div className="meal-grid">
            {filteredMeals.map((meal) => (
                <div key={meal.idMeal} onClick={() => navigate(`/meal/${meal.idMeal}`)}>
                    <MealCard meal={meal} />
                </div>
            ))}
        </div>
    );
}

export default MealGrid;
