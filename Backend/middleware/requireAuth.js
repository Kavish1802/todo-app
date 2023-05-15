const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function requireAuth(req, res, next) {
    try {
        // read token of cookie
        const token = req.cookies.Authorization;
        // decode token
        const decoded = jwt.verify(token, process.env.SECRET);
        // find user with decoded token
        const user = await User.findById(decoded.sub);
        if (!user) {
            throw new Error();
        }

        // if user exists, set req.user to user
        req.user = user;
        // call next
        next();
        console.log('MiddleWare');
    }
    catch (error) {
        console.log(error);
        res.sendStatus(401);
    }

}

module.exports = { requireAuth };
