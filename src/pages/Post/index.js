import './Post.css'
import { Route, Routes, useParams } from "react-router-dom"
import posts from 'json/posts.json'
import ModelPost from "components/ModelPost"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import PageNotFound from 'pages/PageNotFound'
import DefaultPage from 'components/DefaultPage'

const Post = () => {

    const params = useParams()

    const post = posts.find((post) => {
        return post.id === Number(params.id)
    })

    if (!post) {
        return <PageNotFound />
    }

    return (
        <Routes>
            <Route path='*' element={<DefaultPage />}>
                <Route index element={
                    <ModelPost
                        image={`/assets/posts/${post.id}/capa.png`}
                        title={post.titulo}
                        posts={
                            posts
                            .sort(() => Math.random() - 0.5)
                            .filter(post => post.id !== Number(params.id))
                            .slice(0, 4)
                        }>
                        <div className='post-markdown-container'>
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                    </ModelPost>}>
                </Route>
            </Route>
        </Routes>
    )
}

export default Post