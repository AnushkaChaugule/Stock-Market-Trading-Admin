import { processQueryOutput } from "../../utils/query.js";
import { GroupMaster } from "./group_master.model.js";

export async function getDataFromGroupMaster(query = { where: {} }) {
  let output = await GroupMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromGroupMaster(query = { where: {} }) {
  let output = await GroupMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateGroupMasterByQuery(set, query = { where: {} }) {
  let [rows, data] = await GroupMaster.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoGroupMaster(
  query,
  options = { returning: true }
) {
  let data = await GroupMaster.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteGroupMasterByQuery(query) {
  let data = await GroupMaster.findAll(query);
  const rows = await GroupMaster.destroy(query);
  return { rows_affected: rows, data: data };
}
