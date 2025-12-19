import React from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setItem] = React.useState([]);
  const [input, setInput] = React.useState("");

  function addItem(event) {
    const iName = event.target.value;
    setInput(iName);
  }

  function addInput() {
    setItem((prevItem) => {
      return [...prevItem, input];
    });
    setInput("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addInput();
    }
  }

  function clearList() {
    setItem([]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={addItem}
          type="text"
          name="itemname"
          value={input}
          onKeyDown={handleKeyPress}
        />
        <button>
          <span onClick={addInput}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((item) => (
            <ToDoItem item={item} />
          ))}
        </ul>
      </div>
      <div className="clear-wrapper">
        <button className="clearBut" onClick={clearList}>
          <span>clear</span>
        </button>
      </div>
    </div>
  );
}

export default App;
