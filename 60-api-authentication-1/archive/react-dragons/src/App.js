import React from 'react';
import Home from './components/Home'
import Login from './components/Login';
import EditDragon from './components/EditDragon';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


// Making an Authenticated Request

// fetch('http://localhost:3000/dragons', {
//  headers: {
// 		Authorization: `Bearer ${localStorage.getItem('token')}`
//  }
// })
// 	.then( res => res.json())
// 	.then(console.log)


class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/edit-dragon/:id" component={EditDragon} />
            <Route path="/login" component={Login}/>
            <Route path="/dragons" component={Home}/>
            <Route path="/" render={() => <Redirect to="/login" />} />
        </Switch>
      </BrowserRouter>
    )
  }

}


export default App;
