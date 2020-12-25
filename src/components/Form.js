import React from 'react'
import FormList from './FormList'

const Form = ({inputText, setInputText, todos, setTodos}) => {

    const inputTextHandler = e => {
        //console.log(inputText);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText === '')
            return;
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ])

       // console.log(todos);

        setInputText("");

    }


    return(
        <React.Fragment>  
            <header>
                <h2> Rj Todo List </h2>
            </header>
        <form style={{justifyContent:"center",alignItems:"center"}}>
            <input type="text" value= {inputText} onChange = { inputTextHandler } className="todo-input" placeholder="Enter item" />
            
            <button type = "submit" onClick = {submitTodoHandler} className = "todo-btn" >
                <i className="fa fa-plus-square"></i>
            </button >
            <div>
                <ul className="todo-list">

                    {
                        todos.map((todo) => (
                            <FormList text={todo.text} key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
                        ))
                    }
            </ul>
           </div>
        </form>
        </React.Fragment>
    )

}

export default Form;