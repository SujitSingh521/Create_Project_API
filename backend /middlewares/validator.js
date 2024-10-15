const validator = (req, res, next) => {
    if (req.user.role !== 'Admin') {
        return res.status(403).json({ message: 'You do not have permission to perform this action' });
    }
    next();
};

module.exports = validator;
