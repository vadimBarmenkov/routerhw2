import './App.css';
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import {PostsList} from "./components/PostsList";
import {NewPost} from "./components/NewPost";
import {Posts} from "./components/Posts";
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7070/posts')
            .then(response => response.json())
            .then(dataR => setData(dataR));
    }, [])

  return (
    <BrowserRouter>
        <Link to={'/posts/new'}>Создать пост</Link>

        <Routes>
          <Route path='/' element={<PostsList data={data}/>}/>
          <Route path='/posts/*' element={<Posts data={data}/>}/>
          <Route path='/posts/new' element={<NewPost/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
