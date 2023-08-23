import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className="taskContainer">
      
        <input
          placeholder="Write Your Task!"
          type="text"
          value={props.inputValue}
          onChange={(event) => props.onChange(event)}
          className="taskInput"
          onKeyDown={props.keyPress}
        />
        <button onClick={props.onClick} className="addBtn">
          Add
        </button>
   
    </div>
  );
};

export default Input;
