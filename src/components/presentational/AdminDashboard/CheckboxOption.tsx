import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

interface CheckboxOptionProps {
    id: string;
    label: string;
    value: boolean;
    handleCheckboxChange: Function;
}

const CheckboxOption:React.FunctionComponent<CheckboxOptionProps> = ({ id, label, value, handleCheckboxChange }) => (
    <FormControlLabel
        control={<Checkbox value={id} onChange={handleCheckboxChange(id)}/>}
        label={label}
        labelPlacement="end"
        />
);

export default CheckboxOption;