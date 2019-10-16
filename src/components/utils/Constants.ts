
import moment from "moment";

export const DATE_FORMAT = 'DD/MM/YYYY';
export const TIME_FORMAT = 'HH:mm';


export const isEmpty = (str: string): boolean => {
    return !str || 0 === str.length;
};

// This is basic formatting validation, this needs to be improved
export const isValidDate = (date: string): boolean => {
    let validDate = !isEmpty(date) && moment(date, 'DD/MM/YYYY', true).isValid();
    console.log('valid date is ', validDate); // Leaving this in for now for debugging purposes
    return validDate;
}

// This is basic formatting validation, this needs to be improved
// need to add in param to check end time is later than start time
export const isValidTime = (time: string): boolean => {
    const validTime = !isEmpty(time) && moment(time, "HH:mm", true).isValid();
    console.log('valid time is ', validTime); // Leaving this in for now for debugging purposes
    return validTime;
}

export const filterByDate = (data: any, startDate: any, endDate: any) => {
    const filteredData = data.filter((val: any) => {
        let tempDate = moment(val.date, DATE_FORMAT).toDate();
        return tempDate >= startDate && tempDate <= endDate;
    });
    return filteredData;
}