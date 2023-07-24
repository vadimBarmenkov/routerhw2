import {useEffect, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {Post} from "./Post";

export const Posts = ({data}) => {

    return (
        <div>
            <Routes>
                {data.map((element) => <Route path={'/' + element.id} element={<Post id={element.id} content={element.content} enableBtn={true}/>} />)}
            </Routes>
        </div>)
}