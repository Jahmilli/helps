import React from 'react';
import { FormControl, FormHelperText, Grid, TextField, InputLabel, Input, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textField: {
        width: '100%',
        color: 'white'
    },
    gridLockup: {
        background: 'rgba(0,0,0,0.5)',
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
        display: 'block',
        clear: 'both',
        margin: '50px 0 10px 0'
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

const LoginForm: React.FunctionComponent = () => {
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
                            id="outlined-name"
                            label="example@email.com"
                            variant="filled"
                            />
                            <Typography className={classes.textFieldHeader} variant="body1">Password</Typography>
                            <TextField
                            className={classes.textField}
                            id="outlined-name"
                            label="Password123"
                            variant="filled"
                            />
                            <Typography className={classes.forgotPassword} variant="body1">Forgot Password?</Typography>
                            <Typography className={classes.signIn} variant="h5">Sign in!</Typography>
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