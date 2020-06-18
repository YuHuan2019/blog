import React from "react";
import { BrowserRouter as Router , Route , Switch, Redirect } from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';

export default function App(){
   return(
       <Router>
           <Switch>
               <Route path="/Login" component={Login} />
               <Route path="/Admin" component={Admin} />
               <Redirect to="/Admin"></Redirect>
           </Switch>
       </Router>
   )
}