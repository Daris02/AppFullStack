import { Router } from "express";
import userController from "./controller.js";

export const router = Router();

router.get('/api', (req, res) => {
    res.send("Hello world !");
});
router.get('/users', userController.getAllUser);
router.post('/user', userController.addUser);
router.get('/user/:id', userController.getUserById);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUserById);