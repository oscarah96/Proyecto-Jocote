import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/jocote');
const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
});

export default User;