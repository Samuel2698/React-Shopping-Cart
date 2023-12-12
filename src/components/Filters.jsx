import { useState } from 'react'

export function Filters({ changeFilters }) {
  const [minPrice, setMinPrice] = useState(0)

  const changeMinPrice = (e) => {
    setMinPrice(e.target.value)
    changeFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const changeCategory = (e) => {
    changeFilters((prevState) => ({
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
        <div className="input-filter">
          <input
            onChange={changeMinPrice}
            type="range"
            id="price"
            min="0"
            max="1499"
          />
        </div>
        <span>${minPrice}</span>
      </div>

      <div className="category">
        <label htmlFor="category">Category</label>
        <select onChange={changeCategory} id="category">
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphone</option>
        </select>
      </div>
    </section>
  )
}
