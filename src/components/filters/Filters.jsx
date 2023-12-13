import { useId } from 'react'
import { useFilters } from '../../hooks/useFilters'
import './Filters.css'

export function Filters() {
  const { filters, setFilters } = useFilters()
  const minPriceId = useId()
  const categoryId = useId()

  const changeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const changeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className="filters">
      <div className="price">
        <label className="price-label" htmlFor="price">
          Price
        </label>

        <input
          onChange={changeMinPrice}
          type="range"
          id={minPriceId}
          min="0"
          max="1800"
          value={filters.minPrice}
        />

        <span>${filters.minPrice}</span>
      </div>

      <div className="category">
        <label htmlFor="category">Category</label>
        <select onChange={changeCategory} id={categoryId}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphone</option>
        </select>
      </div>
    </section>
  )
}
