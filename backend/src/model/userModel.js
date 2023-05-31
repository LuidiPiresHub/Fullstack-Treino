import connection from './connection.js';

const findUsers = async () => {
  const query = 'SELECT * FROM Usuarios;';
  const [data] = await connection.execute(query);
  return data;
};

const createUser = async (name) => {
  const query = 'INSERT INTO Usuarios (name) VALUES (?);';
  const [data] = await connection.execute(query, [name]);
  return data;
};

const deleteUser = async (id) => {
  const query = 'DELETE FROM Usuarios WHERE id = ?;';
  const [data] = await connection.execute(query, [id]);
  return data;
};

const updateUser = async (name, id) => {
  const query = 'UPDATE Usuarios SET name = ? WHERE id = ?;';
  const [data] = await connection.execute(query, [name, id]);
  return data;
};

export default {
  findUsers,
  createUser,
  deleteUser,
  updateUser,
};
