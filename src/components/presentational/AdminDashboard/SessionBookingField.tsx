import React from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';

interface SessionBookingFieldProps {
    id: string;
    title: string;
    value: string | undefined;
    handleChange: Function;
}

const SessionBookingField:React.FunctionComponent<SessionBookingFieldProps> = ({ id, title, value, handleChange }) => {
    return (
    <div>
        <FormControl key={id} fullWidth={true}>
            <InputLabel htmlFor={`${id}-field`}>{title}</InputLabel>
            <Input 
                aria-describedby={`${id}-field`} 
                id={id}
                onChange={handleChange(id)}
                value={value}
            />
        </FormControl>
    </div>
    );
};

export default SessionBookingField;