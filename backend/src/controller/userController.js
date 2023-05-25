import userService from "../service/userService.js";

const findUsers = async (_req, res) => {
  const { type, message } = await userService.findUsers();
  if (type) return res.status(404).json({message});
  return res.status(200).json(message);
}

export default {
  findUsers,
}
