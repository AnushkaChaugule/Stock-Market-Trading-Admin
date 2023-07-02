import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { STATE_MASTER } from "../../database/dbSchema.js";

export const StateMaster = mssql.define(STATE_MASTER, {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  cityName: {
    type: DataTypes.STRING(25),
  },
  pinCode: {
    type: DataTypes.STRING(10),
  },
  subArea: {
    type: DataTypes.STRING(25),
  },
  state: {
    type: DataTypes.STRING(25),
  },
  stateCode: {
    type: DataTypes.STRING(2),
    primaryKey: true,
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
