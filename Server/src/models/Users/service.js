import { processQueryOutput } from "../../utils/query.js";
import { Users } from "./users.model.js";

export async function getDataFromUsers(query = { where: {} }) {
  let output = await Users.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromUsers(query = { where: {} }) {
  let output = await Users.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateUsersByQuery(set, query = { where: {} }) {
  let [rows, data] = await Users.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoUsers(query, options = { returning: true }) {
  const data = await Users.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteUsersByQuery(query) {
  let data = await Users.findAll(query);
  const rows = await Users.destroy(query);
  return { rows_affected: rows, data: data };
}
