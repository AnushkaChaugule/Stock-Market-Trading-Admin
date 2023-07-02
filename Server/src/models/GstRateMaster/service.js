import { processQueryOutput } from "../../utils/query.js";
import { GstRateMaster } from "./gst_rate_master.model.js";

export async function getDataFromGstRateMaster(query = { where: {} }) {
  let output = await GstRateMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromGstRateMaster(query = { where: {} }) {
  let output = await GstRateMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateGstRateMasterByQuery(set, query = { where: {} }) {
  let [rows, data] = await GstRateMaster.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoGstRateMaster(
  query,
  options = { returning: true }
) {
  const data = await GstRateMaster.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteGstRateMasterByQuery(query) {
  let data = await GstRateMaster.findAll(query);
  const rows = await GstRateMaster.destroy(query);
  return { rows_affected: rows, data: data };
}
