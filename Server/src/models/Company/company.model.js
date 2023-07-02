import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { COMPANY } from "../../database/dbSchema.js";

export const Company = mssql.define(COMPANY, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  companyName: {
    type: DataTypes.STRING(255),
  },
  city: {
    type: DataTypes.STRING(255),
  },
  state: {
    type: DataTypes.STRING(255),
  },
  mobile: {
    type: DataTypes.STRING(255),
  },
  gstNo: {
    type: DataTypes.STRING(50),
  },
  panNo: {
    type: DataTypes.STRING(20),
  },
  fssaiNo: {
    type: DataTypes.STRING(15),
  },
  signPath: {
    type: DataTypes.STRING(255),
  },
  logoPath: {
    type: DataTypes.STRING(255),
  },
  stateCode: {
    type: DataTypes.STRING(2),
  },
  createdBy: {
    type: DataTypes.INTEGER,
  },
  modifiedBy: {
    type: DataTypes.INTEGER,
  },
});
