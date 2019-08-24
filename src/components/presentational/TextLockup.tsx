import * as React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface TextLockup {
    label: string;
    value: string;
}

export const useStyles = makeStyles({
    lockup: {
        display: 'inline-block'
    }
});

const TextLockup:React.FunctionComponent<TextLockup> = ({ label, value }) => {
    const classes = useStyles();
    return (
        <Typography component="div">
            <Box className={classes.lockup}>{label}</Box>
            <Box className={classes.lockup} fontWeight="fontWeightBold" m={1}>{value}</Box>
        </Typography>
    );
};

export default TextLockup;