import React from 'react';
import { Typography, TextField } from '@material-ui/core';

interface RegistrationFieldProps {
    id: string;
    title: string;
    label: string;
    value: string;
    handleChange: Function;
    classes: any;
}

const RegistrationField: React.FunctionComponent<RegistrationFieldProps> = ({ id, title, label, value, handleChange, classes}) => (
    <div>
        <Typography className={classes.textFieldHeader} variant="body1">{title}</Typography>
        <TextField
            label={label}
            className={classes.textField}
            id={id}
            variant="filled"
            value={value}
            onChange={handleChange(id)}
            /> 
    </div>
);

export default RegistrationField;