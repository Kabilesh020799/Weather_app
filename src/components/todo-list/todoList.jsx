import React, { useState } from "react";
import classes from './style.module.css';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [items, setItems] = useState([]);

  const onChangeCheckBox = (index) => {
    setItems([...items?.map((it, i) => ({ ...it, checked: index === i ? !it?.checked : it?.checked }))])
  };

  return (
    <div className={classes.todo_list}>
      <div className={classes.todo_list_header}>
        <input type="text" placeholder="Enter a Task" className={classes.todo_list_header_input} value={todo} onChange={(e) => setTodo(e.target.value)} onKeyDown={(e) => {
          if(e.key === 'Enter') {
            setItems((prev) => [...prev, { name: todo, checked: false }]);
            setTodo('');
          }
        }} />
        <button className={classes.todo_list_header_btn} id="todo-list-header-btn" onClick={() => {
          setItems((prev) => [...prev, { name: todo, checked: false }])
          setTodo('');
        }}>Add</button>
      </div>
      <div className={classes.todo_list_body}>
        {
          items?.map((item, index) => (
            <div className={classes.todo_list_body_content}>
              <input type="checkbox" checked={item?.checked} onChange={() =>onChangeCheckBox(index)} className="todo-list-body-content-checkbox" />
              <span>{item?.name}</span>
              <i class="fa-solid fa-trash" onClick={() => setItems((prev) => [...prev.filter((it, i) => index !== i)])}></i>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default TodoList;
