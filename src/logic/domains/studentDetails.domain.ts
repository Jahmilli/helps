export interface IStudentDetails {
    [email: string]: string | Array<Course>;
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
}
export class Course {
    constructor(title: string) {
        this.title = title;
    }
    title: string;
    mark: number = 0;
    isChecked: boolean = false;
}