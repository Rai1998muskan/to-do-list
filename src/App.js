//import logo from './logo.svg';
import './App.css';
// import { Lists } from './Component/list';
import React, {useState } from 'react'


function App() {


const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([ {value:'to eat'},{value:'to eat'} ]);

  const handlInputChange = event => {
    setTodoValue(event.target.value);
  };

  const handleSubmit = () => {
    setTodoList(prevTodoValue =>
      // prevTodoValue.concat({ value: todoValue })
      [...prevTodoValue,{value:todoValue} ]
    );
    setTodoValue("");
  };

  const deleteHandler = x =>{
    // console.log(x)
      const newTasks = [...todoList];
      newTasks.splice(x, 1);
      setTodoList(newTasks);
    };
  



  return (
    <div className="App">
      <input type="text" value={todoValue} onChange={handlInputChange} />
      <button onClick={handleSubmit}>submmit</button>
      {todoList.map(
        (item, index) =>
          item.value && (
            <li>
              {item.value}
              <button onClick={() => deleteHandler(index)}>delete</button>
            </li>
          )
      )}
    </div>
  );
}

export default App;
