import api from "../../utils/api-instance";

export const getAccountMasterData = async (data) => {
  return await api.get("/user/accountMaster", data);
};

export const insertAccountMasterData = async (data) => {
  return await api.post("user/accountMaster", data);
};

export const updateAccountMasterData = async (data) => {
  return await api.patch("/user/accountMaster", data);
};

export const deleteAccountMasterData = async (data) => {
  return await api.post("/user/accountMaster/delete", data);
};

export const getAllAccountMasterData = async () => {
  return await api.get("/user/accountMaster/all");
};
