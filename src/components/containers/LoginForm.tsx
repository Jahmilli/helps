import React, { useState } from 'react';
import { Button, Typography, FormControl, InputLabel, Input, FormHelperText, IconButton, TextField } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Close as CloseIcon } from '@material-ui/icons';
import Auth from '../../logic/functions/core/Auth';
import { loginFormStyles } from './styles';
import MySnackbarContentWrapper from '../presentational/SnackBarContentWrapper';

interface LoginFormProps {
    auth: Auth;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({ auth }) => {
    const initialUserDetailsState = {
        email: 'test@test.com',
        password: 'Password123'
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
            .required('Email Required'),
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
                        <Form>
                            <Typography variant="body1">Email</Typography>
                            <Field name="email" />
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                            <Typography variant="body1">Password</Typography>
                            <Field name="password" />
                            {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;