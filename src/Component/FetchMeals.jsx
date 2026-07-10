import React,{useEffect,useState} from 'react';

function FetchMeals() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try{
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
              

                const data = await response.json();
                console.log(data);
                setMeals(data.meals);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);  

            }
        };

        fetchMeals();
    }, []);
    return (
        <div>
            {loading && <p>Loading...</p>}  
            {error && <p>Error: {error.message}</p>}
            <ul>
            
                
                {
                    meals.map((meal) => (<li align="left" key={meal.idMeal}>{meal.strMeal}</li>))
                }
            </ul>
        </div>
    );
}

export default FetchMeals;
