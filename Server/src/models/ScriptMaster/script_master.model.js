import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { SCRIPT_MASTER } from "../../database/dbSchema.js";

export const ScriptMaster = mssql.define(SCRIPT_MASTER, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  scriptName: {
    type: DataTypes.STRING(255),
  },
  scriptType: {
    type: DataTypes.CHAR(1),
  },
  lotSize: {
    type: DataTypes.INTEGER,
  },
  faceValue: {
    type: DataTypes.INTEGER,
  },
  scriptId: {
    type: DataTypes.STRING(255),
  },
  isinNo: {
    type: DataTypes.STRING(255),
  },
  createdBy: {
    type: DataTypes.INTEGER,
  },
  modifiedBy: {
    type: DataTypes.INTEGER,
  },
});
