import React from 'react';

const CharComponent = (props) => {

  return (
    <div onClick={props.click}>
      {props.value}
    </div>
  )
};

export default CharComponent;