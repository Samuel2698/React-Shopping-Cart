import { Filters } from './Filters'

export function Header({ changeFilters, title }) {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <Filters changeFilters={changeFilters} />
    </header>
  )
}
