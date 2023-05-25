import { Router } from "express";
import userController from "../controller/userController.js";

const route = Router();

route.get('/', userController.findUsers);

export default route;
