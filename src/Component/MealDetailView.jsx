import { useParams, useNavigate, useLocation } from "react-router-dom";
import useMealById from "../CustomHook/useMealById";
import '../styles/MealDetailView.css';

function MealDetailView() {
  const location = useLocation();

  const isRandomMeal = location.state?.isRandomMeal ?? false;

  const navigate = useNavigate();
  const { mealId } = useParams();
  const { meal, loading, error } = useMealById(mealId);
  if (loading) return <h2>Loading...</h2>;
  if (error) {
    return <h2>Error: {error.message || String(error)}</h2>;
  }

  const ingredientList = Array.from({ length: 20 }, (_, index) => ({
    ingredient: meal?.[`strIngredient${index + 1}`]?.trim(),
    measure: meal?.[`strMeasure${index + 1}`]?.trim(),
  })).filter((item) => item.ingredient);

  const instructionSteps = meal?.strInstructions
    ? meal.strInstructions.includes("\n")
      ? meal.strInstructions
          .split(/\r?\n+/)
          .map((step) => step.replace(/^\d+\.\s*/, "").trim())
          .filter(Boolean)
      : [meal.strInstructions.trim()]
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

      <div style={{ textAlign: "center" }}>
        <h2>{isRandomMeal ? 'Fetching a surprise meal...' : 'Meal Detail View'}</h2>
      </div>
      <span><button type="button" onClick={() => navigate('/')}>
          Home
        </button></span>
      <div className="meal-detail-hero">
        <img src={meal.strMealThumb} alt={meal.strMeal} />

        <div className="meal-detail-content">
          <h2>{meal.strMeal}</h2>

          <div className="meal-info">
            <div className="meal-tag">🌍 {meal.strArea  || 'N/A'}</div>
            <div className="meal-tag">🍽️ {meal.strCategory || 'N/A'}</div>
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
            ) : (<p>Ingredients list unavailable.</p>)}
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

