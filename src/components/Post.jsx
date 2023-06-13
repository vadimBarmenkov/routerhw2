import {Link} from "react-router-dom";

export const Post = ({id, content}) => {

    return(
        <div style={{borderStyle: "solid 3px"}}>
            <h3>{"Пост №" + id}</h3>
            <p>{content}<Link to={'/posts/' + id}> Подробнее...</Link></p>
        </div>
    )
}