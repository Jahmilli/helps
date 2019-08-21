import React from 'react';
import { FormControlLabel, Checkbox, TextField } from '@material-ui/core';

interface RegistrationCheckboxProps {
    id: string;
    index: number;
    label: string;
    updateEducationCheckbox: Function;
    value: any;
    updateMark: Function;
    classes: any;
}
const RegistrationCheckbox: React.FunctionComponent<RegistrationCheckboxProps> = ({ 
    id, index, label, value, updateEducationCheckbox, updateMark, classes
}) => (
    <div className={classes.educationForm}>
        <div className={classes.educationFormLeft}>
            <FormControlLabel
                control={<Checkbox onChange={updateEducationCheckbox(index)} value={id} />}
                label={label}
                />
        </div>
        <div className={classes.educationFormRight}>
            <TextField
                type="number"
                style={ value.isChecked ? {visibility: 'visible'} : {visibility: 'hidden'}}
                label="Mark"
                className={classes.textField}
                id={id}
                value={value.mark}
                onChange={updateMark(index)}
                />  
        </div>
    </div>
);

export default RegistrationCheckbox;