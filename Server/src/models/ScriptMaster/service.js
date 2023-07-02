import { processQueryOutput } from "../../utils/query.js";
import { ScriptMaster } from "./script_master.model.js";

export async function getDataFromScriptMaster(query = { where: {} }) {
  let output = await ScriptMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromScriptMaster(query = { where: {} }) {
  let output = await ScriptMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateScriptMasterByQuery(set, query = { where: {} }) {
  let [rows, data] = await ScriptMaster.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoScriptMaster(
  query,
  options = { returning: true }
) {
  let data = await ScriptMaster.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteScriptMasterByQuery(query) {
  let data = await ScriptMaster.findAll(query);
  const rows = await ScriptMaster.destroy(query);
  return { rows_affected: rows, data: data };
}
