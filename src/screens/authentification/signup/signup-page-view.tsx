import React from 'react';
import Header from '../../../components/Header/header';
import LoginFormTitle from '../../../components/Authentification/Login-form-title/login-form-title';

const SignUpPageView = ({ children, backStep, formTitle, navigation }: any) => {

    return (
        <>
            <Header navigation={navigation} backStep={backStep}/>
            <LoginFormTitle title={formTitle} />
            {children}
        </>
    );
}
export default SignUpPageView;