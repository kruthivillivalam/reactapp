import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from '../main.js';
import Categories from '../Components/Categories';
import Home from '../Components/Home'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Routes = () => (
    
  <main>
     <Switch>
     <Route exact path="/" component={App}/>
     <Route exact path="/Categories" component={Categories}/>
     <Route exact path="/home" component={Home}/>
 </Switch>
  </main>
)

export default Routes