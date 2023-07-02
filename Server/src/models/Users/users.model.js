import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { USERS } from "../../database/dbSchema.js";

export const Users = mssql.define(USERS, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: {
    type: DataTypes.STRING(25),
  },
  userId: {
    type: DataTypes.STRING(25),
  },
  userPassword: {
    type: DataTypes.STRING(15),
  },
  emailAddress: {
    type: DataTypes.STRING(25),
  },
  emailPassword: {
    type: DataTypes.STRING(25),
  },
  mobileNo: {
    type: DataTypes.STRING(25),
  },
  userType: {
    type: DataTypes.CHAR(1),
  },
  userCategory: {
    type: DataTypes.STRING(25),
  },
  companyCode: {
    type: DataTypes.INTEGER,
  },
  createdBy: {
    type: DataTypes.INTEGER,
  },
  modifiedBy: {
    type: DataTypes.INTEGER,
  },
});
