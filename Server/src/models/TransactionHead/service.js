import { processQueryOutput } from "../../utils/query.js";
import { TransactionHead } from "./transaction_head.model.js";

export async function getDataFromTransactionHead(query = { where: {} }) {
  let output = await TransactionHead.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromTransactionHead(query = { where: {} }) {
  let output = await TransactionHead.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateTransactionHeadByQuery(set, query = { where: {} }) {
  let [rows, data] = await TransactionHead.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoTransactionHead(
  query,
  options = { returning: true }
) {
  const data = await TransactionHead.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteTransactionHeadByQuery(query) {
  let data = await TransactionHead.findAll(query);
  let rows = await TransactionHead.destroy(query);
  return { rows_affected: rows, data: data };
}
