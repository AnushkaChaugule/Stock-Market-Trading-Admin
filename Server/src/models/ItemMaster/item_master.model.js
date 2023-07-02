import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { ITEM_MASTER } from "../../database/dbSchema.js";

export const ItemMaster = mssql.define(ITEM_MASTER, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  itemCode: {
    type: DataTypes.INTEGER,
  },
  itemName: {
    type: DataTypes.STRING(25),
  },
  openingStock: {
    type: DataTypes.INTEGER,
  },
  wtPer: {
    type: DataTypes.INTEGER,
  },
  hsnNo: {
    type: DataTypes.STRING(15),
  },
  gstCode: {
    type: DataTypes.INTEGER,
  },
  isService: {
    type: DataTypes.CHAR(1),
  },
  openingValue: {
    type: DataTypes.DECIMAL(18, 2),
  },
  ratePer: {
    type: DataTypes.CHAR(1),
  },
  reverseCalculation: {
    type: DataTypes.CHAR(1),
  },
  purchaseAccount: {
    type: DataTypes.INTEGER,
  },
  pa: {
    type: DataTypes.INTEGER,
  },
  sellAccount: {
    type: DataTypes.INTEGER,
  },
  sa: {
    type: DataTypes.INTEGER,
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
