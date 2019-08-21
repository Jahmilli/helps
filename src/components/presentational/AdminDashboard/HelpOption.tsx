import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

interface HelpOptionProps {
    id: string;
    label: string;
    handleCheckboxChange: Function;
}

const HelpOption:React.FunctionComponent<HelpOptionProps> = ({ id, label, handleCheckboxChange }) => (
    <FormControlLabel
        key={id}
        value={id}
        control={<Checkbox  color="primary" value={id} onChange={handleCheckboxChange(id)}/>}
        label={label}
        labelPlacement="end"
        />
);

export default HelpOption;