import { DataTypes } from "sequelize";
import { mssql } from "../../connections/index.js";
import { GROUP_MASTER } from "../../database/dbSchema.js";

export const GroupMaster = mssql.define(GROUP_MASTER, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  groupName: {
    type: DataTypes.STRING(255),
  },
  groupType: {
    type: DataTypes.CHAR(1),
  },
  groupOrder: {
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
