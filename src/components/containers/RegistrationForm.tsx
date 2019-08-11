import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Radio, RadioGroup, TextField, Typography, FormGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import studentRegistrationFields from './__data__/data.studentRegistrationFields.json';
import studentRegistrationEducationFields from './__data__/data.studentRegistrationEducationFields.json';

interface RegistrationFormProps {

}

interface UserDetails {
    [title: string]: string;
    fullName: string;
    preferredName: string;
    faculty: string;
    courseID: string;
    email: string;
    preferredContactNumber: string;
    dateOfBirth: string;
    age: string;
    gender: string;
    degree: string;
    status: string;
}

interface EducationalBackground {
    [hsc: string]: Education;
    ielts: Education;
    toefl: Education;
    tafe: Education;
    cult: Education;
    insearchDeep: Education;
    insearchDiploma: Education;
    foundationCourse: Education;
}

class Education {
    title = '';
    mark = 0;
    isChecked = false;
}

type Field = {
    title: string;
    label: string;
    [id: string]: string;
}

const useStyles = makeStyles(theme => ({
    registrationLockup: {
        display: 'flex',
        justifyContent: 'space-between',
        flexFlow: 'row nowrap',
        margin: '0 10%'
    },
    textField: {
        width: '100%'
    },
    input: {
        color: 'black'
    },
    floatingLabelFocusStyle: {
        color: 'black'
    },
    textFieldHeader: {
        margin: '10px 0 0 0',
        color: 'black' 
    },
    leftLockup: {

    },
    rightLockup: {

    },
    educationForm: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px'
    },
    educationFormLeft: {
        display: 'flex',
    },
    educationFormRight: {
        display: 'flex',
        alignItems: 'center'
    },
    educationText: {
        color: 'black',
        marginRight: '10px'
    }
}));


const RegistrationForm: React.FunctionComponent<RegistrationFormProps> = () => {
    const userDetailsInitialState = {} as UserDetails;
    const educationInitialState: EducationalBackground = {
        hsc: new Education(),
        ielts: new Education(),
        toefl: new Education(),
        tafe: new Education(),
        cult: new Education(),
        insearchDeep: new Education(),
        insearchDiploma: new Education(),
        foundationCourse: new Education()
    };
    const [values, setValues] = useState<UserDetails>(userDetailsInitialState);
    const [educationalBackground, setEducationalBackground] = useState<EducationalBackground>(educationInitialState);

    const handleUserDetailsChange = (name: string) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value
        });
    }
    
    const updateEducationCheckbox = (name: any) => (event: any) => {
        const details = {...educationalBackground};
        details[name].isChecked = !details[name].isChecked;
        setEducationalBackground(details);
    }

    const updateMark = (name: any) => (event: any) => {
        const details = {...educationalBackground};
        details[name].mark = event.target.value
        setEducationalBackground(details);
    }

    const classes = useStyles();
    return (
            <div className={classes.registrationLockup}>
                <div className={classes.leftLockup}>
                    {studentRegistrationFields.map((field: Field, index: number) => {
                        return (
                            <div>
                                <Typography key={index} className={classes.textFieldHeader} variant="body1">{field.title}</Typography>
                                <TextField
                                    label={field.label}
                                    className={classes.textField}
                                    id={field.id}
                                    variant="filled"
                                    value={values[field.id]}
                                    onChange={handleUserDetailsChange(field.id)}
                                    /> 
                            </div>
                        );
                    })}
                    
                    <Typography className={classes.textFieldHeader} variant="body1">Gender</Typography>
                    <RadioGroup aria-label="position" name="gender" value={values.gender} onChange={handleUserDetailsChange("gender")} row>
                        <FormControlLabel
                            value="male"
                            className={classes.input}
                            control={<Radio color="primary" />}
                            label="Male"
                            labelPlacement="top"
                            />
                        <FormControlLabel
                            value="female"
                            className={classes.input}
                            control={<Radio color="primary" />}
                            label="Female"
                            labelPlacement="top"
                            />
                        <FormControlLabel
                            value="other"
                            className={classes.input}
                            control={<Radio color="primary" />}
                            label="Other"
                            labelPlacement="top"
                            />
                    </RadioGroup>
                    <Typography className={classes.textFieldHeader} variant="body1">Degree</Typography>
                    <RadioGroup aria-label="position" name="degree" value={values.degree} onChange={handleUserDetailsChange("degree")}row>
                        <FormControlLabel
                            value="undergraduate"
                            className={classes.input}
                            control={<Radio color="primary" />}
                            label="Undergraduate"
                            labelPlacement="top"
                            />
                        <FormControlLabel
                            className={classes.input}
                            value="postgraduate"
                            control={<Radio color="primary" />}
                            label="Postgraduate"
                            labelPlacement="top"
                            />
                    </RadioGroup>
                    <Typography className={classes.textFieldHeader} variant="body1">Status</Typography>
                    <RadioGroup aria-label="position" name="status" value={values.status} onChange={handleUserDetailsChange("status")}row>
                        <FormControlLabel
                            value="resident"
                            className={classes.input}
                            control={<Radio color="primary" />}
                            label="Resident"
                            labelPlacement="top"
                            />
                        <FormControlLabel
                            value="international"
                            className={classes.input}
                            control={<Radio color="primary" />}
                            label="International"
                            labelPlacement="top"
                            />
                    </RadioGroup>
                </div>
                <div className={classes.rightLockup}>
                    <FormGroup>
                        {studentRegistrationEducationFields.map((field, index) => {
                            return <div className={classes.educationForm}>
                                        <div className={classes.educationFormLeft}>
                                            <FormControlLabel key={index}
                                                control={<Checkbox checked={educationalBackground[field.id].isChecked} onChange={updateEducationCheckbox(field.id)} value={field.id} />}
                                                label={field.label}
                                                />
                                        </div>
                                        <div className={classes.educationFormRight}>
                                            <TextField
                                            type="number"
                                            style={ educationalBackground[field.id].isChecked ? {visibility: 'visible'} : {visibility: 'hidden'}}
                                            label="Mark"
                                            className={classes.textField}
                                            id={field.id}
                                            value={values[field.id]}
                                            onChange={updateMark(field.id)}
                                            />  
                                        </div>
                                    </div>
                        })}
                    </FormGroup>
                <Typography variant="h2" className={classes.input} onClick={() => {
                    console.log(values);
                    console.log(educationalBackground);
                }}>Submit</Typography>
                </div>
            </div>
    );
};

export default RegistrationForm;