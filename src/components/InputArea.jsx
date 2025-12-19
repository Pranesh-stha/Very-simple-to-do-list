import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.adItem}
        type="text"
        name="itemname"
        value={props.inputText}
        onKeyDown={props.keyPress}
      />
      <button onClick={props.adInput}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
