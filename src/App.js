import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import './App.css';

function App() {
  return (     // using Switch ensures that as long as we have one route matching no other component will be rendered on the screen but just the component with matching route
    <div>
        <Header />
        <Switch>
            <Route exact path={`/`} component={HomePage}  />
            <Route path={`/shop`} component={ShopPage}/>
            <Route path={`/signIn`} component={SignInSignUpPage} />
        </Switch>
    </div>
  );
}

export default App;

