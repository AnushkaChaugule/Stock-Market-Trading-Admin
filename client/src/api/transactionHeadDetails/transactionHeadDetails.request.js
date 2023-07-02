import api from "../../utils/api-instance";

export const insertTransactionHeadDetailsData = async (data) => {
  return await api.post("/user/transactionHeadDetails", data);
};

export const getTransactionHeadDetailsData = async (data) => {
  return await api.get("/user/transactionHeadDetails", data);
};

export const deleteTransactionHeadDetailsData = async (data) => {
  return await api.post("/user/transactionHeadDetails/delete", data);
};

export const updateTransactionHeadDetailsData = async (data) => {
  return await api.patch("/user/transactionHeadDetails", data);
};

export const getAllTransactionHeadDetailsData = async () => {
  return await api.get("/user/transactionHeadDetails/all");
};
