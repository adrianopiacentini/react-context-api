import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const api = "http://localhost:3000";

function ShowPost() {

    const [displayedPost, setDisplayedPost] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${api}/post/${id}`).then((resp) => setDisplayedPost(resp.data))
    }, [id])

    return (
        <>
            {displayedPost && (
                <div>
                    <h1>{displayedPost.title}</h1>
                    <p>{displayedPost.content}</p>
                </div>
            )}
        </>
    )
}

export default ShowPost