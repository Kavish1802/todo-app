// load env varibles from .env file 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// import dependencies
const express = require('express');
const connectToDb = require('./data/connectToDb');
const userController = require('./controllers/userController');
const User = require('./models/user');
const authentication = require('./controllers/authentication');
const cookieParser = require('cookie-parser');
const requireAuth = require('./middleware/requireAuth');
// create express app   
const app = express();

//configure express to use json
app.use(express.json());
app.use(cookieParser());

// connect to databse   
connectToDb();

//Routes
app.post("/signup", authentication.signup);
app.post("/login", authentication.login);
app.get("/logout", authentication.logout);
app.get("/checkAuth", requireAuth.requireAuth, authentication.checkAuth);
app.get("/user", userController.fetchUsers);
app.get("/user/:id", userController.fetchUser);
app.post("/user", userController.createUser);
app.put("/user/:id", userController.updateUser);
app.delete("/user/:id", userController.deleteUser);
// app.post("/project", userController.createProject);

// start express server on port 3000
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});