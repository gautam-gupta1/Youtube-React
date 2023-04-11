/**
 *converts date into local string and formatting it
 **/
 export function convertDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString("en-US", options);
    }
    