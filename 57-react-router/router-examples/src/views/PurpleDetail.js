import React from 'react';

export const PurpleDetail = (props) =>  {
  return (
    <div style={stylesheet}>
        <h1>A Purple Detail Page</h1>
    </div>
  );
}


const stylesheet = {
    margin: '0px',
    padding: '10px',
    backgroundColor: 'purple',
    textAlign: 'center',
    color: 'white',
    width: '100vw',
    height: '100vh'
}