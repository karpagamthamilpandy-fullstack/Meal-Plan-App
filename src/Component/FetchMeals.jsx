import React,{useEffect,useState} from 'react';
import useDebounce from '../CustomHook/useDebounce';


function FetchMeals({debouncedSearchTerm,setMeals}) {
    const [resultCount, setResultCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMeals = async () => {
            if(!debouncedSearchTerm){
                setMeals([]);
                setResultCount(0);
                setLoading(false);
                setError(null);
                return;
            }
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedSearchTerm}`);
                if(response.ok) {
                    const data = await response.json();
                     const fetchedMeals = data.meals || [];
                    setMeals(fetchedMeals);
                    setResultCount(fetchedMeals.length);
                }
        } catch (error) {
                setError(error);
                setMeals([]);
                setResultCount(0);
            } finally {
                setLoading(false);  
            }
        };

        fetchMeals();
    }, [debouncedSearchTerm,setMeals]); // The effect will wait for 500ms and call API 1 time after the user stops typing, instead of calling API on every keystroke
    return (
       <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
                {!loading && !error && <p>Loaded {resultCount} meals.</p>}
        </div>
    );
}

export default FetchMeals;
