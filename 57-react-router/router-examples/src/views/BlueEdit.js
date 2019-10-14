import React from 'react';

export const BlueEdit = (props) =>  {
  console.log(props)
  return (
    <div style={stylesheet}>
        <h1>A Blue Edit Page for {props.match.params.id}</h1>
    </div>
  );
}
 

const stylesheet = {
    margin: '0px',
    padding: '10px',
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white',
    width: '100vw',
    height: '100vh'
}