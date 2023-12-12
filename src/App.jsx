import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Products } from './components/products/Products'
import { Footer } from './components/footer/Footer'
import { IS_DEVELOPMENT } from './config'

function App() {
  const [products] = useState(initialProducts)
  const { filters, setFilters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} title="Shopping Cart 🛒" />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
