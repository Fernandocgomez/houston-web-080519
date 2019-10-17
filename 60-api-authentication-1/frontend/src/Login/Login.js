import React, { useState } from 'react'
  
export function Login(){

    const [ user, changeUser ] = useState({
        username: '',
        password: ''
    })

    function handleSubmit(){

    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <label>Username</label>
                <input type="text" value={user.username} onChange={ e => changeUser({ username: e.target.value })} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={user.password} onChange={ e => changeUser({ password: e.target.value })} />
            </div>
            <input type="submit" onClick={handleSubmit} />
        </div>
    )
}  