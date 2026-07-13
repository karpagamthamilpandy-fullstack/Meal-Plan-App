import React from 'react';

function MealCard({ meal }) {
    return (
        <div>
            <h3>Meal Card</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>Meal Name: {meal.strMeal}</p>
            <p>Category: {meal.strCategory}</p>
            <p>Area: {meal.strArea}</p>
        </div>
    );
}

export default MealCard;
