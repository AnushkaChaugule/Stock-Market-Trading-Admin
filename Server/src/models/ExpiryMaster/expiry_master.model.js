import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { EXPIRY_MASTER } from "../../database/dbSchema.js";

export const ExpiryMaster = mssql.define(EXPIRY_MASTER, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  expiryDate: {
    type: DataTypes.DATEONLY,
  },
});
