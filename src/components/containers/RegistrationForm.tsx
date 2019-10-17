import React, { useState } from 'react';
import { FormControlLabel, Radio, RadioGroup, Typography, FormGroup, Button } from '@material-ui/core';
import { registrationFormStyles } from './styles';
import { IStudentDetails, Course, IStudentSessionIds } from '../../logic/domains/studentDetails.domain';
import registerStudent from '../../logic/functions/registerStudent';
import Auth from '../../logic/functions/core/Auth.js';
import RegistrationField from '../presentational/StudentDashboard/RegistrationField';
import RegistrationCheckbox from '../presentational/StudentDashboard/RegistrationCheckbox';
import LanguageSelect from '../common/LanguageSelect';
import CountryOfOriginSelect from '../common/CountryOfOrigin';

interface RegistrationFormProps {
    auth: Auth;
}

const RegistrationForm: React.FunctionComponent<RegistrationFormProps> = ({ auth }) => {
    const courseTitles = ['hsc', 'ielts', 'toefl', 'tafe', 'cult', 'insearchDeep', 'insearchDiploma', 'foundationCourse'];
    const educationInitialState: Array<Course> = courseTitles.map((title: string) => new Course(title));
    const sessionObject = {
        sessionIds: [],
        workshopSessionIds: [],
    } as IStudentSessionIds;

    const studentDetailsInitialState = {
        email: '',
        studentId: '',
        fullName: '',
        preferredName: '',
        faculty: '',
        courseId: '',
        preferredContactNumber: '',
        dateOfBirth: '',
        gender: '',
        degree: '',
        status: '',
        language: '',
        countryOfOrigin: '',
        education: educationInitialState,
        upcomingSessions: sessionObject,
        previousSessions: sessionObject,
    } as IStudentDetails;

    const [values, setValues] = useState<IStudentDetails>(studentDetailsInitialState);

    const handleStudentDetailsChange = (details: string) => (event: any) => {
        setValues({
            ...values,
            [details]: event.target.value
        });
    }

    const updateEducationCheckbox = (index: number) => (event: any) => {
        const details = { ...values };
        details.education[index].isChecked = !details.education[index].isChecked;
        setValues(details);
    }

    const updateMark = (index: number) => (event: any) => {
        const details = { ...values };
        details.education[index].mark = event.target.value
        setValues(details);
    }

    const submitStudentDetails = async (event: any) => {
        event.preventDefault();
        try {
            let response: any = await registerStudent(values);
            await auth.updateUserMetaData(response._id, true);
            alert('Successfully registered');
        } catch (err) {
            // TODO: Don't use an alert, display using a Snackbar or something
            console.error('An error occured when registering', err);
            alert('An error occured during registration, please try a different email or try again later...');
        }
    }

    const classes = registrationFormStyles();
    return (
        <form className={classes.registrationLockup}>
            <div className={classes.leftLockup}>
                <RegistrationField id="studentId" title="Student ID" label="12345678" value={values.studentId} handleChange={handleStudentDetailsChange} classes={classes} />
                <RegistrationField id="email" title="Email" label="student123@student.uts.edu.au" value={values.email} handleChange={handleStudentDetailsChange} classes={classes} />
                <RegistrationField id="fullName" title="Student Name" label="Full Name" value={values.fullName} handleChange={handleStudentDetailsChange} classes={classes} />
                <RegistrationField id="preferredName" title="Preferred Name" label="First Name" value={values.preferredName} handleChange={handleStudentDetailsChange} classes={classes} />
                <RegistrationField id="faculty" title="Faculty" label="Engineering" value={values.faculty} handleChange={handleStudentDetailsChange} classes={classes} />
                <RegistrationField id="courseId" title="Course ID" label="C10026" value={values.courseId} handleChange={handleStudentDetailsChange} classes={classes} />
                <RegistrationField id="preferredContactNumber" title="Preferred Contact Number" value={values.preferredContactNumber} label="0412345678" handleChange={handleStudentDetailsChange} classes={classes} />
                <RegistrationField id="dateOfBirth" title="Date of Birth" label="01/01/2000" value={values.dateOfBirth} handleChange={handleStudentDetailsChange} classes={classes} />

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
                <RadioGroup aria-label="position" name="degree" value={values.degree} onChange={handleStudentDetailsChange("degree")} row>
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
                <RadioGroup aria-label="position" name="status" value={values.status} onChange={handleStudentDetailsChange("status")} row>
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
                <LanguageSelect handleChange={handleStudentDetailsChange} value={values.language} />
                <CountryOfOriginSelect handleChange={handleStudentDetailsChange} value={values.countryOfOrigin} />
            </div>
            <div className={classes.rightLockup}>
                <FormGroup>
                    <RegistrationCheckbox id="hsc" label="HSC" index={0} value={values.education[0]} updateEducationCheckbox={updateEducationCheckbox} updateMark={updateMark} classes={classes} />
                    <RegistrationCheckbox id="ielts" label="IELTS" index={1} value={values.education[1]} updateEducationCheckbox={updateEducationCheckbox} updateMark={updateMark} classes={classes} />
                    <RegistrationCheckbox id="toefl" label="TOEFL" index={2} value={values.education[2]} updateEducationCheckbox={updateEducationCheckbox} updateMark={updateMark} classes={classes} />
                    <RegistrationCheckbox id="tafe" label="TAFE" index={3} value={values.education[3]} updateEducationCheckbox={updateEducationCheckbox} updateMark={updateMark} classes={classes} />
                    <RegistrationCheckbox id="cult" label="CULT" index={4} value={values.education[4]} updateEducationCheckbox={updateEducationCheckbox} updateMark={updateMark} classes={classes} />
                    <RegistrationCheckbox id="insearchDeep" label="Insearch DEEP" index={5} value={values.education[5]} updateEducationCheckbox={updateEducationCheckbox} updateMark={updateMark} classes={classes} />
                    <RegistrationCheckbox id="insearchDiploma" label="Insearch Diploma" index={6} value={values.education[6]} updateEducationCheckbox={updateEducationCheckbox} updateMark={updateMark} classes={classes} />
                    <RegistrationCheckbox id="foundationCourse" label="Foundation Course" index={7} value={values.education[7]} updateEducationCheckbox={updateEducationCheckbox} updateMark={updateMark} classes={classes} />
                </FormGroup>
                <Button className={classes.input} id="submitStudentDetailsBtn" color="primary" size="large" type="submit" onClick={submitStudentDetails}>Submit</Button>
            </div>
        </form>
    );
};

export default RegistrationForm;