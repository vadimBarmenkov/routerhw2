import {useEffect, useState} from "react";
import {Post} from "./Post";
import {Route, Routes} from "react-router-dom";

export const PostsList = () => {
    const [postsList, setPostsList] = useState([]);
    const [routes, setRoutes] = useState([]);

    useEffect( () =>
    {
        fetch('http://localhost:7070/posts')
        .then(response => response.json())
        .then(data => setPostsList(data))
    }, []);

    postsList.map((e) => setRoutes([...routes, <Route path={e.id} element={<Post/>}/>]))

    return(
        <div>
            {postsList.map(post => <Post id={post.id} content={post.content}/>)}
            <Routes>

            </Routes>
        </div>)
}