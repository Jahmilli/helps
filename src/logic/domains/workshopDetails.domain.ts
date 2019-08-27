export interface Workshop {
    _id?: string;
    no: ICheckBox; // Should be a date object
    skillSet: string; // Should be a date object
    shortTitle: string;

    // advisor: string;
    // type: string;
    // currentBooking: WorkshopDetails;
    // waitingList: Array<WorkshopDetails>
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