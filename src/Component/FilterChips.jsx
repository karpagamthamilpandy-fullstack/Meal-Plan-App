import '../styles/filter-chips.css'

const filters = ['All', 'Veg', 'Seafood', 'Dessert', 'Indian','Chicken','Pasta']

const FilterChips = ({selectedFilter, setSelectedFilter}) => {
  return (
    <div className="home-filters" aria-label="Meal filters">
      {filters.map((filter, index) => (
        <button
          key={filter}
          type="button"
          className={`home-chip ${selectedFilter === filter ? 'home-chip--active' : ''}`}
          onClick={() => setSelectedFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default FilterChips
