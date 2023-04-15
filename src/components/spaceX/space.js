import React, {useEffect, useState} from 'react';
import Launch from "./launch";

const Space = () => {
    let [launch, setLaunch] = useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches').then(value => value.json())
            .then(allLaunch=> { setLaunch(allLaunch)})


    })

    return (
        <div className={'space'}>
            {
                launch.map(value => <Launch value = {value}
                />)
            }

        </div>
)};

export default Space;