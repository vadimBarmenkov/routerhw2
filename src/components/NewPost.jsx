import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const NewPost = () => {
    const [post, setPost] = useState();
    const navigate = useNavigate();

    const formHandle = (e) =>{
        e.preventDefault()
    }

    const savePost = () => {
        fetch('http://localhost:7070/posts',
            {method: "POST", body: JSON.stringify({id: Date.now(), content: post})}).then(navigate("/"))
    }

    return (
        <form onSubmit={formHandle}>
        <input type={"text"} value={post} onChange={event => setPost(event.target.value)}/>
            <button onClick={savePost}>Опубликовать</button>
        </form>)
}