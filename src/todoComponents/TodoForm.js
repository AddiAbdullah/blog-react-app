import React, { useState, useEffect, useRef } from "react";

function TodoForm(props, removeTodo) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  let charLen = input.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      setCount(count + 1);
    }
    props.handleSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            maxLength="50"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>

          <p style={{ color: "White" }}>
            {" "}
            Total characters {charLen}/50 <br />
            Total Todos = {count}
          </p>
        </>
      )}
    </form>
  );
}

export default TodoForm;
