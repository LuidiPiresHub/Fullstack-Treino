import userService from '../service/userService.js';

const findUsers = async (_req, res) => {
  const { type, message } = await userService.findUsers();
  if (type) return res.status(404).json({ message });
  return res.status(200).json({ message });
};

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);
  if (type) return res.status(400).json({ message });
  return res.status(201).json({ message });
};

const deleteUser = async (req, res) => {
  const { type, message } = await userService.deleteUser(req.params);
  if (type) return res.status(400).json({ message });
  return res.status(200).json({ message });
};

const updateUser = async (req, res) => {
  const { body: { name }, params: { id } } = req;
  const { type, message } = await userService.updateUser(name, id);
  if (type) return res.status(400).json({ message });
  return res.status(200).json({ message });
};

export default {
  findUsers,
  createUser,
  deleteUser,
  updateUser,
};
