import React from "react";

function ListItem(props) {
  const [isCrossed, setIsCrossed] = React.useState(false);

  function toggleCross(){
    isCrossed ? setIsCrossed(false) : setIsCrossed(true);
  }

  return  <li onClick={toggleCross} style={isCrossed? {textDecoration:"line-through"}: null}>{props.item}</li>;

}

export default ListItem;