import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { TRANSACTION_HEAD } from "../../database/dbSchema.js";

export const TransactionHead = mssql.define(TRANSACTION_HEAD, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tranType: {
    type: DataTypes.CHAR(2),
  },
  docNo: {
    type: DataTypes.INTEGER,
  },
  docDate: {
    type: DataTypes.DATE,
  },
  cashbank: {
    type: DataTypes.INTEGER,
  },
  total: {
    type: DataTypes.DECIMAL(18, 2),
  },
  ode: {
    type: DataTypes.INTEGER,
  },
  yearCode: {
    type: DataTypes.INTEGER,
  },
  companyCode: {
    type: DataTypes.INTEGER,
  },
  cb: {
    type: DataTypes.INTEGER,
  },
  createdBy: {
    type: DataTypes.INTEGER,
  },
  modifiedBy: {
    type: DataTypes.INTEGER,
  },
});
