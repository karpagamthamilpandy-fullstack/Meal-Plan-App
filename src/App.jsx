import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import FetchMeals from './Component/FetchMeals';
import FetchMealsAxios from './Component/FetchMealsAxios';
import MealGrid from './Component/MealGrid';
import SearchBar from './Component/SearchBar';

function MyApp() {
    const [meals, setMeals] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    return (
        <div>
            {/* <nav>
                <ul>
                    <li><Link to="/FetchMeals">FetchMeals</Link></li>
                    <li><Link to="/FetchMealsAxios">FetchMealsAxios</Link></li>
                </ul>
            </nav> */}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <FetchMealsAxios searchTerm={searchTerm} setMeals={setMeals} />
            
            <p>Text Value: {searchTerm}</p>
            <MealGrid meals={meals} />
            {/* <Routes>
                <Route path="/FetchMeals" element={<FetchMeals />} />
                <Route path="/FetchMealsAxios" element={<FetchMealsAxios />} />
            </Routes> */}
        </div>

    );
}

export default MyApp;
