import api from "../../utils/api-instance";

export const getEquitySalePurchaseData = async (data) => {
  return await api.get("/user/equitySalePurchase", data);
};

export const insertEquitySalePurchaseData = async (data) => {
  return await api.post("user/equitySalePurchase", data);
};

export const updateEquitySalePurchaseData = async (data) => {
  return await api.patch("/user/equitySalePurchase", data);
};

export const deleteEquitySalePurchaseData = async (data) => {
  return await api.post("/user/equitySalePurchase/delete", data);
};

export const getAllEquitySalePurchaseData = async () => {
  return await api.get("/user/equitySalePurchase/all");
};
