import React from 'react';
import './header.css'
import {pageEnum} from "./constants/page.enum";

const Header = ({setChoise}) => {

    return (
        <div>
            <div className={'header'} >
                <button onClick={()=>setChoise(pageEnum.CARS)}>Cars</button>
                <button onClick={()=>setChoise(pageEnum.COMMENTS)}>Comments</button>
                <button onClick={()=> setChoise(pageEnum.USERS)}>Users</button>
            </div>

        </div>

    );
};

export default Header;