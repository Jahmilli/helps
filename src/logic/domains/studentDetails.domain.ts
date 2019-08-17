
export interface StudentDetails {
    [email: string]: string | Array<Course>;
    studentID: string;
    fullName: string;
    preferredName: string;
    faculty: string;
    courseID: string;
    preferredContactNumber: string;
    dateOfBirth: string;
    gender: string;
    degree: string;
    status: string;
    education: Array<Course>;
}
export class Course {
    constructor(title: string) {
        this.title = title;
    }
    title: string;
    mark: number = 0;
    isChecked: boolean = false;
}