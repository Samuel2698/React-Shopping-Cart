import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/products/Products'
import { Header } from './components/Header'

import { useState } from 'react'
import { Footer } from './components/footer/Footer'
import './App.css'

function useFilters() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { setFilters, filterProducts }
}

function App() {
  const [products] = useState(initialProducts)
  const { setFilters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} title="Shopping Cart 🛒" />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
