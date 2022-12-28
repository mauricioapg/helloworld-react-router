import styles from './Button.module.css'

const Button = ({ children, size }) => {
    return (
        <button className={`
            ${styles.botao}
            ${styles[size]}
        `}>
            {children}
        </button>
    )
}

export default Button