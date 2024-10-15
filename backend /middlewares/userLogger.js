const fs = require('fs');
const path = require('path');

const userLogger = (req, res, next) => {
    const logPath = path.join(__dirname, '..', 'log.txt');
    const logEntry = `User: ${req.user.id}, Role: ${req.user.role}, Time: ${new Date().toISOString()}\n`;

    fs.appendFile(logPath, logEntry, (err) => {
        if (err) console.log(err);
    });
    next();
};

module.exports = userLogger;
