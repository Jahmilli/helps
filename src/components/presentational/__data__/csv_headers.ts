export const student_data = [
    { label: "Student ID", key: "studentId" },
    { label: "Given Name", key: "givenName" },
    { label: "Family Name", key: "familyName" },
    { label: "Preferred First Name", key: "preferredFirstName" },
    { label: "DOB", key: "dateOfBirth" },
    { label: "Gender", key: "gender" },
    { label: "Special Needs", key: "specialNeeds" },
    { label: "Use personal info approval", key: "usePersonalInfoApproval" },
    { label: "Faculty", key: "faculty" },
    { label: "Degree", key: "degree" },
    { label: "Year/Type", key: "year" },
    { label: "Status", key: "status" },
    { label: "First Language", key: "firstLanguage" },
    { label: "Country", key: "country" },
    { label: "HSC", key: "hsc" },
    { label: "IELTS", key: "ielts" },
    { label: "TOEFL", key: "toefl" },
    { label: "TAFE", key: "tafe" },
    { label: "CULT", key: "cult" },
    { label: "InsearchDEEP", key: "insearchDeep" },
    { label: "InsearchDiploma", key: "insearchDiploma" },
    { label: "Foundation Course", key: "foundationCourse" },
    { label: "Other", key: "other" },
    { label: "CAF", key: "caf" }
    // { label: "FamilyName", key: "familyName" },
    // { label: "FamilyName", key: "familyName" },
];

export const bookedSessions = [
    { label: "Session Id", key: "sessionId" },
    { label: "Date", key: "date" },
    { label: "Start Time", key: "startTime" },
    { label: "endTime", key: "endTime" },
    { label: "Room", key: "room" },
    { label: "Advisor", key: "advisor" },
    { label: "Type", key: "type" },
    { label: "Booked By", key: "bookedBy" },
    { label: "preferred First Name", key: "preferredFirstName" },
    { label: "Student Id", key: "studentId" },
    { label: "Faculty", key: "faculty" },
    { label: "Status", key: "status" },
    { label: "Degree", key: "degree" },
    // { label: "degreeDetails", key: "degreeDetails" }, Dont have this data yet
    // { label: "Attended ?", key: "attended" }, Dont have this data yet
    { label: "Subject Name", key: "subjectName" },
    { label: "Assignment Type", key: "assignmentType" },
    // { label: "Registration on Date", key: "registrationOnDate" }, Dont know what this is...
    { label: "I need help - Answering the assignment question (please provide the question to your advisor)", key: "needHelpAnsweringQuestion" },
    { label: "I need help - Addressing the marking criteria (please provide the criteria to your advisor)", key: "needHelpWithMarkingCriteria" },
    { label: "I need help - Structure", key: "iNeedHelpWithStructure" },
    { label: "I need help - Paragraph Development", key: "iNeedHelpParagraph" },
    { label: "I need help - Referencing", key: "iNeedHelpReferencing" },
    { label: "I need help - Grammar", key: "iNeedHelpGrammar" },
    { label: "I need help - Other, please specify below", key: "iNeedHelpOther" }
];

export const cancelledSessions = [
    { label: "Session Id", key: "sessionId" },
    { label: "Date", key: "date" },
    { label: "Start Time", key: "startTime" },
    { label: "endTime", key: "endTime" },
    { label: "Room", key: "room" },
    { label: "Advisor", key: "advisor" },
    { label: "Type", key: "type" },
    { label: "Booked By", key: "bookedBy" },
    { label: "preferred First Name", key: "preferredFirstName" },
    { label: "Student Id", key: "studentId" },
    { label: "Cancelled on", key: "cancelledOn" },
    { label: "Subject name", key: "subjectName" },
    { label: "Assignment Type", key: "assignmentType" },
    { label: "Registration", key: "registrationDate" }
];

export const sessionsHavingWaitingLists = [
    { label: "Session Id", key: "sessionId" },
    { label: "Date", key: "date" },
    { label: "Start Time", key: "startTime" },
    { label: "endTime", key: "endTime" },
    { label: "Room", key: "room" },
    { label: "Advisor", key: "advisor" },
    { label: "Type", key: "type" },
    { label: "Total Students in Waiting", key: "totalStudentsInWaiting" },
    { label: "Waited by", key: "waitedBy" },
]

export const notAttendedSessions = [
    { label: "Session Id", key: "sessionId" },
    { label: "Date", key: "date" },
    { label: "Start Time", key: "startTime" },
    { label: "endTime", key: "endTime" },
    { label: "Room", key: "room" },
    { label: "Advisor", key: "advisor" },
    { label: "Type", key: "type" },
    { label: "Booked By", key: "bookedBy" },
    { label: "preferred First Name", key: "preferredFirstName" },
    { label: "Student Id", key: "studentId" },
    { label: "Attended ?", key: "attended" },
    { label: "Subject name", key: "subjectName" },
    { label: "Assignment Type", key: "assignmentType" },
    { label: "Registration", key: "registrationDate" }
];

export const notBookedSessions = [
    { label: "Session Id", key: "sessionId" },
    { label: "Date", key: "date" },
    { label: "Start Time", key: "startTime" },
    { label: "endTime", key: "endTime" },
    { label: "Room", key: "room" },
    { label: "Advisor", key: "advisor" },
    { label: "Type", key: "type" }
];


export const workshopSkillSetDetails = [
    { label: "Skill Set", key: "skillSet" },
    { label: "Workshop Id", key: "workshopId" },
    { label: "Topic", key: "topic" },
    { label: "Start Date", key: "startDate" },
    { label: "Finish Date", key: "finishDate" },
    { label: "Time", key: "time" },
    { label: "Venue", key: "venue" },
    { label: "Student ID", key: "studentId" },
    { label: "Given Name", key: "givenName" },
    { label: "Family Name", key: "familyName" },
    { label: "Preferred First Name", key: "preferredFirstName" },
    { label: "DOB", key: "dateOfBirth" },
    { label: "Gender", key: "gender" },
    { label: "Special Needs", key: "specialNeeds" },
    { label: "Use personal info approval", key: "usePersonalInfoApproval" },
    { label: "Faculty", key: "faculty" },
    { label: "Degree", key: "degree" },
    { label: "Year/Type", key: "year" },
    { label: "Status", key: "status" },
    { label: "First Language", key: "firstLanguage" },
    { label: "Country", key: "country" },
    { label: "HSC", key: "hsc" },
    { label: "IELTS", key: "ielts" },
    { label: "TOEFL", key: "toefl" },
    { label: "TAFE", key: "tafe" },
    { label: "CULT", key: "cult" },
    { label: "InsearchDEEP", key: "insearchDeep" },
    { label: "InsearchDiploma", key: "insearchDiploma" },
    { label: "Foundation Course", key: "foundationCourse" },
    { label: "Other", key: "other" },
    { label: "CAF", key: "caf" }
];

export const workshopSkillSetSummary = [
    { label: "Student ID", key: "studentId" },
    { label: "Name", key: "name" },
    { label: "Faculty", key: "faculty" },
    { label: "Degree", key: "degree" },
    { label: "Year/Type", key: "year" },
    { label: "Status", key: "status" },
    { label: "Registered date", key: "registeredDate" },
    { label: "Writing 2019", key: "writing" },
    { label: "Grammar 2019", key: "grammar" },
    { label: "Speaking 2019", key: "speaking" },
    { label: "WriteNow! 2019", key: "writeNow" },
    { label: "U:PASSwrite 2019", key: "uPassWrite" },
    { label: "U:PASS", key: "uPass" },
    { label: "July Boot Camp 2019", key: "bootCamp" },
    { label: "TalkFest", key: "talkFest" },
    { label: "Conversations", key: "conversations" },
    { label: "1:1 booked", key: "oneOnOneBooked" },
]