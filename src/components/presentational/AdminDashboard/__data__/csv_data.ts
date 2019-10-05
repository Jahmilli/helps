export const setBookedSessions = (data: any): Array<any> => {
    let csvData = [];
    csvData = data.map((row: any, index: number) => {
        const { id, date, startTime, endTime, room, advisor, type, currentBooking } = row;
        const { studentId, preferredName, faculty, status, degree, subjectName, assignmentType, needsHelpWithOptions } = currentBooking;

        // toString  boolean as false doesn't get displayed in CSV
        for (let [key, value] of Object.entries(needsHelpWithOptions)) {
            //@ts-ignore
            needsHelpWithOptions[key] = value.toString();
        }
        return {
            id, date, startTime, endTime, room, advisor, type,
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
    });
    return csvData;
}

export const setCancelledSessions = (data: any): Array<any> => {
    let csvData = [];
    csvData = data.map((row: any, index: number) => {
        const { id, date, startTime, endTime, room, advisor, type, currentBooking } = row;
        const { studentId, preferredName, subjectName, assignmentType } = currentBooking;

        return {
            id, date, startTime, endTime, room, advisor, type,
            bookedBy: 'dunno',
            preferredName,
            studentId,
            cancelledOn: 'dont have this',
            subjectName,
            assignmentType,
            registrationDate: 'dont have this either'
        }
    });
    return csvData;
}

export const setSessionsWithWaitingLists = (data: any): Array<any> => {
    let csvData = [];
    csvData = data.map((row: any, index: number) => {
        const { id, date, startTime, endTime, room, advisor, type, currentBooking } = row;

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
        // TODO: Figure out cleaner way of doing this
        // WILL NEED TO FETCH STUDENT DATA AS WELL
        const { id, date, startTime, endTime, room, advisor, type, currentBooking } = row;
        const { studentId, preferredName, subjectName, assignmentType } = currentBooking;

        return {
            id, date, startTime, endTime, room, advisor, type,
            bookedBy: 'nope',
            studentId,
            preferredName,
            didAttend: 'true',
            subjectName,
            assignmentType,
            registrationDate: 'nor do we have this'
        }
    });
    return csvData;
}

export const setNotBookedSessions = (data: any): Array<any> => {
    let csvData = [];
    csvData = data.map((row: any, index: number) => {
        const { id, date, startTime, endTime, room, advisor, type, currentBooking } = row;
        return {
            id, date, startTime, endTime, room, advisor, type,
        }
    });
    return csvData;
}