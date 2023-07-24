import {Post} from "./Post";

export const PostsList = ({data}) => {

    return(
        <div>
            {data.map(post => <Post id={post.id} content={post.content}/>)}
        </div>)
}