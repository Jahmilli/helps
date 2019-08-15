
export interface StudentDetails {
    [title: string]: string | Education;
    fullName: string;
    preferredName: string;
    faculty: string;
    courseID: string;
    email: string;
    preferredContactNumber: string;
    dateOfBirth: string;
    gender: string;
    degree: string;
    status: string;
    education: Education;
}

export interface Education {
    [course: string]: Course;
}

export class Course {
    title = '';
    mark = 0;
    isChecked = false;
}