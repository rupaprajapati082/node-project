module.exports.authAdmin = async (req, res, next) => {
    const user = req.user; // usermiddleware -- return req.use

    if (user && user.role !== "admin") {
        return res.status(401).json({ message: 'Access denied.' });
    }

    next();
}