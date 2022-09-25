
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

