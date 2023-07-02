import { processQueryOutput } from "../../utils/query.js";
import { YearMaster } from "./year_master.model.js";

export async function getDataFromYearMaster(query = { where: {} }) {
  let output = await YearMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromYearMaster(query = { where: {} }) {
  let output = await YearMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateYearMasterByQuery(set, query = { where: {} }) {
  let [rows, data] = await YearMaster.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoYearMaster(
  query,
  options = { returning: true }
) {
  let data = await YearMaster.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteYearMasterByQuery(query) {
  let data = await YearMaster.findAll(query);
  const rows = await YearMaster.destroy(query);
  return { rows_affected: rows, data: data };
}
