import React from 'react';
import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import { CSVDownload } from 'react-csv';
import { getAllBookedSessions } from '../../../logic/functions/reports';
import { setBookedSessions, setCancelledSessions, setSessionsWithWaitingLists, setNotAttendedSessions, setNotBookedSessions } from './__data__/csv_data';
import {
    bookedSessionsHeaders,
    cancelledSessionsHeaders,
    sessionsHavingWaitingListsHeaders,
    notAttendedSessionsHeaders,
    notBookedSessionsHeaders
} from './__data__/csv_headers';

// Maybe should be an enum for the val, not sure...
const options = [
    "Booked sessions",
    "Cancelled sessions",
    "Sessions with waiting lists",
    "Non-attended sessions",
    "Non-booked sessions",
    // "Student profile data",
    // "Summary of students booking the sessions"
];

interface CSVData {
    headers: Array<any>;
    data: Array<any>;
}
const SessionReports: React.FunctionComponent = () => {
    const [sessionsData, setSessionsData] = React.useState([]);
    const [downloadOption, setDownloadOption] = React.useState("");
    const [shouldDownload, setShouldDownload] = React.useState(false);
    const [csvData, setCsvData] = React.useState<CSVData>({
        headers: [],
        data: []
    });
    React.useEffect(() => {
        let shouldShow = false;
        const getSessionData = async () => {
            if (sessionsData.length === 0) {
                let result: any = await getAllBookedSessions();
                setSessionsData(result);
            }
        }
        getSessionData();

        if (csvData.data.length > 0) {
            shouldShow = true;
        }
        setShouldDownload(shouldShow);
    }, [downloadOption, csvData.data]);

    const handleSelection = (event: any) => {
        setDownloadOption(event.target.value);
        setShouldDownload(false);
        setCsvData({
            headers: [],
            data: []
        });
    }
    const renderCsvDownload = () => (
        <CSVDownload data={csvData.data} headers={csvData.headers}
            filename={`session_reports_${getCurrentDate()}.csv`} // This does not work, its a bug in react-csv
            target="_blank">
            Download
        </CSVDownload>
    )

    const handleDownload = async () => {
        let finalData: any = [];
        let finalHeaders: any = [];

        switch (downloadOption) {
            case "Booked sessions":
                finalData = setBookedSessions(sessionsData);
                finalHeaders = bookedSessionsHeaders;
                break;
            case "Cancelled sessions":
                finalData = setCancelledSessions(sessionsData);
                finalHeaders = cancelledSessionsHeaders;
                break;
            case "Sessions with waiting lists":
                finalData = setSessionsWithWaitingLists(sessionsData);
                finalHeaders = sessionsHavingWaitingListsHeaders;
                break;
            case "Non-attended sessions":
                finalData = setNotAttendedSessions(sessionsData);
                finalHeaders = notAttendedSessionsHeaders;
                break;
            case "Non-booked sessions":
                finalData = setNotBookedSessions(sessionsData);
                finalHeaders = notBookedSessionsHeaders;
                break;
            // case "Non-attended sessions": {
            //     let sessionsData = await getAllBookedSessions();
            //     finalData = setCancelledSessions(sessionsData);
            //     finalHeaders = bookedSessionsHeaders;
            // }; break;
            // case "Non-attended sessions": {
            //     let sessionsData = await getAllBookedSessions();
            //     finalData = setCancelledSessions(sessionsData);
            //     finalHeaders = bookedSessionsHeaders;
            // }; break;
        }

        setCsvData({
            data: finalData,
            headers: finalHeaders
        })
    }

    const getCurrentDate = () => {
        return new Date().toLocaleDateString("en-AUS").replace(/[/_]/g, "");
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
                    {options.map((value: string, index: number) => {
                        return <FormControlLabel key={index} onChange={handleSelection} checked={value === downloadOption} value={value} control={<Radio />} label={value} />
                    })}
                    {/* <FormControlLabel onChange={handleSelection} checked={"Student history" === downloadOption} value="Student history" control={<Radio />} label="Student history:" />
                    <FormControlLabel onChange={handleSelection} checked={"Advisors comment" === downloadOption} value="Advisors comment" control={<Radio />} label="Advisors' comment:" />
                    <FormControlLabel onChange={handleSelection} checked={"Students in waiting list" === downloadOption} value="Students in waiting list" control={<Radio />} label="Students in the waiting list" /> */}
                </RadioGroup>
            </FormControl>
            <Typography variant="body1">- Step 3: Press "Download" button</Typography>
            <Button id="submitBooking" color="primary" size="large" onClick={handleDownload}>
                Download
			</Button>
            {shouldDownload ?
                // <CSVDownload data={csvData.data} headers={csvData.headers}
                //     filename={`session_reports_${getCurrentDate()}.csv`} // This does not work, its a bug in react-csv
                //     target="_blank">
                //     Download
                // </CSVDownload>
                renderCsvDownload()
                : null
            }
        </div>
    );
}

export default SessionReports;