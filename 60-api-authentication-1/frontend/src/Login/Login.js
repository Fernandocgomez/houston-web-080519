import React, { useState } from 'react'
  
export function Login(){

    const [ user, changeUser ] = useState({
        email: '',
        password: ''
    })

    return (
        <div>
            <h1>Login</h1>
            <div>
                <label>Email</label>
                <input type="text" value={user.email} onChange={ e => changeUser({ email: e.target.value })} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={user.password} onChange={ e => changeUser({ password: e.target.value })} />
            </div>
            <input type="submit" />
        </div>
    )
}  