import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { USER_FORMS } from "../../database/dbSchema.js";

export const UserForms = mssql.define(USER_FORMS, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  formName: {
    type: DataTypes.STRING(25),
  },
});
