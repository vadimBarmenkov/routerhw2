import './App.css';
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import {PostsList} from "./components/PostsList";
import {NewPost} from "./components/NewPost";

function App() {

  return (
    <BrowserRouter>
        <Link to={'/posts/new'}>Создать пост</Link>

        <Routes>
          <Route path='/' element={<PostsList/>}/>
          <Route path='*' element={<PostsList/>}/>
          <Route path='/posts/new' element={<NewPost/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
