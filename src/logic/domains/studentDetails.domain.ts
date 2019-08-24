export interface IStudentDetails {
    email: string;
    studentId: string;
    fullName: string;
    preferredName: string;
    faculty: string;
    courseId: string;
    preferredContactNumber: string;
    dateOfBirth: string;
    gender: string;
    degree: string;
    status: string;
    education: Array<Course>;
    upcomingSessions: IStudentSessions;
    previousSessions: IStudentSessions;
}

export interface IStudentSessions {
    sessions: Array<string>;
    workshopSessions: Array<string>;
}


export class Course {
    constructor(title: string) {
        this.title = title;
    }
    title: string;
    mark: number = 0;
    isChecked: boolean = false;
}