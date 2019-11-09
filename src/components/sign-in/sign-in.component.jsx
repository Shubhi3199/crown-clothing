import React from 'react';

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

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

                    <CustomButton type={`submit`}>SIGN IN</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
