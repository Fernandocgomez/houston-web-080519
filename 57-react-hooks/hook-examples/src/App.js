import React, { useState, useEffect } from 'react';

function App() {
  // let result = useState("hi")
  // let message = result[0]
  // let setState = result[1]

  // hooks are a way to communicate with react directly

  let [ message, changeMessage ] = useState("hi")

  let [ name, changeName ] = useState("hi")

  // componentDidMount
  //  - Called after the constructor and after the first render methods
  //  - Its a lifecycle method

  function myEffect(){
    
  }

  // React watches this array and re-runs the effect if it changes:
  useEffect(myEffect, [ ]) 

  console.log("Rendering")

  return (
    <div>
      <div>
        <label>User Name</label>
        <input value={name} onChange={e => changeName(e.target.value)} type="text" />
      </div>
      <div>
        <label>Message</label>
        <input value={message} onChange={e => changeMessage(e.target.value)} type="text" />
      </div>
    </div>
  )
}


export default App;
