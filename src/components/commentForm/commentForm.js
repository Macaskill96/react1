import React from 'react';
import {useForm} from "react-hook-form";
import {commentsService} from "../../services/comment.service";

 const CommentForm = ({setComments}) => {
    const {register, handleSubmit, reset} = useForm();
    const create = async (comment) => {
        const {data} = await commentsService.create(comment);
        setComments (prev => [...prev, data]);
        console.log(data);
        reset();
    }
    return (
       <form onSubmit={handleSubmit(create)}>
           <input type={'text'} placeholder={'name'} {...register('name')}/>
           <input type={'text'} placeholder={'email'} {...register('email')}/>
           <input type={'text'} placeholder={'body'} {...register('body')}/>
           <button>create</button>
       </form>
    );
};

export default CommentForm;