import React from 'react';
import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import { CSVLink } from 'react-csv';
// import { Radio } from '@material-ui/icons';

const data = [
    "Booked sessions",
    "Cancelled sessions",
    "Sessions with waiting lists",
    "Non-attended sessions",
    "Non-booked sessions",
    "Student profile data",
    "Summary of students booking the sessions"
];

const excelHeaders = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" }
];

const excelData = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];

const SessionReports: React.FunctionComponent = () => {

    const [state, setState] = React.useState("");
    const handleSelection = (event: any) => {
        setState(event.target.value);
    }

    const getCurrentData = () => {
        return new Date().toLocaleDateString("en-AUS").replace(/[\/_]/g, "");
    }

    return (
        <div>
            <Typography variant="h2">Reports</Typography>
            <div>
                <Typography variant="body1">Step 1: Select a period from: </Typography>
            </div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Step 2: Select a report</FormLabel>
                <RadioGroup aria-label="sessions" name="customized-radios">
                    {data.map((value: string, index: number) => {
                        return <FormControlLabel onChange={handleSelection} checked={value === state} value={value} control={<Radio />} label={value} />
                    })}
                    <FormControlLabel onChange={handleSelection} checked={"Student history" === state} value="Student history" control={<Radio />} label="Student history:" />
                    <FormControlLabel onChange={handleSelection} checked={"Advisors comment" === state} value="Advisors comment" control={<Radio />} label="Advisors' comment:" />
                    <FormControlLabel onChange={handleSelection} checked={"Students in waiting list" === state} value="Students in waiting list" control={<Radio />} label="Students in the waiting list" />
                </RadioGroup>
            </FormControl>
            <Typography variant="body1">- Step 3: Press "Submit" button</Typography>
            <CSVLink data={excelData} headers={excelHeaders}
                filename={`session_reports_${getCurrentData()}.csv`}
                target="_blank">
                Download
            </CSVLink>
        </div>
    );
}

export default SessionReports;