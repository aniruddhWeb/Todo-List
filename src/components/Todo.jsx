import React, { useState, useEffect } from "react";
import Input from "./Input";
import TodoList from "./TodoList";
import "./Todo.css";

const Todo = () => {
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    setTodos(storedTodos);
    setCheckedItems(new Array(storedTodos.length).fill(false));
    console.log(setCheckedItems, "checking");
  },[]);  

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, checkedItems]);

  const inputChangeHandler = (event) => {
    setNewTodo(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleAddTodo = (e) => {
    if (newTodo.trim() === "") {
      alert("Please Enter a Task!");
    } else {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setCheckedItems([...checkedItems, false]);
      setNewTodo("");
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleCheckedTodo = (index) => {
    const checkedTodo = [...checkedItems];
    checkedTodo[index] = !checkedTodo[index];
    setCheckedItems(checkedTodo);
  };

  const checkButtonHandler = () => {
    const allCheckBoxes = checkedItems.every((checked) => checked.isChecked);
    const updatedCheckboxes = checkedItems.map((checkbox) => ({
      ...checkbox,
      isChecked: !allCheckBoxes,
    }));
    setCheckedItems(updatedCheckboxes);
  };

  const clearButtonHandler = () => {
    setTodos("");
    setCheckedItems(new Array(storedTodos.length).fill(false));
  };

  return (
    <div className="Container">
      <div className="headingContainer">
        <h1 className="Heading">ToDo List. . . .</h1>
        <img src="pencil.png" alt="pencil" />
      </div>
      <div>
        <Input
          onChange={inputChangeHandler}
          inputValue={newTodo}
          onClick={handleAddTodo}
          keyPress={handleKeyPress}
        />
      </div>

      <div>
        <TodoList
          delete={handleDeleteTodo}
          list={todos}
          onTodoCheck={handleCheckedTodo}
          checkedItems={checkedItems}
          checkBoxes={checkButtonHandler}
          clearButton={clearButtonHandler}
        />
      </div>
    </div>
  );
};

export default Todo;
