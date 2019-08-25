export interface Workshop {
    _id?: string;
    [date: string]: any;
    startTime: string; // Should be a date object
    endTime: string; // Should be a date object
    room: string;
    advisor: string;
    type: string;
    currentBooking: WorkshopDetails;
    waitingList: Array<WorkshopDetails>
    // attendedNotAttended: string; (not sure what this is)
}

export interface WorkshopDetails {
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