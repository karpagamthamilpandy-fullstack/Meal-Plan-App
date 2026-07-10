import React,{useEffect,useState} from "react";
import axios from "axios";


function FetchMealsAxios({searchTerm, setMeals}) {
    const [resultCount, setResultCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            if(!searchTerm.trim()){
                setMeals([]);
                setResultCount(0);
                setLoading(false);
                setError(null);
                return;
            }
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
                const fetchedMeals = response.data.meals || [];
                setMeals(fetchedMeals);
                setResultCount(fetchedMeals.length);
                
            } catch (error) {
                setError(error);
                setMeals([]);
                setResultCount(0);
            } finally {
                setLoading(false);  
            }
        };

        fetchMeals();
    }, [searchTerm, setMeals]); // The effect will run whenever the searchTerm changes[calling API on every keystroke]

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            
                {/* 
                <ul>{meals.map((meal) => (
                    <>
                    <li align="left" key={meal.idMeal}>
                         {meal.strMeal}
                     </li>
                    <li align="left" key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />

                    </li>
                    </>
                ))}
            </ul> */}
            {!loading && !error && <p>Loaded {resultCount} meals</p>}
        </div>
    );
}

export default FetchMealsAxios;
