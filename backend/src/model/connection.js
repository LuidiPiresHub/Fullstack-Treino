import { createPool } from 'mysql2/promise';

//DICA: para lembrar o nome de cada propriedade objeto olhar as conexões do Workbench.

export default createPool({
  host: 'localhost',
  password: 'password',
  port: '3306',
  user: 'root',
  database: 'Estudos',
})
