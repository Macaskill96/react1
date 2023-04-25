import React, {useState} from 'react';
import Header from "./components/header";
import {pageEnum} from "./components/constants/page.enum";
import UserPage from "./components/Pages/UserPage";
import CommentPage from "./components/Pages/CommentPage";
import CarsPage from "./components/Pages/CarsPage";


const App = () => {

    const [coise, setChoise] = useState(pageEnum.USERS)
    return (
        <div>
          <Header setChoise={setChoise}/>
            {coise === pageEnum.USERS && <UserPage/>}
            {coise === pageEnum.COMMENTS && <CommentPage/>}
            {coise === pageEnum.CARS && <CarsPage/>}

        </div>
    );
};

export default App;