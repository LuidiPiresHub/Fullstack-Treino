import connection from './connection';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

const findUsers = async (): Promise<RowDataPacket[]> => {
  const query = 'SELECT * FROM Usuarios;';
  const [data] = await connection.execute<RowDataPacket[]>(query);
  return data;
};

const createUser = async (name: string): Promise<ResultSetHeader> => {
  const query = 'INSERT INTO Usuarios (name) VALUES (?);';
  const [data] = await connection.execute<ResultSetHeader>(query, [name]);
  return data;
};

const deleteUser = async (id: number): Promise<ResultSetHeader> => {
  const query = 'DELETE FROM Usuarios WHERE id = ?;';
  const [data] = await connection.execute<ResultSetHeader>(query, [id]);
  return data;
};

const updateUser = async (name: string, id: number): Promise<ResultSetHeader> => {
  const query = 'UPDATE Usuarios SET name = ? WHERE id = ?;';
  const [data] = await connection.execute<ResultSetHeader>(query, [name, id]);
  return data;
};

export default {
  findUsers,
  createUser,
  deleteUser,
  updateUser,
};
