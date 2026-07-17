import React, { useContext } from "react";
import { favContext } from "../App";
import useMealById from "../CustomHook/useMealById";
import { Link } from "react-router-dom";

function FavoritesView() {
  const { favorites } = useContext(favContext);

  const FavoriteMeal = ({ id }) => {
    const { meal, loading, error } = useMealById(id);

    if (loading) return <li>Loading...</li>;
    if (error) return <li>Error loading meal</li>;
    if (!meal) return null;

    return (
      <li
        style={{
        cursor:"pointer",    
          padding: "10px",
          borderBottom: "1px solid #ddd",
          textAlign: "left",
        }} 
      >
        
        <Link to={`/meal/${meal.idMeal}`}>{meal.strCategory} - {meal.strMeal}</Link> 
        
       {/* <Link to={`/meal/${meal.idMeal}`}>
            {meal.strMeal}

        </Link> */}
      </li>
    );
  };

  return (
    <div
      style={{
        textAlign: "left",
        padding: "20px",
      }}
    >
        <Link to="/">← Back to Home</Link>

      <h1>My Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorites added.</p>
      ) : (
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
          }}
        >
          {favorites.map((id) => (
            <FavoriteMeal key={id} id={id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesView;