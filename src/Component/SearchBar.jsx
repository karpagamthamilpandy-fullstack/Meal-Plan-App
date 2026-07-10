import React, { useEffect, useState } from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
return (
    <div>
        <input type="text" placeholder="Search for a term..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
)

}

export default SearchBar;
