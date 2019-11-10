import React from 'react';

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super();
        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.setState({email : '', password : ''});
    };
    handleChange = e =>{
       const { name, value } = e.target;
       this.setState({ [name] : value });   // dynamically setting the state, here for each input field we do not need different function to update the state
    };                                            // as we destructure out the name and value of the input field and then for each input from which we call handleChange function
                                                  // we set the value specifically..
    render() {
        return (
            <div className={`sign-in`}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name={`email`}
                        type={`email`}
                        value={this.state.email}
                        label={`Email`}
                        required />
                    <FormInput
                        handleChange={this.handleChange}
                        name={`password`}
                        type={`password`}
                        value={this.state.password}
                        label={`Password`}
                        required />
                    <div className={`buttons`}>
                        <CustomButton type={`submit`}>SIGN IN</CustomButton>
                        <CustomButton
                            onClick={signInWithGoogle}
                            isGoogleSignIn>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
// here in line 46 the children of CustomButton is 'SIGN IN' text written on the button
export default SignIn;
