const filterUnset = (config) => Object.keys(config).filter((key) => config[key]).reduce((result, key) => {
    let value = config[key];
    if (Array.isArray(value)) {
        value = value.filter((item) => item);
    } else if (typeof value === 'object') {
        value = filterUnset(value);
    }
    return Object.assign({[key]: value}, result);
}, {});

export default filterUnset;
