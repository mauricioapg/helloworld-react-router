import Button from 'components/Button'
import { Link, useNavigate } from 'react-router-dom'
import styles from './PostCard.module.css'

const PostCard = ({ post }) => {

    const navigation = useNavigate()

    return (
        <Link to={`posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt='Imagem da capa do post'
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <Button>
                    Ler
                </Button>
            </div>
        </Link>
        // <div
        //     onClick={() => navigation(`posts/${post.id}`)}
        //     className={styles.post}
        // >
        //     <img
        //         className={styles.capa}
        //         src={`/assets/posts/${post.id}/capa.png`}
        //         alt='Imagem da capa do post'
        //     />
        //     <h2 className={styles.titulo}>{post.titulo}</h2>
        //     <Button>
        //         Ler
        //     </Button>
        // </div>
    )
}

export default PostCard