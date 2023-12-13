import { useFilters } from '../../hooks/useFilters'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()

  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 1)}
      {/* <h4>React Test ⚛️</h4>
      <span>@samueldev</span>
      <h5>Shopping Cart with useContext & useReducer</h5> */}
    </footer>
  )
}
