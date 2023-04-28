import React, {useEffect, useState} from 'react';
import Todo from "./todo/todo";

const Todos = () => {
    let [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data))
    });

    return (
        <div>
            {todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
        </div>

    );
};

export default Todos;