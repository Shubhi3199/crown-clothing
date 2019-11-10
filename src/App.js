import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import './App.css';

class App extends React.Component{
    constructor(){
        super();
        this.state= {
            currentUser : null
        };
    }
    unSubscribeFromAuth = null;
    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged( async user => {
            this.setState({ currentUser: user });
            console.log(this.state.currentUser);
            createUserProfileDocument(user);
        })
    }
    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (     // using Switch ensures that as long as we have one route matching no other component will be rendered on the screen but just the component with matching route
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path={`/`} component={HomePage}  />
                    <Route path={`/shop`} component={ShopPage}/>
                    <Route path={`/signIn`} component={SignInSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;

