// export interface ISession {
//     _id?: string;
//     date: string;  // Could probs remove this
//     startTime: string; // Should be a date object
//     endTime: string; // Should be a date object
//     room: string;
//     advisor: string;
//     type: string;
//     studentID?: string;
//     sessionDetails?: SessionDetails;
//     // attendedNotAttended: string; (not sure what this is)
//     // waiting: string; (Not sure what this is)
// } 

export interface SessionDetails {
    reason: string // Taken from 'this appointment is for'
    subjectName: string;
    assignmentType: string;
    isGroupAssignment: boolean;
    needsHelpWith: Array<any>;
}

// Could probably be abstracted into a booking and used for workshop bookings as well
export class Session {
    _id?: string = '';
    date: string = ''; // Could probs remove this
    startTime: string = ''; // Should be a date object
    endTime: string = ''; // Should be a date object
    room: string = '';
    advisor: string = '';
    type: string = '';
    studentID?: string = ''; // Potentially change this to studentID
    
    constructor(data: ISession) {
        this._id = data._id;
        this.date = data.date;
        this.startTime = data.startTime;
        this.endTime = data.endTime;
        this.room = data.room;
        this.advisor = data.advisor;
        this.type = data.type;
        this.studentID = data.studentID;
    }

    // attendedNotAttended: string; (not sure what this is)
    // waiting: string; (Not sure what this is)
}
