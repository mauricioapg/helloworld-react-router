import styles from './PageNotFound.module.css'
import erro404 from 'assets/erro_404.png'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    const navigation = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>

                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div
                    className={styles.botaoContainer}
                    onClick={() => navigation(-1)}
                >
                    <Button size='lg'>
                        Voltar
                    </Button>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt='Imagem cachorro de óculos' />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}

export default PageNotFound