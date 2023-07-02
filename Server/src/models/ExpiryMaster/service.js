import { processQueryOutput } from "../../utils/query.js";
import { ExpiryMaster } from "./expiry_master.model.js";

export async function getDataFromExpiryMaster(query = { where: {} }) {
  let output = await ExpiryMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromExpiryMaster(query = { where: {} }) {
  let output = await ExpiryMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateExpiryMasterByQuery(set, query = { where: {} }) {
  let [rows, data] = await ExpiryMaster.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoExpiryMaster(
  query,
  options = { returning: true }
) {
  let data = await ExpiryMaster.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteExpiryMasterByQuery(query) {
  let data = await ExpiryMaster.findAll(query);
  const rows = await ExpiryMaster.destroy(query);
  return { rows_affected: rows, data: data };
}
