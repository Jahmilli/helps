import React from 'react';
import { Button, Typography, TextField } from '@material-ui/core';
import Auth from '../../logic/functions/core/Auth';
import logo from '../../images/uts-logo.png';

interface LoginFormProps {
    classes: any;
    formikProps: any;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({ classes, formikProps }) => {
    return (
        <form onSubmit={formikProps.handleSubmit}>
            <img src={logo} className={classes.logo} alt="UTS Logo" />
            <Typography variant="h1" style={{fontSize: 32, fontWeight: 'bold', color: 'black', textAlign:'start'}}>Log In</Typography>
            <TextField
                className={classes.textfield}
                label="email"
                name="email"
                value={formikProps.values.email}
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                helperText={(formikProps.errors.email && formikProps.touched.email) && formikProps.errors.email}
            />
            <TextField
                className={classes.textfield}
                label="password"
                name="password"
                type="password"
                value={formikProps.values.password}
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                helperText={(formikProps.errors.password && formikProps.touched.password) && formikProps.errors.password}
            />
            <button type="submit" className={classes.submitBtn}>Submit</button>
        </form>
    );
};

export default LoginForm;