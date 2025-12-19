import React from "react";

function Clear(props) {
  return(
    <div className="clear-wrapper">
        <button className="clearBut" onClick={props.cls}>
          <span>clear</span>
        </button>
      </div>
  )
}

export default Clear;