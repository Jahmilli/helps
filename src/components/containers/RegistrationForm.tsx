import React, { useState } from 'react';
import { Button, Grid, TextField, Typography, Select, MenuItem, OutlinedInput, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface UserDetails {
    username: string;
    password: string;
}

interface RegistrationFormProps {
    auth: any;
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
    registrationLockup: {        
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
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const RegistrationForm: React.FunctionComponent<RegistrationFormProps> = ({auth}) => {
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  function handleChange(event: any) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
    
    
    const classes = useStyles();
    return (
        <div style={{ display: 'flex'}}>
            <Grid container direction="column">        
                <Grid container item spacing={0} justify="center" >
                    <Grid item xs={12} className={classes.gridLockup}>
                        <div className={classes.registrationLockup}>
                            <Typography className={classes.title} variant="h2">Student Registration</Typography>
                            <Typography className={classes.textFieldHeader} variant="body1">Student ID</Typography>
                            <TextField
                                defaultValue="12345678"
                                className={classes.textField}
                                id="outlined-name"
                                variant="filled"
                                />
                            <Typography className={classes.textFieldHeader} variant="body1">Student Name</Typography>
                            <TextField
                                defaultValue="Full name"
                                id="outlined-name"
                                variant="filled"
                                />
                            <Typography className={classes.textFieldHeader} variant="body1">Preferred Name</Typography>
                            <TextField
                                defaultValue="First name"
                                id="outlined-name"
                                variant="filled"
                                />
                            <Typography className={classes.textFieldHeader} variant="body1">Faculty</Typography>
                            <TextField
                                defaultValue="Engineering"
                                id="outlined-name"
                                variant="filled"
                                />
                            <Typography className={classes.textFieldHeader} variant="body1">Course ID</Typography>
                            <TextField
                                defaultValue="C100026"
                                id="outlined-name"
                                variant="filled"
                                />
                            <Typography className={classes.textFieldHeader} variant="body1">Email</Typography>
                            <TextField
                                defaultValue="Student123@student.uts.edu.au"
                                id="outlined-name"
                                variant="filled"
                                />
                            <Typography className={classes.textFieldHeader} variant="body1">Best Contact no</Typography>
                            <TextField
                                defaultValue="0412345678"
                                id="outlined-name"
                                variant="filled"
                                />
                            <Typography className={classes.textFieldHeader} variant="body1">DOB</Typography>
                            <TextField
                                defaultValue="01/01/2000"
                                id="outlined-name"
                                variant="filled"
                                />
                            <Typography className={classes.textFieldHeader} variant="body1">Gender</Typography>
                            <Select
                                value={values.age}
                                onChange={handleChange}
                                input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
                                >
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                                <MenuItem value={30}>Other</MenuItem>
                            </Select>
                            <Typography className={classes.textFieldHeader} variant="body1">Degree</Typography>
                            <Select
                                value={values.age}
                                onChange={handleChange}
                                input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
                                >
                                <MenuItem value={10}>Undergraduate</MenuItem>
                                <MenuItem value={20}>Postgraduate</MenuItem>
                            </Select>
                            <Typography className={classes.textFieldHeader} variant="body1">Status</Typography>
                            <Select
                                value={values.age}
                                onChange={handleChange}
                                input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
                                >
                                <MenuItem value={10}>Resident</MenuItem>
                                <MenuItem value={20}>International</MenuItem>
                            </Select>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default RegistrationForm;