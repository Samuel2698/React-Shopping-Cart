import { AddToCartIcon } from './Icons.jsx'

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map((product) => (
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
    </main>
  )
}
