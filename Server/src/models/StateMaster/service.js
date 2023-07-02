import { processQueryOutput } from "../../utils/query.js";
import { StateMaster } from "./state_master.model.js";

export async function getDataFromStateMaster(query = { where: {} }) {
  let output = await StateMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromStateMaster(query = { where: {} }) {
  let output = await StateMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateStateMasterByQuery(set, query = { where: {} }) {
  let [rows, data] = await StateMaster.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoStateMaster(
  query,
  options = { returning: true }
) {
  const data = await StateMaster.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteStateMasterByQuery(query) {
  let data = await StateMaster.findAll(query);
  let rows = await StateMaster.destroy(query);
  return { rows_affected: rows, data: data };
}
