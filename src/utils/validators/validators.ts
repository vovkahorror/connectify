export const required = (value: string) => {
    return value ? undefined : 'Field is required';
};

export const fieldsSame = (value1: string) => (value2: string) => {
    return value1 === value2 ? undefined : 'Fields are not same';
};

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    return value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;
};