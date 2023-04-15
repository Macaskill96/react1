import './App.css';
import Posts from "./components/Posts/posts";
import {useState} from "react";
import FullPost from "./components/Posts/fullPost/fullPost";
import Space from "./components/spaceX/space";

function App() {
    let [chosenPost, setChosenPost] = useState({})

    const lift = (obj) => {
        setChosenPost({...obj});
    }

  return (

    <div className={'block'}>
        <div className={'block1'}> <Posts lift={lift}/> </div>
        {
            chosenPost
            &&
            (<div className={'block2'}>
            <FullPost value = {chosenPost}/>

        </div>)}

        <Space/>
    </div>
  )




}

export default App;
