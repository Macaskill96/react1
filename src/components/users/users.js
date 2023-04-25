import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "./user/user";
import UserForm from "../userForm/userForm";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [updateAllUsers, setUpdateAllUsers] = useState(null);
    useEffect(()=> {
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    },[updateAllUsers])
    return (
        <div>
            <UserForm setUsers = {setUsers}/>
            <hr/>
            {users.map(user =><User key ={user.id} user={user}/>)}
        </div>
    );
};

export default Users;