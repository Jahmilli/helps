import React, { useState } from 'react';
import { Button, Typography, FormControl, InputLabel, Input, FormHelperText, IconButton, TextField } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Close as CloseIcon } from '@material-ui/icons';
import Auth from '../../logic/functions/core/Auth';
import { loginFormStyles } from './styles';
import logo from '../../images/uts-logo.png';
import MySnackbarContentWrapper from '../presentational/SnackBarContentWrapper';

interface LoginFormProps {
    auth: Auth;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({ auth }) => {
    const initialUserDetailsState = {
        email: '',
        password: ''
    };
    
    const handleSubmit = async (values: any) => {    
        console.log('values are ', values);
        try {
            await auth.login(values.email, values.password);
        } catch (err) {
            alert('Login failed, please try again');
        }
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
                <Formik
                initialValues={initialUserDetailsState}
                validationSchema={SignupSchema}
                onSubmit={(values: any) => handleSubmit(values)}
                >
                {(props) => {
                const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <img src={logo} className={classes.logo} alt="UTS Logo" />
                        <Typography variant="h1" style={{fontSize: 32, fontWeight: 'bold', color: 'black', textAlign:'start'}}>Log In</Typography>
                        <TextField
                            className={classes.textfield}
                            label="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={(errors.email && touched.email) && errors.email}
                        />
                        <TextField
                            className={classes.textfield}
                            label="password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={(errors.password && touched.password) && errors.password}
                            // margin="normal"
                        />
                        {/* <ErrorMessage name="password" component="div" className={classes.fieldError}></ErrorMessage> */}
                        <button type="submit" className={classes.submitBtn}>Submit</button>
                    </form>
                )}}
                </Formik>
            </div>
        </div>
    );
};

export default LoginForm;