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
    language: string;
    countryOfOrigin: string;
    education: Array<Course>;
    upcomingSessions: IStudentSessionIds;
    previousSessions: IStudentSessionIds;
}

export interface IStudentSessionIds {
    sessionIds: Array<string>;
    workshopSessionIds: Array<string>;
}

export class Course {
    constructor(title: string) {
        this.title = title;
    }
    title: string;
    mark: number = 0;
    isChecked: boolean = false;
}