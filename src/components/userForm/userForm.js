import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}} =useForm();
    const save = async (user) => {
       const{data} = await userService.create(user);
        setUsers (prev => [...prev, data]);
        console.log(data);
       reset();
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>save</button>
        </form>
    );
};

export default UserForm;