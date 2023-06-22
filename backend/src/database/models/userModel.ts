import { Model, DataTypes } from 'sequelize';
import connection from './index';

class User extends Model {
  declare id: number;
  declare name: string;
 }

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: connection,
  tableName: 'users',
  timestamps: false,
});

export default User;
