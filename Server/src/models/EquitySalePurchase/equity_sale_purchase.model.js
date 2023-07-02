import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { EQUITY_SALE_PURCHASE } from "../../database/dbSchema.js";

export const EquitySalePurchase = mssql.define(EQUITY_SALE_PURCHASE, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  billNo: {
    type: DataTypes.STRING(255),
  },
  billDate: {
    type: DataTypes.DATEONLY,
  },
  transactionType: {
    type: DataTypes.CHAR(1),
  },
  scriptId: {
    type: DataTypes.INTEGER,
  },
  purchaseId: {
    type: DataTypes.INTEGER,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  bonus: {
    type: DataTypes.INTEGER,
  },
  value: {
    type: DataTypes.DECIMAL(18, 2),
  },
  accountId: {
    type: DataTypes.INTEGER,
  },
  brokage: {
    type: DataTypes.DECIMAL(18, 2),
  },
  cess: {
    type: DataTypes.DECIMAL(18, 2),
  },
  stt: {
    type: DataTypes.DECIMAL(18, 2),
  },
  serviceTax: {
    type: DataTypes.DECIMAL(18, 2),
  },
  stampDuty: {
    type: DataTypes.DECIMAL(18, 2),
  },
  turnoverTax: {
    type: DataTypes.DECIMAL(18, 2),
  },
  netValue: {
    type: DataTypes.DECIMAL(18, 2),
  },
  netRate: {
    type: DataTypes.DECIMAL(18, 2),
  },
  companyCode: {
    type: DataTypes.INTEGER,
  },
  yearCode: {
    type: DataTypes.INTEGER,
  },
  createdBy: {
    type: DataTypes.INTEGER,
  },
  modifiedBy: {
    type: DataTypes.INTEGER,
  },
});
