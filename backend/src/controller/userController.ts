import userService from '../service/userService';
import { Request, Response } from 'express';

const findUsers = async (_req: Request, res: Response): Promise<Response> => {
  const { type, message } = await userService.findUsers();
  if (type) return res.status(404).json({ message });
  return res.status(200).json({ message });
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const { type, message } = await userService.createUser(req.body.name);
  if (type) return res.status(400).json({ message });
  return res.status(201).json({ message });
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const { type, message } = await userService.deleteUser(Number(req.params.id));
  if (type) return res.status(400).json({ message });
  return res.status(200).json({ message });
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const { body: { name }, params: { id } } = req;
  const { type, message } = await userService.updateUser(name, Number(id));
  if (type) return res.status(400).json({ message });
  return res.status(200).json({ message });
};

export default {
  findUsers,
  createUser,
  deleteUser,
  updateUser,
};
