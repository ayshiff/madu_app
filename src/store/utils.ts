const resolvePath = (object: any, path: any, defaultValue = '') => {
    return path
        .split('.')
        .reduce((o: any, p: any) => (o ? o[p] : defaultValue), object);
};

export const indexer = (list: any[], idName: string = 'id') => {
    return list.reduce((accumulator: any, value: any) => {
        const key = resolvePath(value, idName);
        return {
            ...accumulator,
            [key]: value
        };
    }, {});
};
