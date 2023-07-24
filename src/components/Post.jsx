import {Link, useNavigate} from "react-router-dom";

export const Post = ({id, content, enableBtn}) => {
    const navigate = useNavigate();

    const deleteBtn = (postId) => {
        fetch('http://localhost:7070/posts/' + postId, {method: 'DELETE'});
        navigate("/");
    }

    const editBtn = () => {

    }

    if (enableBtn){
        return (
            <div style={{borderStyle: "solid 3px"}}>
                <h3>{"Пост №" + id}</h3>
                <p>{content}<Link to={'/posts/' + id}> Подробнее...</Link></p>
                <div><button onClick={deleteBtn(id)}>Удалить</button><button onClick={editBtn}>Редактировать</button></div>
            </div>
        )
    }

    return(
        <div style={{borderStyle: "solid 3px"}}>
            <h3>{"Пост №" + id}</h3>
            <p>{content}<Link to={'/posts/' + id}> Подробнее...</Link></p>
        </div>
    )
}