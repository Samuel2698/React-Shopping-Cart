import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../Icons'
import './Cart.css'

export function Cart() {
  const cartCheckboxId = useId()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul className="cart-container">
          <li>
            <img
              src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              alt="Iphone"
            />
            <div className="cart-text">
              <strong>iPhone</strong> - $1499
            </div>

            <footer>
              <button>-</button>
              <p>Qty: 1</p>
              <button>+</button>
            </footer>
          </li>
          <button>
            <ClearCartIcon />
          </button>
        </ul>
      </aside>
    </>
  )
}
