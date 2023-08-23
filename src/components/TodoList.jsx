import React from "react";
import "./TodoList.css";

const TodoList = (props) => {

  return (
    <>
      {props.list.length > 0 && (
        <div className="listContainer">
          <ul>
            <div className="listScroller">
              {props.list.map?.((todo, index) => (
                <li key={index}>
                  <div className="listContent">
                    <input
                      type="checkbox"
                      className="Check"
                      checked={props.checkedItems[index]}
                      onChange={() => props.onTodoCheck(index)}
                    ></input>
                    <span
                      className={props.checkedItems[index] ? "checkedItem" : ""}
                    >
                      {todo}
                    </span>
                  </div>
                  <button
                    className="deleteBtn"
                    onClick={() => props.delete(index)}
                  >
                    X
                  </button>
                </li>
              ))}
            </div>

            <button onClick={props.clearButton} className="Buttons">
              Clear All
            </button>
            <button onClick={props.checkBoxes} className="Buttons">
              Check All
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default TodoList;
