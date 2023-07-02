import { processQueryOutput } from "../../utils/query.js";
import { EquitySalePurchase } from "./equity_sale_purchase.model.js";

export async function getDataFromEquitySalePurchase(query = { where: {} }) {
  let output = await EquitySalePurchase.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function getAllDataFromEquitySalePurchase(query = { where: {} }) {
  let output = await EquitySalePurchase.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateEquitySalePurchaseByQuery(
  set,
  query = { where: {} }
) {
  let [rows, data] = await EquitySalePurchase.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoEquitySalePurchase(
  query,
  options = { returning: true }
) {
  let data = await EquitySalePurchase.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteEquitySalePurchaseByQuery(query) {
  let data = await EquitySalePurchase.findAll(query);
  const rows = await EquitySalePurchase.destroy(query);
  return { rows_affected: rows, data: data };
}
