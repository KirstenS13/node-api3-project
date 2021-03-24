module.exports = () => {
    return (req, res, next) => {
        const time = new Date().toISOString();
        console.log(`Time: ${time}; URL: ${req.url}; Method: ${req.method};`);
        next();
    }
};