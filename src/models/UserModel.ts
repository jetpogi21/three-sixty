//Generated by GetCompleteNextAuthModelFile
import { models } from "@auth/sequelize-adapter";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "../config/db";
//Generated by GetRelationshipImports
import { Account } from "./AccountModel";
import { Session } from "./SessionModel";
import { VerificationToken } from "@/models/VerificationTokenModel";

export default interface User
  extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  id: CreationOptional<string>;
  name?: string;
  email: string;
  username: string;
  status: CreationOptional<string>;
  emailVerified?: Date;
  image?: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const User = sequelize.define<User>(
  "user",
  {
    ...models.User,
    //Generated by GetModelFieldsDictionary
    password: {
      type: DataTypes.STRING(100),
      field: "password",
    },
    username: {
      type: DataTypes.STRING(50),
      unique: true,
      field: "user_name",
    },
    status: {
      type: DataTypes.STRING(20),
      field: "status",
      allowNull: true,
      defaultValue: "pending",
    },
  },
  {
    name: { singular: "User", plural: "Users" },
    tableName: "users",
  }
);

//Generated by GetRelationshipDeclarations
//Generated by GenerateModelRelationship
User.hasMany(Account, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Account.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
//Generated by GenerateModelRelationship
User.hasMany(Session, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Session.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasMany(VerificationToken, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
VerificationToken.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export const UserSync = async () => {
  try {
    await User.sync({ alter: true });
    console.log("User table has been created!");
  } catch (error) {
    console.error(`Unable to create ${"User".toLowerCase()} table:`, error);
  }
};
