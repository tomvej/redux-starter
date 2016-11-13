export default (config) => Object.keys(config).filter((key) => config[key]).reduce((result, key) => {
    let value = config[key];
    if (Array.isArray(value)) {
        value = value.filter((item) => item);
    }
    return Object.assign({[key]: value}, result);
}, {});
