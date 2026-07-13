import "../styles/MealDetailView.css";
import { useNavigate } from "react-router-dom";

function MealDetailView({ selectedMeal }) {
  const navigate = useNavigate();

  if (!selectedMeal) {
    return <p>No Meal Selected</p>;
  }

  return (
    <div className="meal-detail-view">
      <button onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>{selectedMeal.strMeal}</h2>

      {selectedMeal.strMealThumb}

      <div className="meal-info">
        <div className="meal-tag">
          🍽️ {selectedMeal.strCategory}
        </div>

        <div className="meal-tag">
          🌍 {selectedMeal.strArea}
        </div>
      </div>

      <div className="instructions">
        <h3>Instructions</h3>
        <p>{selectedMeal.strInstructions}</p>
      </div>

     
    </div>
  );
}

export default MealDetailView;