import React, { useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { favContext } from '../context/favoritesContext';

function MealCard({ meal }) {
  const { favorites, setFavorites } = useContext(favContext);

  const isFavorite = favorites.includes(meal.idMeal);

  const toggleFavorites = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(id => id !== meal.idMeal));
    } else {
      setFavorites([...favorites, meal.idMeal]);
    }
  };

  return (
    <div className="meal-card">
      <img
                className="meal-image" src={meal.strMealThumb} alt={meal.strMeal} />
	<h3>{meal.strMeal}</h3>
	
        <div className="meal-tags">
                    <span>{meal.strArea || 'N/A'} - {meal.strCategory || 'N/A'}</span>
                
        </div>

      <span
        className="favorite-icon"
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorites();
        }}
      >
        {isFavorite ? (
          <FaHeart color="red" size={20} />
        ) : (
          <FaRegHeart size={20} />
        )}
      </span>
    </div>
  );
}

export default MealCard;