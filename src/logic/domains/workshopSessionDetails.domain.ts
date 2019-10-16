export interface IWorkshopSession {
    _id?: string;
    topic: string;
    startDate: string; // Should be a date object
    endDate: string; // Should be a date object
    startTime: string; // Should be a date object
    endTime: string; // Should be a date object
    room: string;
    maxStudents: string;
    cutoff: string;
    waitingList: Array<String>
    confirmedList: Array<IWorkshopSessionDetails>;
    targetGroup: string;
    sessionCoverage: string;
}

export interface IWorkshopSessionDetails {
    [studentId: string]: any;
    dateBooked: string;
    attended: string;
}