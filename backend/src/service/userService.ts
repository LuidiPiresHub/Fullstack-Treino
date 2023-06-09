import userModel from '../model/userModel';
import IUser from '../interfaces/userInterface';

const findUsers = async (): Promise<IUser> => {
  const userList = await userModel.findUsers();
  if (!userList.length) return { type: 'error', message: 'Users not found' };
  return { type: null, message: userList };
};

const createUser = async (name: string): Promise<IUser> => {
  const { affectedRows } = await userModel.createUser(name);
  if (!affectedRows) return { type: 'error', message: 'User not created' };
  return { type: null, message: `User ${name} created successfully` };
};

const deleteUser = async (id: number): Promise<IUser> => {
  const { affectedRows } = await userModel.deleteUser(id);
  if (!affectedRows) return { type: 'error', message: 'User not deleted' };
  return { type: null, message: 'User deleted successfully' };
};

const updateUser = async (name: string, id: number): Promise<IUser> => {
  const { affectedRows } = await userModel.updateUser(name, id);
  if (!affectedRows) return { type: 'error', message: 'User not updated' };
  return { type: null, message: `The user has been updated to ${name}` };
};

export default {
  findUsers,
  createUser,
  deleteUser,
  updateUser,
};
