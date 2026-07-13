import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/MealDetailView.css';

function MealDetailView({ meals }) {
  const navigate = useNavigate();
  const { mealId } = useParams();
  const meal = meals.find((item) => item.idMeal === mealId);

  if (!meal) {
    return (
      <div>
        <p>Meal details are unavailable. Please search again.</p>
        <button type="button" onClick={() => navigate('/')}>
          Back to search
        </button>
      </div>
    );
  }

  return (
    <div className="meal-detail-view">
      <button type="button" onClick={() => navigate('/')}>
         ← Back
      </button>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="meal-info">
        <div className="meal-tag">🌍 {meal.strArea}</div>
        <div className="meal-tag">🍽️ {meal.strCategory}</div>
      </div>
      <div className="instructions">
        <h3>Instructions</h3>
        
<ol>
    {meal.strInstructions
      .split("\r\n")
      .filter(step => step.trim() !== "")
      .map((step, index) => (
        <li key={index} align="left">
          {step.replace(/^\d+\.\s*/, "")}
        </li>
      ))}
  </ol>

        {/* <p>{meal.strInstructions || 'Instructions unavailable.'}</p> */}
      </div>
    </div>
  );
}

export default MealDetailView;
