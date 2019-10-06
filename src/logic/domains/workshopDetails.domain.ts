export interface Workshop {
    _id: string;
    no: ICheckBox;
    skillSet: string;
    shortTitle: string;
}

export interface WorkshopDetails {
    [workshopId: string]: any;
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