const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ error: "Acceso denegado" });
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY_JWT);
        next();
    } catch (error) {
        res.status(400).json({ error: "token no es válido" });
    }
};

module.exports = verifyToken;
