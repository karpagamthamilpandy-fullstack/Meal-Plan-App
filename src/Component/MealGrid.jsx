import React, { useEffect, useState } from 'react';
import MealCard from './MealCard';

function MealGrid({meals}) {
    return (
        <div>
            {meals.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} />
            ))}
        </div>
    );
}

export default MealGrid;
