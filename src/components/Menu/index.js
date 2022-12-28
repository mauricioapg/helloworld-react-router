import MenuLink from "../MenuLink"
import styles from './Menu.module.css'

const Menu = () => {

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink path={'/'} children='Home' />
                <MenuLink path={'/about'} children='About' />
            </nav>
        </header>
    )
}

export default Menu