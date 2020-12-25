
import React from 'react'

const FormList = ({text, todo, todos,setTodos}) => {

    const deleteTodo = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeTodo = () => {
        setTodos(todos.map(element => {
            if(element.id === todo.id)
                return {...element,completed:!element.completed}
            return element;
        }));
    }




 
    return(
        
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text} 
                <button type="button" onClick={completeTodo}><i className="fa fa-check"></i></button>
                <button onClick={() => deleteTodo()}><i className="fa fa-trash"></i></button>
            </li>
        
        
    )
}

export default FormList;

