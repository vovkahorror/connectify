export const updateObjectInArray = (items: any[], itemID: number | string, objPropName: string, newObjProps: Object) => {
    return items.map((user: any) => user[objPropName] === itemID ? {...user, ...newObjProps} : user);
};