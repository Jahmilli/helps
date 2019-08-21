export interface Session {
    _id?: string;
    [date: string]: any;
    startTime: string; // Should be a date object
    endTime: string; // Should be a date object
    room: string;
    advisor: string;
    type: string;
    studentId?: string;
    reason: string // Taken from 'this appointment is for'
    subjectName: string;
    assignmentType: string;
    isGroupAssignment: boolean;
    needsHelpWithOptions: Array<ICheckBox>;
    // attendedNotAttended: string; (not sure what this is)
    // waiting: string; (Not sure what this is)
}

export interface ICheckBox {
    id: string;
    value: boolean;
}