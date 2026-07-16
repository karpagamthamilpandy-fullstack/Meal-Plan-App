import React,{createContext, useContext} from 'react';
import { Route, Routes } from 'react-router-dom';

import MealGrid from './Component/MealGrid';
import SearchFilter from './Component/SearchFilter';
import Navbar from './Component/NavBar';
import useDebounce from './CustomHook/useDebounce';
import useMeals from './CustomHook/useMeals';
import MealDetailView from './Component/MealDetailView';
import useLocalStorage from './CustomHook/useLocalStorage';

export const favContext=createContext();
function MyApp() {
    
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [selectedArea, setSelectedArea] = React.useState('');
    const [favorites,setFavorites]=useLocalStorage("favorites",[]);
    const { meals,loading,error} = useMeals(searchTerm, selectedCategory, selectedArea);

 
    const homePage = (
        <div>
            <Navbar favoritesCount={favorites.length} />
           
            <SearchFilter 
            searchTerm={searchTerm} setSearchTerm={setSearchTerm} 
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
                        No "{searchTerm}" found..
                    </p>
                )}
             {!loading &&
                !error &&
                selectedCategory &&
                meals.length === 0 && (
                    <p>
                        Oops "{selectedCategory}" not found....
                    </p>
                )}
                 {!loading &&
                !error &&
                selectedArea &&
                meals.length === 0 && (
                    <p>
                        Oh "{selectedArea}" Cuisine not found in the List....
                    </p>
                )}
             {/* <MealGrid meals={meals} favorites={favorites} setFavorites={setFavorites}/>
           {console.log(favorites)} 
            */}
           <favContext.Provider value={{favorites, setFavorites}}>
                    <MealGrid meals={meals} />
                    {console.log(favorites)} 
           </favContext.Provider>
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
