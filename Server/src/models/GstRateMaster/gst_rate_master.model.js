import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { GST_RATE_MASTER } from "../../database/dbSchema.js";

export const GstRateMaster = mssql.define(GST_RATE_MASTER, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  gstName: {
    type: DataTypes.STRING(25),
  },
  rate: {
    type: DataTypes.DECIMAL(6, 2),
  },
  cGstRate: {
    type: DataTypes.DECIMAL(6, 2),
  },
  sGstRate: {
    type: DataTypes.DECIMAL(6, 2),
  },
  iGstRate: {
    type: DataTypes.DECIMAL(6, 2),
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
