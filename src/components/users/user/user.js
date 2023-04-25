import React from 'react';

const User = ({user}) => {
    const {name, username, email} = user;
    return (
        <div style={{margin:'15px'}}>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export default User;