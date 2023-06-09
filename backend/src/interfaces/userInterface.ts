import { RowDataPacket } from 'mysql2';

export default interface IUser {
  type: null | string,
  message: string | RowDataPacket[],
}