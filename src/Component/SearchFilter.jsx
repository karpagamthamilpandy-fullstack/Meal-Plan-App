import React, { useEffect, useState } from 'react';
import '../styles/Search-Filter.css';
import useFetch from '../CustomHook/useFetch'
import { getListCategoriesOrAreas } from '../Services/MealAPI'


function SearchFilter({ searchTerm, setSearchTerm ,selectedCategory, setSelectedCategory, selectedArea, setSelectedArea }) {
const { data: categoriesResponse, loading: categoriesLoading, error: categoriesError } = useFetch(getListCategoriesOrAreas('c'))
  const { data: areasResponse, loading: areasLoading, error: areasError } = useFetch(getListCategoriesOrAreas('a'))

  const categories = categoriesResponse?.meals || []
  const areas = areasResponse?.meals || []

    return (
<>

<div className="search-toolbar">

  <div className="home-search">
    <span className="home-search__icon">🔎</span>

    <input
      className="home-search__input"
      type="text"
      placeholder="Search meals... 'biryani'"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
<div>
    <small style={{ marginRight: '10px',fontWeight:'bold' }}>Filter by:</small>
  <select
    className="filter-select"
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
  >
    <option value="">Category</option>

    {categories.map((category) => (
      <option
        key={category.strCategory}
        value={category.strCategory}
      >
        {category.strCategory}
      </option>
    ))}
  </select>

  <select
    className="filter-select"
    value={selectedArea}
    onChange={(e) => setSelectedArea(e.target.value)}
  >
    <option value="">Cuisine</option>

    {areas.map((area) => (
      <option
        key={area.strArea}
        value={area.strArea}
      >
        {area.strArea}
      </option>
    ))}
  </select>
</div>
</div>
</>
)

}

export default SearchFilter;
