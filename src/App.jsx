import { products } from './mocks/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Header title="Shopping Cart 🛒" />
      <Products products={products} />
    </>
  )
}

export default App
