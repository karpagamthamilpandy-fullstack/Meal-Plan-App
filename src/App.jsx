import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FetchMeals from './Component/FetchMeals';
import MealGrid from './Component/MealGrid';
import SearchFilter from './Component/SearchFilter';
import Navbar from './Component/NavBar';
import useDebounce from './CustomHook/useDebounce';
import FilterChips from './Component/FilterChips';
import MealDetailView from './Component/MealDetailView';

function MyApp() {
    const [meals, setMeals] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedFilter, setSelectedFilter] = React.useState('All');
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [selectedArea, setSelectedArea] = React.useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const homePage = (
        <div>
            <Navbar favoritesCount={0} />
            <SearchFilter 
            searchTerm={searchTerm} setSearchTerm={setSearchTerm} 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedArea={selectedArea}
            setSelectedArea={setSelectedArea}
             />
            {/* <FilterChips
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedArea={selectedArea}
                setSelectedArea={setSelectedArea}
            /> */}
            <FetchMeals debouncedSearchTerm={debouncedSearchTerm} setMeals={setMeals} />
            <p>Search Text: {searchTerm}</p>
            <MealGrid meals={meals} selectedFilter={selectedFilter} />
        </div>
    );

    return (
        <Routes>
            <Route path="/" element={homePage} />
            <Route path="/meal/:mealId" element={<MealDetailView meals={meals} />} />
        </Routes>
    );
}

export default MyApp;
