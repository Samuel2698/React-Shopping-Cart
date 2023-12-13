import { Filters } from './filters/Filters'

export function Header({ title }) {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <Filters />
    </header>
  )
}
