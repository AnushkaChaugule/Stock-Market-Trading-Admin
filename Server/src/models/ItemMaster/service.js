import { processQueryOutput } from "../../utils/query.js";
import { ItemMaster } from "./item_master.model.js";

export async function getDataFromItemMaster(query = { where: {} }) {
  let output = await ItemMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromItemMaster(query = { where: {} }) {
  let output = await ItemMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateItemMasterByQuery(set, query = { where: {} }) {
  let [rows, data] = await ItemMaster.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoItemMaster(
  query,
  options = { returning: true }
) {
  const data = await ItemMaster.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteItemMasterByQuery(query) {
  let data = await ItemMaster.findAll(query);
  const rows = await ItemMaster.destroy(query);
  return { rows_affected: rows, data: data };
}
