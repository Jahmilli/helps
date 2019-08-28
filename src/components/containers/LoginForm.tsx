import React, { useState } from 'react';
import { Button, Typography, FormControl, InputLabel, Input, FormHelperText, IconButton, TextField } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Close as CloseIcon } from '@material-ui/icons';
import Auth from '../../logic/functions/core/Auth';
import { loginFormStyles } from './styles';
import logo from '../../images/uts-logo.png';
import MySnackbarContentWrapper from '../presentational/SnackBarContentWrapper';
import { fontSize } from '@material-ui/system';

interface LoginFormProps {
    auth: Auth;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({ auth }) => {
    const initialUserDetailsState = {
        email: '',
        password: ''
    };
    
    const handleSubmit = async (values: any) => {    
        // event.preventDefault();
        console.log('values are ', values);
        try {
            await auth.login(values.email, values.password);
        } catch (err) {
            alert('failed ' + err);
        }
    }


    const validateForm = (values: any) => {
        let errors: any = {};
        if (!values.email) {
          errors.email = 'Email Required';
        } 
        if (!values.password) {
            errors.password = 'Password Required';
        }
        return errors;
    }

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Student Email Required'),
        password: Yup.string()
            .required('Password Required')
    });
    
    
    const classes = loginFormStyles();
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div className={classes.gridLockup}>
                <div className={classes.loginLockup}>
                    <Formik
                    initialValues={initialUserDetailsState}
                    validationSchema={SignupSchema}
                    onSubmit={(values: any) => handleSubmit(values)}
                    >
                    {({ errors, touched }) => (
                        <Form style={{width:'30%'}}>
                            <img src={logo} className={classes.logo} alt="UTS Logo" />
                            <Typography variant="h1" style={{fontSize: 32, fontWeight: 'bold', color: 'black', textAlign:'start'}}>Log In</Typography>
                            <Typography variant="body1" style={{color: 'black', textAlign:'start'}}>Email</Typography>
                            <Field name="email" type="email" className={errors.email && touched.email ? classes.textInputError : classes.textInput}/>
                            <ErrorMessage name="email" component="div" className={classes.fieldError}></ErrorMessage>
                            <Typography variant="body1" style={{color: 'black', textAlign:'start'}}>Password</Typography>
                            <Field name="password" type="password" className={errors.password && touched.password ? classes.textInputError : classes.textInput}/>
                            <ErrorMessage name="password" component="div" className={classes.fieldError}></ErrorMessage>
                            <button type="submit" className={classes.submitBtn}>Submit</button>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;