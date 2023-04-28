import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components/Todos/Todos";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Commenst/Comments";
import PostDetails from "./components/posr-details/post-details";

const App = () => {
    return (
        <div>
          <div>
            <h2> Home work 4</h2>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/todos'}>Todos</Link>
              </li>
              <li>
                <Link to={'/albums'}>Albums</Link>
              </li>
              <li>
                <Link to={'/comments'}>Comments</Link>
              </li>
            </ul>
          </div>

          <div>
            <Routes>
              <Route path={'/todos'} element={<Todos/>} />
              <Route path={'/albums'} element={<Albums/>} />
              <Route path={'/comments'} element={<Comments/>}>
                  <Route path={':id'} element={<PostDetails/>}/>
                  </Route>
            </Routes>
          </div>
        </div>
    );
};

export default App;