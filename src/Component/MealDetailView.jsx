import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/MealDetailView.css';

function MealDetailView({ meals }) {
  const navigate = useNavigate();
  const { mealId } = useParams();
  const meal = meals.find((item) => item.idMeal === mealId);
  
const ingredientList = Array.from({ length: 20 }, (_, index) => {
  const ingredient = meal[`strIngredient${index + 1}`];
  const measure = meal[`strMeasure${index + 1}`];

  return {
    ingredient,
    measure
  };
}).filter(item => item.ingredient?.trim());



  const instructionSteps = meal?.strInstructions
    ? meal.strInstructions
        .split(/\r?\n/)
        .map((step) => step.replace(/^\d+\.\s*/, '').trim())
        .filter(Boolean)
    : [];

  if (!meal) {
    return (
      <div className="meal-detail-view meal-detail-empty">
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

      <div className="meal-detail-hero">
        <img src={meal.strMealThumb} alt={meal.strMeal} />

        <div className="meal-detail-content">
          <h2>{meal.strMeal}</h2>

          <div className="meal-info">
            <div className="meal-tag">🌍 {meal.strArea}</div>
            <div className="meal-tag">🍽️ {meal.strCategory}</div>
          </div>

          <div className="instructions">
           <h3>Ingredients:</h3>
           {ingredientList.length > 0 ? ( 
          <table className="ingredients-table">
  <thead>
    <tr>
      <th>Ingredient</th>
      <th>Measure</th>
    </tr>
  </thead>
  <tbody>
    {ingredientList.map((item, index) => (
      <tr key={index}>
        <td>{item.ingredient}</td>
        <td>{item.measure}</td>
      </tr>
    ))}
  </tbody>
</table>
 ): (<p>Ingredients List unavailable.</p>)}
</div>
          <div className="instructions">
            <h3>Instructions</h3>
            {instructionSteps.length > 0 ? (
              <ol>
                {instructionSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            ) : (
              <p>Instructions unavailable.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealDetailView;
