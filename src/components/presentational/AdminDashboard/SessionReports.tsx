import React from 'react';
import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import { CSVDownload } from 'react-csv';
import { getAllBookedSessions } from '../../../logic/functions/reports';
import { setBookedSessions } from './__data__/csv_data';
import { bookedSessionsHeaders } from './__data__/csv_headers';

// Maybe should be an enum for the val, not sure...
const options = [
    "Booked sessions",
    "Cancelled sessions",
    "Sessions with waiting lists",
    "Non-attended sessions",
    "Non-booked sessions",
    "Student profile data",
    "Summary of students booking the sessions"
];

interface CSVData {
    headers: Array<any>;
    data: Array<any>;
}
const SessionReports: React.FunctionComponent = () => {

    const [downloadOption, setDownloadOption] = React.useState("");
    const [shouldDownload, setShouldDownload] = React.useState(false);
    const [headers, setHeaders] = React.useState<Array<any>>([]);
    const [data, setData] = React.useState<Array<any>>([]);
    const [csvData, setCsvData] = React.useState<CSVData>({
        headers: [],
        data: []
    });
    React.useEffect(() => {
        let shouldShow = false;
        if (csvData.data.length > 0) {
            shouldShow = true;
        }
        setShouldDownload(shouldShow);
    }, [csvData.data]);

    const handleSelection = (event: any) => {
        setDownloadOption(event.target.value);
    }

    const handleDownload = async () => {
        let finalData: any = [];
        let finalHeaders: any = [];
        switch (downloadOption) {
            case "Booked sessions": {
                let sessionsData = await getAllBookedSessions();
                finalData = setBookedSessions(sessionsData);
                finalHeaders = bookedSessionsHeaders;
            }
                break;
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
                    <FormControlLabel onChange={handleSelection} checked={"Student history" === downloadOption} value="Student history" control={<Radio />} label="Student history:" />
                    <FormControlLabel onChange={handleSelection} checked={"Advisors comment" === downloadOption} value="Advisors comment" control={<Radio />} label="Advisors' comment:" />
                    <FormControlLabel onChange={handleSelection} checked={"Students in waiting list" === downloadOption} value="Students in waiting list" control={<Radio />} label="Students in the waiting list" />
                </RadioGroup>
            </FormControl>
            <Typography variant="body1">- Step 3: Press "Download" button</Typography>
            <Button id="submitBooking" color="primary" size="large" onClick={handleDownload}>
                Download
			</Button>
            {shouldDownload ?
                <CSVDownload data={csvData.data} headers={csvData.headers}
                    filename={`session_reports_${getCurrentDate()}.csv`} // This does not work, its a bug in react-csv
                    target="_blank">
                    Download
                </CSVDownload>
                : null
            }
        </div>
    );
}

export default SessionReports;