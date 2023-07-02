import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { YEAR_MASTER } from "../../database/dbSchema.js";

export const YearMaster = mssql.define(YEAR_MASTER, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fromDate: {
    type: DataTypes.DATEONLY,
    field: "fromDate",
  },
  toDate: {
    type: DataTypes.DATEONLY,
    field: "toDate",
  },
});
