import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component";

import './App.css';

export const HatsPage = (props) =>{
    console.log(props);
    return(
        <div>
            <h1>HATS PAGE</h1>
        </div>
    )

};

function App() {
  return (     // using Switch ensures that as long as we have one route matching no other component will be rendered on the screen but just the component with matching route
    <div>
        <Switch>
            <Route exact path={`/`} component={HomePage}  />
            <Route path={`/hats`} component={HatsPage}/>
        </Switch>

    </div>
  );
}

export default App;

