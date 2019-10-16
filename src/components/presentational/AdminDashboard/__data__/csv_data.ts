export const setBookedSessions = (data: any): Array<any> => {
    let csvData = [];
    csvData = data.map((row: any, index: number) => {
        const { id, date, startTime, endTime, room, advisor, type, currentBooking } = row;
        let result = {
            id, date, startTime, endTime, room, advisor, type
        };

        if (currentBooking) {
            let { studentId, preferredName, faculty, status, degree, subjectName, assignmentType, needsHelpWithOptions } = currentBooking;
            // toString  boolean as false doesn't get displayed in CSV
            for (let [key, value] of Object.entries(needsHelpWithOptions)) {
                //@ts-ignore
                needsHelpWithOptions[key] = value.toString();
            }
            result = {
                ...result,
                bookedBy: 'dunno',
                preferredName,
                faculty,
                status,
                degree,
                didAttend: 'true',
                studentId,
                subjectName,
                assignmentType,
                ...needsHelpWithOptions
            }
        }
        console.log('result inc svdata is ', result);
        return result;
    });
    console.log('final result is ', csvData);
    return csvData;
}

export const setCancelledSessions = (data: any): Array<any> => {
    let csvData = [];
    csvData = data.map((row: any, index: number) => {
        const { id, date, startTime, endTime, room, advisor, type, currentBooking } = row;
        let result: any = {
            id, date, startTime, endTime, room, advisor, type
        };

        if (currentBooking) {
            const { studentId, preferredName, subjectName, assignmentType } = currentBooking;
            result = {
                ...result,
                bookedBy: 'dunno',
                preferredName,
                studentId,
                cancelledOn: 'dont have this',
                subjectName,
                assignmentType,
                registrationDate: 'dont have this either'
            }
        }
        return result;
    });
    return csvData;
}

export const setSessionsWithWaitingLists = (data: any): Array<any> => {
    let csvData = [];
    csvData = data.map((row: any, index: number) => {
        const { id, date, startTime, endTime, room, advisor, type } = row;
        return {
            id, date, startTime, endTime, room, advisor, type,
            totalStudentsInWaiting: 'dont have this',
            waitedBy: 'Or this'
        }
    });
    return csvData;
}

export const setNotAttendedSessions = (data: any): Array<any> => {
    let csvData = [];
    csvData = data.map((row: any, index: number) => {
        const { id, date, startTime, endTime, room, advisor, type, currentBooking } = row;
        let result: any = {
            id, date, startTime, endTime, room, advisor, type
        };
        if (currentBooking) {
            const { studentId, preferredName, subjectName, assignmentType } = currentBooking;
            result = {
                ...result,
                bookedBy: 'nope',
                studentId,
                preferredName,
                didAttend: 'true',
                subjectName,
                assignmentType,
                registrationDate: 'nor do we have this'
            }
        }
        return result;
    });
    return csvData;
}

export const setNotBookedSessions = (data: any): Array<any> => {
    let csvData = [];
    csvData = data.map((row: any, index: number) => {
        const { id, date, startTime, endTime, room, advisor, type } = row;
        return {
            id, date, startTime, endTime, room, advisor, type,
        }
    });
    return csvData;
}