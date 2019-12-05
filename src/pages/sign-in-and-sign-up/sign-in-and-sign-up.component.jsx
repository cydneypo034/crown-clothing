import React from 'react';

import SignInPage from '../../components/sign-in/sign-in.component'
import SignUpPage from '../../components/sign-up/sign-up.component'

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignInPage />
        <SignUpPage />
    </div>
)

export default SignInAndSignUpPage;