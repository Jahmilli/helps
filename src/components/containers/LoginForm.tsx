import React, { useState } from 'react';
import { Button, Typography, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import Auth from '../../logic/functions/core/Auth';
import { loginFormStyles } from './styles';

interface UserDetails {
    username: string;
    password: string;
}

interface LoginFormProps {
    auth: Auth;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({auth}) => {
    const initialUserDetailsState = {} as UserDetails;
    const [userDetails, setUserDetails] = useState<UserDetails>(initialUserDetailsState);
    
    const handleChange = (name: string) => (event: any) => {
        setUserDetails({
            ...userDetails,
            [name]: event.target.value
        });
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        auth.login(userDetails.username, userDetails.password);
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
                            <InputLabel htmlFor="password-field">Email address</InputLabel>
                            <Input 
                                aria-describedby="password-field" 
                                type="password"
                                id="password"
                                onChange={handleChange('password')}
                                value={userDetails.password}
                            />
                        </FormControl>
                        <Button className={classes.useWhite} id="signInButton" color="primary" size="large" type="submit">Sign In</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;