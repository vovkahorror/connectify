export const setTimezoneOffsetDate = (date: string | Date) => {
    const serverDate = new Date(date);
    const timeZoneOffset = Math.abs(serverDate.getTimezoneOffset());
    serverDate.setMinutes(serverDate.getMinutes() + timeZoneOffset);
    return serverDate;
};

export const toFormatDate = (date: string | Date, locale = 'en-GB') => {
    return new Date(date).toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};

export const toFormatTime = (date: string | Date, locale = 'en-GB') => {
    return new Date(date).toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    });
};