import { useNavigate } from 'react-router-dom';
import MealCard from './MealCard';
import '../styles/MealGrid.css';
import { useContext } from 'react';
import { favContext } from '../App';

// function MealGrid({ meals ,favorites,setFavorites}) {
function MealGrid({ meals }) {
    const navigate = useNavigate();
 const {favorites, setFavorites}=useContext(favContext);
    return (
        <div className="meals-grid">
            {meals.map((meal) => (
                <div key={meal.idMeal} onClick={() => navigate(`/meal/${meal.idMeal}`)}>
                    {/* <MealCard meal={meal} favorites={favorites} setFavorites={setFavorites} /> */}
                   <MealCard meal={meal} />
                </div>
            ))}
        </div>
    );
}

export default MealGrid;
