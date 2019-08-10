import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import StudentNavbar from '../presentational/StudentNavbar';
import logo from '../../images/uts-logo.png';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    logo: {
        height: '10%',
        width: '10%'
    }
  }));

const StudentHomePage: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <div>
            <img src={logo} className={classes.logo} alt="UTS Logo" />
            <Typography variant="h2">UTS: HELPS</Typography>
            <StudentNavbar />
        </div>
    );
};

export default StudentHomePage;