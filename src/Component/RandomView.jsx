import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRandomMeal from "../CustomHook/useRandomMeal";

function RandomView() {
  const navigate = useNavigate();
  const { data, loading, error } = useRandomMeal();

  useEffect(() => {
    const mealId = data?.meals?.[0]?.idMeal;

    if (mealId) {
      navigate(`/meal/${mealId}`, { state: { isRandomMeal: true } });
    }
  }, [data, navigate]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error.message || String(error)}</h2>;

  return <h2>Fetching a surprise meal...</h2>;

}
export default RandomView;