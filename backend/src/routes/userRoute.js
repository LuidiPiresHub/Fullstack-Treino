import { Router } from 'express';
import userValidate from '../middlewares/userValidate.js';
import userController from '../controller/userController.js';

const route = Router();

route.get('/', userController.findUsers);
route.post('/', userValidate, userController.createUser);
route.delete('/:id', userController.deleteUser);
route.put('/:id', userValidate, userController.updateUser);

export default route;
