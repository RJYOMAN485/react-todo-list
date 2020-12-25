import './App.css';
import React, {useState} from 'react'
import Form from './components/Form';


function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);


  return (
    <div className="App">

      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>

    </div>

  );
}


export default App;
