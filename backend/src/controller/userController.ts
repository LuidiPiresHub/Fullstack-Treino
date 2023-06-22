import userService from '../service/userService';
import { Request, Response } from 'express';

const SERVER_ERROR = 'Internal server error'; 
const HTTP_ERROR = 500;

const findUsers = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const { type, message } = await userService.findUsers();
    if (type) return res.status(404).json({ message });
    return res.status(200).json({ message });
  } catch {
    return res.status(HTTP_ERROR).json({ message: SERVER_ERROR });
  }
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { type, message } = await userService.createUser(req.body.name);
    if (type) return res.status(400).json({ message });
    return res.status(201).json({ message });
  } catch {
    return res.status(HTTP_ERROR).json({ message: SERVER_ERROR });
  }
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { type, message } = await userService.deleteUser(Number(req.params.id));
    if (type) return res.status(400).json({ message });
    return res.status(200).json({ message });
  } catch {
    return res.status(HTTP_ERROR).json({ message: SERVER_ERROR });
  }
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { body: { name }, params: { id } } = req;
    const { type, message } = await userService.updateUser(name, Number(id));
    if (type) return res.status(400).json({ message });
    return res.status(200).json({ message });
  } catch {
    return res.status(HTTP_ERROR).json({ message: SERVER_ERROR });
  }
};

export default {
  findUsers,
  createUser,
  deleteUser,
  updateUser,
};
