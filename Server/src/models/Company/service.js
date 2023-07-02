import { processQueryOutput } from "../../utils/query.js";
import { Company } from "./company.model.js";

export async function getDataFromCompany(query = { where: {} }) {
  let output = await Company.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromCompany(query = { where: {} }) {
  let output = await Company.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateCompanyByQuery(set, query = { where: {} }) {
  let [rows, data] = await Company.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoCompany(query, options = { returning: true }) {
  const data = await Company.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteCompanyByQuery(query) {
  let data = await Company.findAll(query);
  const rows = await Company.destroy(query);
  return { rows_affected: rows, data: data };
}
