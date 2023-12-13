import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Cart } from './components/cart/Cart'
import { Products } from './components/products/Products'
import { Footer } from './components/footer/Footer'
import { IS_DEVELOPMENT } from './config'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header title="Shopping Cart 🛒" />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
