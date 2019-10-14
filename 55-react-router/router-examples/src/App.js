import React from 'react';
import { GreenIndex } from './views/GreenIndex'
import { PurpleDetail } from './views/PurpleDetail'
import { BlueEdit } from './views/BlueEdit'

import { BrowserRouter, Route } from 'react-router-dom'

// users show (Rails):
// get('/users/:id', to: 'users#show' )

const App  = () => (
    <div>
      <BrowserRouter>
        <Route exact path="/"  component={GreenIndex}/>
        <Route exact path="/:id/edit" component={BlueEdit}/>
        <Route exact path="/:id/detail" component={PurpleDetail} />
      </BrowserRouter>
    </div>
)

// function AdminRouter(){
//   return (
//     <div>
//          <NavBar />
//          <Route exact path="/admin/edit" component={BlueEdit}/>
//          <Route exact path="/admin/edit" component={PurpleDetail} />
//     </div>
//   )
// }

export default App;