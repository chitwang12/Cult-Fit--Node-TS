import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";



class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare password: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

User.init({
    id: {
        type: 'int',
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: 'varchar',
        allowNull: false,
    },
    email: {
        type: 'varchar',
        allowNull: false,
        unique: true,
    },
    //store password as hash
    password: {
        type:'varchar',
        allowNull: false,
    },
    createdAt: {
        type: 'timestamp',
        defaultValue: new Date(),
    },
    updatedAt: {
        type: 'timestamp',
        defaultValue: new Date(),
    },
}, {
    sequelize, // We need to pass the connection instance
    tableName: "users", // Specify the table name
    timestamps: true, // Enable timestamps
    underscored: true, // Use snake_case for column names
})

export default User;