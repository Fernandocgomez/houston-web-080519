import React, { useState, useEffect } from 'react';
import { useFetch } from './myHooks'

function App(){

    let [user, updateUser ] = useFetch('http://localhost:3001/users/1', {})
   
    return (
      <div>
      <input value={user.firstName} onChange={(e) => {
        updateUser({
          ...user,
          firstName: e.target.value
        })
      }}type="text" />
      <input value={user.lastName} onChange={(e) => {
         updateUser({
          ...user,
          lastName: e.target.value
        })
      }}type="text" />
      </div>
    )
}

export default App;
