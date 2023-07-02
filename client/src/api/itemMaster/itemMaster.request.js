import api from "../../utils/api-instance";

export const getItemMasterData = async (data) => {
  return await api.get("/user/itemMaster", data);
};

export const insertItemMasterData = async (data) => {
  return await api.post("user/itemMaster", data);
};

export const updateItemMasterData = async (data) => {
  return await api.patch("/user/itemMaster", data);
};

export const deleteItemMasterData = async (data) => {
  return await api.post("/user/itemMaster/delete", data);
};

export const getAllItemMasterData = async () => {
  return await api.get("/user/itemMaster/all");
};
