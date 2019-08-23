export interface ISession {
    _id?: string;
    [date: string]: any;
    startTime: string; // Should be a date object
    endTime: string; // Should be a date object
    room: string;
    advisor: string;
    type: string;
    currentBooking: ISessionDetails;
    waitingList: Array<ISessionDetails>
    // attendedNotAttended: string; (not sure what this is)
}

export interface ISessionDetails {
    [studentId: string]: any;
    reason: string // Taken from 'this appointment is for'
    subjectName: string;
    assignmentType: string;
    isGroupAssignment: boolean;
    needsHelpWithOptions: ICheckBox;
    additionalHelpDetails: string; 
}

export interface ICheckBox {
    [id: string]: boolean;
}