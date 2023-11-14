import { NavLink } from "react-router-dom"
import styles from "./AppNav.module.css"

export default function AppNav() {
  return (
    <nav className={styles.nav}>
        <ul>
         <li>
            <NavLink vLink to="cities">Cities</NavLink>
          </li>
         <li>
            <NavLink vLink to="countries">Countries</NavLink>
          </li>
        </ul>
    </nav>
  )
}
