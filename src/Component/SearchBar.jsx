import React, { useEffect, useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ searchTerm, setSearchTerm }) {
return (
    <div className="home-search">
        <span className="home-search__icon" aria-hidden="true">
        🔎
      </span>
        
        <input
        className="home-search__input"
        type="text"
        placeholder="Search meals... 'biryani'"
        aria-label="Search meals"
         value={searchTerm} 
         onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
)

}

export default SearchBar;
