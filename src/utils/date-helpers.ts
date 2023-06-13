export const setTimezoneOffsetDate = (date: string | Date) => {
    const serverDate = new Date(date);
    const timeZoneOffset = Math.abs(serverDate.getTimezoneOffset());
    serverDate.setMinutes(serverDate.getMinutes() + timeZoneOffset);
    return serverDate;
};

export const toFormatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};

export const toFormatTime = (date: string | Date) => {
    return new Date(date).toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    });
};