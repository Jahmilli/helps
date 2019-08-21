export interface Session {
    _id?: string;
    [date: string]: any;
    startTime: string; // Should be a date object
    endTime: string; // Should be a date object
    room: string;
    advisor: string;
    type: string;
    currentBooking: SessionDetails;
    waitingList: Array<SessionDetails>
    // attendedNotAttended: string; (not sure what this is)
    // waiting: string; (Not sure what this is)
}

export interface SessionDetails {
    [studentId: string]: any;
    reason: string // Taken from 'this appointment is for'
    subjectName: string;
    assignmentType: string;
    isGroupAssignment: boolean;
    needsHelpWithOptions: Array<ICheckBox>;
    additionalHelpDetails: string; 
}

export interface ICheckBox {
    id: string;
    value: boolean;
}