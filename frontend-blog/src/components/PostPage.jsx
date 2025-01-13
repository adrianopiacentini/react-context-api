import { useState, useEffect } from 'react';
import posts from '../../data/posts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PostList from './PostList';


const initialFormData = {
    id: "",
    title: "",
};

const api = "http://localhost:3000";

function PostPage() {
    const [post, setPost] = useState([]);
    const [newPost, setNewPost] = useState(initialFormData);

    const navigate = useNavigate()

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        axios.get(`${api}/post`).then((resp) => {
            console.log(resp);
            setPost(resp.data.data);
        });
    };

    const createPost = (event) => {
        event.preventDefault();
        axios.post(`${api}/post`, newPost).then((resp) => {
            console.log(resp)
            const newPostApi = resp.data;

            const newPostList = [
                ...post, newPostApi
            ]
            setPost(newPostList)
            navigate(`/postpage/${newPostApi.id}`)

        })
    };

    const handleChange = (event) => {

        const keyToChange = event.target.name;
        const newData = {
            ...newPost,
            [keyToChange]: event.target.value
        }
        setNewPost(newData)
    };

    const deletePost = (postId) => {
        axios.delete(`${api}/post/${postId}`).then((resp) => {
            const newPostList = post.filter((curPost) =>
                curPost.id != postId
            )
            setPost(newPostList)
        })
    };

    const globalProviderValue = {
        createPost,
        newPost,
        handleChange,
        post,
        deletePost
    }

    return (
        <>
            <h1>Titolo della pagina dei post</h1>

            <PostList createPost={createPost} newPost={newPost} handleChange={handleChange} post={post} deletePost={deletePost} />

            {/* <div>
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
                : <p>La pagina è vuota</p>} */}
        </>
    )
}

export default PostPage;
