import { processQueryOutput } from "../../utils/query.js";
import { TransactionDetails } from "./transaction_details.model.js";

export async function getDataFromTransactionDetails(query = { where: {} }) {
  let output = await TransactionDetails.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromTransactionDetails(query = { where: {} }) {
  let output = await TransactionDetails.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateTransactionDetailsByQuery(set, query = { where: {} }) {
  let [rows, data] = await TransactionDetails.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoTransactionDetails(
  query,
  options = { returning: true }
) {
  const data = await TransactionDetails.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteTransactionDetailsByQuery(query) {
  let data = await TransactionDetails.findAll(query);
  let rows = await TransactionDetails.destroy(query);
  return { rows_affected: rows, data: data } 
}
