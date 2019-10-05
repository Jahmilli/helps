export const setBookedSessions = (data: any): Array<any> => {
    let csvData = [];
    csvData = data.map((row: any, index: number) => {
        let tempData = {};
        // TODO: Figure out cleaner way of doing this
        // WILL NEED TO FETCH STUDENT DATA AS WELL
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
            studentId,
            subjectName,
            assignmentType,
            ...needsHelpWithOptions
        }
    });
    return csvData;
}