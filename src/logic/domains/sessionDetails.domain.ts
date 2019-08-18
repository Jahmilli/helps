export interface ISession {
    id?: string;
    date: string;  // Could probs remove this
    startTime: string; // Should be a date object
    endTime: string; // Should be a date object
    room: string;
    advisor: string;
    type: string;
    bookedBy?: string;
    sessionDetails?: SessionDetails;
    // attendedNotAttended: string; (not sure what this is)
    // waiting: string; (Not sure what this is)
} 

export interface SessionDetails {
    reason: string // Taken from 'this appointment is for'
    subjectName: string;
    assignmentType: string;
    isGroupAssignment: boolean;
    needsHelpWith: Array<any>;
}

// Could probably be abstracted into a booking and used for workshop bookings as well
export class Session implements ISession {
    _id?: string = '';
    date: string = ''; // Could probs remove this
    startTime: string = ''; // Should be a date object
    endTime: string = ''; // Should be a date object
    room: string = '';
    advisor: string = '';
    type: string = '';
    bookedBy?: string = '';
    constructor(_id: string, date: string, startTime: string, endTime: string, room: string, advisor: string, type: string, bookedBy: string) {
        this._id = _id;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.room = room;
        this.advisor = advisor;
        this.type = type;
        this.bookedBy = bookedBy;
    }

    // attendedNotAttended: string; (not sure what this is)
    // waiting: string; (Not sure what this is)
}
