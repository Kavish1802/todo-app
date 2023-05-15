const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const http = require('http');


async function signup(req, res) {
    //get email and password
    const email = req.body.email;
    const password = req.body.password;
    //form validation
    var u = 0, sp = 0, num = 0;
    for (var i = 0; i < password.length; i++) {
        if (password[i] === '@' || password[i] === '#' || password[i] === '$' || password[i] === '%' || password[i] === '^' || password[i] === '&' || password[i] === '*') {
            sp = 1;
        }
        if (password[i] >= '0' && password[i] <= '9') {
            num = 1;
        }
        if (password[i] >= 'A' && password[i] <= 'Z') {
            u = 1;
        }
    }
    if (!email || !password) {
        res.status(400).json({ message: "All fields are required!" });
    }
    else if (password.length < 8) {
        res.status(400).json({ message: "Password must be at least 8 characters long!" });
    }
    else if (u === 0 || sp === 0 || num === 0) {
        res.status(400).json({ message: "Password must contain at least one uppercase letter, one number and one special character!" });
    }
    else if (!email.includes('@')) {
        res.status(400).json({ message: "Please enter a valid email address!" });
    }
    else {
        //create a new user
        const hashedPassword = await bcrypt.hash(password, 8);
        await User.create({ email: email, password: hashedPassword });
        res.status(201).json({ message: "User created successfully!" });
    }
}

async function login(req, res) {
    //get email and password
    const email = req.body.email;
    const password = req.body.password;
    //find user with requested email
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.sendStatus(401);
    }
    // compare entered password with found user's password
    const isMatch = await bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.sendStatus(401).json({ message: "Invalid credentials!" });
    }
    const exp = Date.now() + (1000 * 60 * 60 * 24);
    const token = jwt.sign({ sub: user.email, exp }, process.env.SECRET);

    // set cookie
    res.cookie('authorisation', token, {
        httpOnly: true,
        sameSite: true,
        expires: new Date(exp),
        secure: process.env.NODE_ENV === 'production'
    });
    res.sendStatus(200);
}
function checkAuth(req, res) {
    console.log(req.user);
    res.sendStatus(200);
}

function logout(req, res) {
    res.clearCookie('authorisation');
    res.sendStatus(200);
}

module.exports = {
    signup,
    login,
    checkAuth,
    logout
}
