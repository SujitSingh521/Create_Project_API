const fs = require('fs');
const path = require('path');

const logger = (req, res, next) => {
    const { username, role } = req.body;
    const log = `${new Date().toISOString()} - Username: ${username}, Role: ${role}\n`;

    fs.appendFileSync(path.join(__dirname, '../logs/log.txt'), log);
    next();
};

module.exports = { logger };
