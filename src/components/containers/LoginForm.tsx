import React, { useState } from 'react';
import { Button, Typography, FormControl, InputLabel, Input, Icon, FormHelperText, Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import Auth from '../../logic/functions/core/Auth';
import { loginFormStyles } from './styles';
import MySnackbarContentWrapper from '../presentational/SnackBarContentWrapper';

interface UserDetails {
    username: string;
    password: string;
    authFailed: boolean;
}

interface LoginFormProps {
    auth: Auth;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({ auth }) => {
    const initialUserDetailsState = {} as UserDetails;
    const [userDetails, setUserDetails] = useState<UserDetails>(initialUserDetailsState);
    
    const handleChange = (name: string) => (event: any) => {
        setUserDetails({
            ...userDetails,
            [name]: event.target.value
        });
    }
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            await auth.login(userDetails.username, userDetails.password);
        } catch (err) {
            setUserDetails({
                ...userDetails,
                authFailed: true
            })
        }
    }

    const handleIconClick = (event: any) => {
        setUserDetails({
            ...userDetails,
            authFailed: false
        })
    }
    
    const classes = loginFormStyles();
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div className={classes.gridLockup}>
                <div className={classes.loginLockup}>
                <form onSubmit={handleSubmit}>
                    <Typography className={classes.title} variant="h2">Login</Typography>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="username-field">Email address</InputLabel>
                            <Input 
                            aria-describedby="username-field"
                                id="username"
                                onChange={handleChange('username')}
                                value={userDetails.username}
                            />
                            <FormHelperText id="username-field">We'll never share your email.</FormHelperText>
                        </FormControl>

                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="password-field">Password</InputLabel>
                            <Input 
                                aria-describedby="password-field" 
                                type="password"
                                id="password"
                                onChange={handleChange('password')}
                                value={userDetails.password}
                            />
                        </FormControl>
                        <Button className={classes.useWhite} id="signInButton" color="primary" size="large" type="submit">Sign In</Button>
                        { userDetails.authFailed ? 
                        <MySnackbarContentWrapper
                            variant="error"
                            className={classes.margin}
                            message="This is an error message!">
                                <IconButton key="close" aria-label="close" color="inherit" onClick={handleIconClick}>
                                    <CloseIcon className={classes.icon} />
                                </IconButton>
                            </MySnackbarContentWrapper>
                         :
                        ''
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;