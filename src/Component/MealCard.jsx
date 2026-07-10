import React, { useEffect, useState } from 'react';

function MealCard({meal}) {
return(
    <div>
        <h3>Meal Card</h3>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <p>{meal.strCategory}</p>
        <p>{meal.strArea}</p>
    </div>
)

}
export default MealCard;