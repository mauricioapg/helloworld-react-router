import PostCard from 'components/PostCard'
import styles from './ModelPost.module.css'

const ModelPost = ({ image, title, children, posts }) => {
    return (
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${image})` }}>
            </div>

            <h2 className={styles.titulo}>
                {title}
            </h2>
            <div className={styles.postConteudoContainer}>
                {children}
            </div>
            <h1>Outros posts que você pode gostar</h1>
            <div className={styles.postSuggestions}>
                {posts.map((post) =>
                    <PostCard key={post.id} post={post} />
                )}
            </div>
        </article>
    )
}

export default ModelPost