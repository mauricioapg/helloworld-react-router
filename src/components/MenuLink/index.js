import { useLocation, NavLink } from "react-router-dom"
import styles from './MenuLink.module.css'

const MenuLink = ({ children, path }) => {

    const location = useLocation()

    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                isActive ? styles.linkDestacado : ''
            }
        >
            {children}
        </NavLink>
    )
}

export default MenuLink