import { Dialect, Sequelize } from 'sequelize';



const sequelizeConnection = new Sequelize('postgres://user:pass@example.com:5432/jocote');

export default sequelizeConnection;