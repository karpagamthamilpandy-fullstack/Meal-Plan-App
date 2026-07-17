import { useNavigate } from 'react-router-dom';
import MealCard from './MealCard';
import '../styles/MealGrid.css';

function MealGrid({ meals }) {
    const navigate = useNavigate();

    return (
        <div className="meals-grid">
            {meals.map((meal) => (
                <div key={meal.idMeal} onClick={() => navigate(`/meal/${meal.idMeal}`)}>
                    <MealCard meal={meal} />
                </div>
            ))}
        </div>
    );
}

export default MealGrid;
