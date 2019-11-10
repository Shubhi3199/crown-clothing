import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) =>(  // children === 'SIGN IN' & otherProps === type
    <button className = {`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} { ...otherProps }>
        { children }
    </button>
);
export default CustomButton;
