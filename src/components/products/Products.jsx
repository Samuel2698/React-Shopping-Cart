import './Products.css'
import { AddToCartIcon } from '../Icons'

export function Products({ products }) {
  return (
    <main className="products">
      {products.length > 0 ? (
        <ul>
          {products.slice(0, 10).map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div className="products-list">
                <div>
                  <strong>{product.title}</strong> ${product.price}
                </div>
                <div>
                  <button>
                    <AddToCartIcon />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-products">There are no products 🤷‍♂️</p>
      )}
    </main>
  )
}
