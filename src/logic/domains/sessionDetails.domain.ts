// Could probably be abstracted into a booking and used for workshop bookings as well
export interface Session {
    id?: string;
    date: string;  // Could probs remove this
    startTime: string; // Should be a date object
    endTime: string; // Should be a date object
    room: string;
    advisor: string;
    type: string;
    bookedBy?: string;
    // attendedNotAttended: string; (not sure what this is)
    // waiting: string; (Not sure what this is)
}