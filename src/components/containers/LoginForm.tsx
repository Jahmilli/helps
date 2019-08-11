import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Auth from '../../logic/functions/core/Auth';

interface UserDetails {
    username: string;
    password: string;
}

interface LoginFormProps {
    auth: Auth;
}

const useStyles = makeStyles(theme => ({
    textField: {
        width: '100%'
     },
    input: {
        color: 'white'
    },
    floatingLabelFocusStyle: {
        color: 'white'
    },
    gridLockup: {
        background: 'rgba(0,0,0,0.4)',
        textAlign: 'center',
        margin: '7% 0 0 0'
    },
    loginLockup: {        
        textAlign: 'center',
        margin: '0 20%'
    },
    title: {
        margin: '10px 0'
    },
    textFieldHeader: {
        float: 'left',
        margin: '10px 0 0 0',                
    },
    forgotPassword: {
        float: 'right',
    },
    signIn: {
        margin: '50px 0 10px 0',
        color: 'white',
        justifyContent: 'center'
    },
    createAccountLink: {
        display: 'inline-block',
        margin: '5px 3px'
    },
    questionsLink: {
        display: 'inline-block',
        margin: '5px 3px'
    }
}));


const LoginForm: React.FunctionComponent<LoginFormProps> = ({auth}) => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: ''
    });
    
    function login(userDetails: UserDetails) {
        auth.login(userDetails.username, userDetails.password);
    }
    
    const handleChange = (name: any) => (event: any) => {
        setUserDetails({
            ...userDetails,
            [name]: event.target.value
        });
    }
    
    const classes = useStyles();
    return (
        <div style={{ display: 'flex'}}>
            <Grid container direction="column">        
                <Grid container item spacing={0} justify="center" >
                    <Grid item xs={4} className={classes.gridLockup}>
                        <div className={classes.loginLockup}>
                            <Typography className={classes.title} variant="h2">Login</Typography>
                            <Typography className={classes.textFieldHeader} variant="body1">Email Address</Typography>
                            <TextField
                                className={classes.textField}
                                InputProps={{className: classes.input}}
                                InputLabelProps={{
                                    className: classes.floatingLabelFocusStyle,
                                }}
                                id="username"
                                label="example@email.com"
                                variant="filled"
                                onChange={handleChange('username')}
                                value={userDetails.username}
                                />
                            <Typography className={classes.textFieldHeader} variant="body1">Password</Typography>
                            <TextField
                                type="password"
                                className={classes.textField}
                                InputProps={{className: classes.input}}
                                InputLabelProps={{
                                    className: classes.floatingLabelFocusStyle,
                                }}
                                id="password"
                                label="Password123"
                                variant="filled"
                                onChange={handleChange('password')}
                                value={userDetails.password}
                                />
                            <Typography className={classes.forgotPassword} variant="body1">Forgot Password?</Typography>
                            <Button className={classes.signIn} id="signInButton" color="primary" size="large" onClick={() => login(userDetails)}>Sign In</Button>
                            <Typography className={classes.createAccountLink} variant="body1">Don't have an account?</Typography>
                            <Typography className={classes.createAccountLink} variant="body1">Click here</Typography>
                            <Typography className={classes.questionsLink} variant="body1">Have questions?</Typography>
                            <Typography className={classes.questionsLink} variant="body1">Check out our FAQ!</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default LoginForm;