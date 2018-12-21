import React from 'react';

const ValidationComponent = (props) => {

  let msg = null;
  if (props.length <5 && props.length != null) {
    msg = (<p>Text too short.</p>)
  } else if (props.length >= 5) {
    msg = (<p>Text long enough.</p>)
  }


  return (
    <div>
      <p>char length: {props.length}</p>

      {msg}


    </div>
  )

};

export default ValidationComponent;