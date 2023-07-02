import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { ACCOUNT_MASTER } from "../../database/dbSchema.js";

export const AccountMaster = mssql.define(ACCOUNT_MASTER, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  accountName: {
    type: DataTypes.STRING(255),
  },
  accountType: {
    type: DataTypes.CHAR(1),
  },
  address: {
    type: DataTypes.STRING(255),
  },
  cityCode: {
    type: DataTypes.INTEGER,
  },
  groupId: {
    type: DataTypes.INTEGER,
  },
  openingBalance: {
    type: DataTypes.DECIMAL(18, 2),
  },
  drcr: {
    type: DataTypes.CHAR(1),
  },
  unregistered: {
    type: DataTypes.CHAR(1),
  },
  gstNo: {
    type: DataTypes.STRING(15),
  },
  fssaiNo: {
    type: DataTypes.STRING(30),
  },
  stateCode: {
    type: DataTypes.STRING(2),
  },
  bankAccountCode: {
    type: DataTypes.STRING(25),
  },
  bankName: {
    type: DataTypes.STRING(25),
  },
  branch: {
    type: DataTypes.STRING(25),
  },
  ifsc: {
    type: DataTypes.STRING(25),
  },
  whatsappNo: {
    type: DataTypes.STRING(25),
  },
  tdstcsApplicable: {
    type: DataTypes.CHAR(1),
  },
  locked: {
    type: DataTypes.CHAR(1),
  },
  email: {
    type: DataTypes.STRING(25),
  },
  ccEmail: {
    type: DataTypes.STRING(25),
  },
  mobileNo: {
    type: DataTypes.STRING(25),
  },
  tanNo: {
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
