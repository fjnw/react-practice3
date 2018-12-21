import React from 'react';

const CharComponent = (props) => {

  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    border: "1px solid black",
    margin: "16px"
  }

  return (
    <div style={style} onClick={props.click}>
      {props.value}
    </div>
  )
};

export default CharComponent;