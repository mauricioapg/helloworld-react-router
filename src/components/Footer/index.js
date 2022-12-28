import styles from './Footer.module.css'
import { ReactComponent as Copyright } from 'assets/marca_registrada.svg'

const Footer = () => {
    return(
        <div className={styles.rodape}>
            <Copyright />
            Desenvolvido por Alura.
        </div>
    )
}

export default Footer