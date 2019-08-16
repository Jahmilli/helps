import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Radio, RadioGroup, TextField, Typography, FormGroup, Button } from '@material-ui/core';
import studentRegistrationFields from './__data__/data.studentRegistrationFields.json';
import studentRegistrationEducationFields from './__data__/data.studentRegistrationEducationFields.json';
import { registrationFormStyles } from './styles';
import { StudentDetails, Course } from '../../logic/domains/studentDetails.domain';
import registerStudent from '../../logic/functions/registerStudent';

type Field = {
    [title: string]: string;
    label: string;
    id: string;
}
type EducationField = {
    [label: string]: string;
    id: string;
}

const RegistrationForm: React.FunctionComponent = () => {
    const studentDetailsInitialState = {} as StudentDetails;
    
    const educationInitialState: Array<Course> = [
        new Course("hsc"),
        new Course("ielts"),
        new Course("toefl"),
        new Course("tafe"),
        new Course("cult"),
        new Course("insearchDeep"),
        new Course("insearchDiploma"),
        new Course("foundationCourse")
    ];

    studentDetailsInitialState.education = educationInitialState;

    const [values, setValues] = useState<StudentDetails>(studentDetailsInitialState);

    const handleStudentDetailsChange = (details: string) => (event: any) => {
        setValues({
            ...values,
            [details]: event.target.value
        });
    }
    
    const updateEducationCheckbox = (index: number) => (event: any) => {
        const details = {...values};
        details.education[index].isChecked = !details.education[index].isChecked;
        setValues(details);
    }

    const updateMark = (index: number, name: string) => (event: any) => {
        const details = {...values};
        details.education[index].mark = event.target.value
        setValues(details);
    }

    const submitStudentDetails = (event: any) => {
        event.preventDefault();
        console.log(values);
        registerStudent(values);
    }

    const classes = registrationFormStyles();
    return (
        <form className={classes.registrationLockup}>
            <div className={classes.leftLockup}>
                {studentRegistrationFields.map((field: Field, index: number) => {
                    return (
                        <div key={index}>
                            <Typography className={classes.textFieldHeader} variant="body1">{field.title}</Typography>
                            <TextField
                                label={field.label}
                                className={classes.textField}
                                id={field.id}
                                variant="filled"
                                value={values[field.id]}
                                onChange={handleStudentDetailsChange(field.id)}
                                /> 
                        </div>
                    );
                })}
                
                <Typography className={classes.textFieldHeader} variant="body1">Gender</Typography>
                <RadioGroup aria-label="position" name="gender" value={values.gender} onChange={handleStudentDetailsChange("gender")} row>
                    <FormControlLabel value="male"
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
                <RadioGroup aria-label="position" name="degree" value={values.degree} onChange={handleStudentDetailsChange("degree")}row>
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
                <RadioGroup aria-label="position" name="status" value={values.status} onChange={handleStudentDetailsChange("status")}row>
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
                    {studentRegistrationEducationFields.map((field: EducationField, index: number) => {
                        return <div key={index} className={classes.educationForm}>
                                    <div className={classes.educationFormLeft}>
                                        <FormControlLabel
                                            control={<Checkbox checked={values.education[index].isChecked} onChange={updateEducationCheckbox(index)} value={field.id} />}
                                            label={field.label}
                                            />
                                    </div>
                                    <div className={classes.educationFormRight}>
                                        <TextField
                                        type="number"
                                        style={ values.education[index].isChecked ? {visibility: 'visible'} : {visibility: 'hidden'}}
                                        label="Mark"
                                        className={classes.textField}
                                        id={field.id}
                                        value={values[field.id]}
                                        onChange={updateMark(index, field.id)}
                                        />  
                                    </div>
                                </div>
                    })}
                </FormGroup>
                <Button className={classes.input} id="submitStudentDetailsBtn" color="primary" size="large" type="submit" onClick={submitStudentDetails}>Submit</Button>
            </div>
        </form>
    );
};

export default RegistrationForm;