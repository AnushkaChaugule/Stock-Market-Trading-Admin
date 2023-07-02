import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { TRANSACTION_DETAILS } from "../../database/dbSchema.js";

export const TransactionDetails = mssql.define(TRANSACTION_DETAILS, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tranId: {
    type: DataTypes.INTEGER,
  },
  detailsId: {
    type: DataTypes.INTEGER,
  },
  debitAc: {
    type: DataTypes.INTEGER,
  },
  creditAc: {
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.DECIMAL(18, 2),
  },
  narration: {
    type: DataTypes.STRING(255),
  },
  drcr: {
    type: DataTypes.CHAR(1),
  },
  da: {
    type: DataTypes.INTEGER,
  },
  ca: {
    type: DataTypes.INTEGER,
  },
});
