import React, { useState } from "react";
import { TodolistDiv } from "./Style";
import { MdModeEditOutline, MdOutlineDeleteForever } from "react-icons/md";

const TodoList = () => {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);
  const [flag, setFlag] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);
  console.log("task", task);

  const handleTask = () => {
    if (inputVal === "") return;
    if (flag) {
      setTask((prev) =>
        prev.map((item, index) => (index === currIndex ? inputVal : item))
      );
      setFlag(false);
    } else {
      // Add a new task
      setTask((prev) => [...prev, inputVal]);
    }
    setInputVal("");
  };

  const handleDelete = (index) => {
    setTask((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setFlag(true);
    setCurrIndex(index);
    setInputVal(task[index]);
  };

  return (
    <TodolistDiv>
      <div className="full-div">
        <p style={{ textAlign: "center" }}>To Do List</p>
        <input
          style={{ height: 30 }}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          className="btn-right-radius"
          style={{ height: 35 }}
          onClick={handleTask}
        >
          {flag ? "Update task" : "Add task"}
        </button>
        <div>
          {task.map((item, index) => (
            <div className="items" key={index}>
              {index + 1}. {item}
              <div>
                <button
                  className="btn-left-radius"
                  style={{ marginLeft: 10 }}
                  onClick={() => handleEdit(index)}
                >
                  {" "}
                  {<MdModeEditOutline />}
                </button>
                <button
                  className="btn-right-radius"
                  onClick={() => handleDelete(index)}
                >
                  {<MdOutlineDeleteForever />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TodolistDiv>
  );
};

export default TodoList;
