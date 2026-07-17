import React, { useEffect, useState } from "react";
import { getRandomMeal } from '../Services/MealAPI';
import useFetch from "../CustomHook/useFetch";

function useRandomMeal() {
  
const url=getRandomMeal();
const [data, setData] = useState(null);
const[loading, setLoading] = useState(true);
const[error, setError] = useState(null);


useEffect(() =>{
    if(!url) {
        setLoading(false);
        return;
    }
    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
            setData(null);  
        } finally {
            setLoading(false);
        }
    };

    fetchData();
},[url]);
console.log(data)
return { data, loading, error };
}
export default useRandomMeal;