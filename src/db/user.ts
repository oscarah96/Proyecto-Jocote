
import { DataTypes, Model, Optional } from 'sequelize'

interface UserAttributes {
    id: number;
    username: string;
    birthday: Date;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

}

export interface UserInput extends Optional<UserAttributes, 'id' > {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    
    id!: number;
    username!: string;
    birthday!: Date;
//timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
    }

}, {
    timestamps: true,
    sequelize: null,
    paranoid: true
  })

  export default User
  