import connection from "./connection.js";

const findUsers = async () => {
  const query = 'SELECT name FROM Usuarios;';
  const [data] = await connection.execute(query)
  return data;
}

export default {
  findUsers,
}
