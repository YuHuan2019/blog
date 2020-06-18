import React from "react"
import ReactDom from "react-dom";
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import App from './App'


ReactDom.render(
    <Router>
        <Switch>
            <Route path="/" component={App}/>
        </Switch>
    </Router>
    ,document.getElementById("root")
);

