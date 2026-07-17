import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MealGrid from './Component/MealGrid';
import SearchFilter from './Component/SearchFilter';
import Navbar from './Component/NavBar';
import FavoritesView from './Component/FavoritesView';
import RandomView from './Component/RandomView';
import useMeals from './CustomHook/useMeals';
import MealDetailView from './Component/MealDetailView';
import useLocalStorage from './CustomHook/useLocalStorage';
import { favContext } from './context/favoritesContext';

function MyApp() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [selectedArea, setSelectedArea] = React.useState('');
    const [favorites, setFavorites] = useLocalStorage('favorites', []);
    const { meals, loading, error } = useMeals(searchTerm, selectedCategory, selectedArea);

    const homePage = (
        <div>
            <Navbar favoritesCount={favorites.length} />

            <SearchFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedArea={selectedArea}
                setSelectedArea={setSelectedArea}
            />
            {loading && <p>Loading meals...</p>}

            {error && (
                <p style={{ color: 'red' }}>
                    Error: {error.message}
                </p>
            )}

            {!loading &&
                !error &&
                searchTerm &&
                meals.length === 0 && (
                    <p>
                        No "{searchTerm}" found.
                    </p>
                )}
            {!loading &&
                !error &&
                selectedCategory &&
                meals.length === 0 && (
                    <p>
                        Oops "{selectedCategory}" not found.
                    </p>
                )}
            {!loading &&
                !error &&
                selectedArea &&
                meals.length === 0 && (
                    <p>
                        Oh "{selectedArea}" cuisine not found in the list.
                    </p>
                )}
            <MealGrid meals={meals} />
        </div>
    );

    return (
        <favContext.Provider value={{ favorites, setFavorites }}>
            <Routes>
                <Route path="/" element={homePage} />
                <Route path="/favorites" element={<FavoritesView />} />
                <Route path="/random" element={<RandomView />} />
                <Route path="/meal/:mealId" element={<MealDetailView />} />
            </Routes>
        </favContext.Provider>
    );
}

export default MyApp;
