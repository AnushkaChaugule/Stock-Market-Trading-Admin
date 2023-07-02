import { processQueryOutput } from "../../utils/query.js";
import { UserForms } from "./user_forms.model.js";

export async function getDataFromUserForms(query = { where: {} }) {
  let output = await UserForms.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromUserForms(query = { where: {} }) {
  let output = await UserForms.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateUserFormsByQuery(set, query = { where: {} }) {
  let [rows, data] = await UserForms.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoUserForms(
  query,
  options = { returning: true }
) {
  const data = await UserForms.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteUserFormsByQuery(query) {
  let data = await UserForms.findAll(query);
  const rows = await UserForms.destroy(query);
  return { rows_affected: rows, data: data };
}
