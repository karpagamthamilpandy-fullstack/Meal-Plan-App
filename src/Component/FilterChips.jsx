import '../styles/filter-chips.css'
import useFetch from '../CustomHook/useFetch'
import { getListCategoriesOrAreas } from '../Services/MealAPI'

function FilterChips({ selectedCategory, setSelectedCategory, selectedArea, setSelectedArea }) {
  const { data: categoriesResponse, loading: categoriesLoading, error: categoriesError } = useFetch(getListCategoriesOrAreas('c'))
  const { data: areasResponse, loading: areasLoading, error: areasError } = useFetch(getListCategoriesOrAreas('a'))

  const categories = categoriesResponse?.meals || []
  const areas = areasResponse?.meals || []

  return (
    <div className="home-filters" aria-label="Meal filters">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        disabled={categoriesLoading}
      >
        <option value="">{categoriesLoading ? 'Loading categories...' : 'Select Category'}</option>
        {categories.map((category) => (
          <option key={category.strCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>

      <select
        value={selectedArea}
        onChange={(e) => setSelectedArea(e.target.value)}
        disabled={areasLoading}
      >
        <option value="">{areasLoading ? 'Loading areas...' : 'Select Area'}</option>
        {areas.map((area) => (
          <option key={area.strArea} value={area.strArea}>
            {area.strArea}
          </option>
        ))}
      </select>

      {categoriesError && <p>Unable to load categories.</p>}
      {areasError && <p>Unable to load areas.</p>}
    </div>
  )
}

export default FilterChips
