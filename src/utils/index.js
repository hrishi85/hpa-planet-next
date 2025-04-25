import { differenceInYears, parseISO, isValid, format } from 'date-fns';

const baseURL = process.env.STRAPI_API_URL || 'http://localhost:1337';

export function getAgeFromBirthdate(birthdate) {
    try {
        const date = parseISO(birthdate);
        if (!isValid(date)) {
            return 'Invalid birthdate format';
        }
        const age = differenceInYears(new Date(), date);
        return age;
    } catch (err) {
        console.error('Error calculating age:', err);
        return 'Error calculating age';
    }
}

export function shortenTextByWords(text, maxWords) {
    const words = text.trim().split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
}


export const getFormatedDate = (dateString) => {
    let date = new Date(dateString);
    date = format(date, 'dd MMM yyyy');
    return date;
};

export const getURL = (addURL) => {
    return `${baseURL}${addURL}`;
};
