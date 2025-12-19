import React from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Clear from "./Clear";

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
      <InputArea adItem={addItem} adInput={addInput} keyPress={handleKeyPress} inputText={input} />
      <div>
        <ul>
          {item.map((item) => (
            <ToDoItem item={item} />
          ))}
        </ul>
      </div>
      <Clear cls={clearList}/>
    </div>
  );
}

export default App;
