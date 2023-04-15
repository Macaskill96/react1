import React from 'react';

const Launch = ({value}) => {
    return (
        <div>
            {
                value.launch_year < 2020 ? (
                    <p> launch year: {value.launch_year}, Mission name:{value.mission_name}</p>
                ) : null
            }
        </div>
    );
};

export default Launch;