import React from 'react';

const ValidationComponent = (props) => {

  let msg = null;
  
  if (props.length <5 && props.length != null) {
    msg = (<p>text is less than five characters.</p>)
  } else if (props.length >= 5) {
    msg = (<p>text more than five characters.</p>)
  }

  return (
    <div>

      <p>character length: {props.length}</p>

      {msg}
    
    </div>
  )

};

export default ValidationComponent;