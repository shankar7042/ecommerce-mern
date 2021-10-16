module.exports = (aFunc) => (req, res, next) => {
    Promise.resolve(aFunc(req, res, next)).catch(next);
};
