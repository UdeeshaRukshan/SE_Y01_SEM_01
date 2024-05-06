const express = require('express');
const userController = require('../controller/UserController');
const userRouter = express.Router();

userRouter.post("/users", userController.createUser);
userRouter.get('/users', userController.getAllUsers);
userRouter.get('/users/:id', userController.getUserById);
userRouter.put('/users/:id', userController.updateUser);
userRouter.delete('/users/:id', userController.deleteUser);

module.exports = userRouter;
