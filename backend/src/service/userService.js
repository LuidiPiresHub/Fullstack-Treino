import userModel from "../model/userModel.js"

const findUsers = async () => {
  const userList = await userModel.findUsers();
  if (!userList.length) {
    return { type: 'error', message: 'Users not found' }
  }
  return { type: null, message: userList.map(({ name }) => name) };
}

export default {
  findUsers,
}
