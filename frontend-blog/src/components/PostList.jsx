import { Link } from "react-router-dom";


function PostList({ createPost, newPost, handleChange, post, deletePost }) {
    return (
        <>
            <div>
                <form onSubmit={createPost}>
                    <h2>Aggiungi un nuovo post</h2>
                    <label htmlFor="title">Contenuto</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={newPost.title}
                        onChange={handleChange}
                    />
                    <button type="submit">Invia</button>
                </form>
            </div>

            {post.length !== 0
                ? post.map((curPost) => (
                    <div key={curPost.id}>
                        <Link to={`/postpage/${curPost.id}`}>{curPost.title}</Link>
                        <button onClick={() => deletePost(curPost.id)}>Cancella</button>
                    </div>
                ))
                : <p>La pagina è vuota</p>}
        </>
    )
}

export default PostList;