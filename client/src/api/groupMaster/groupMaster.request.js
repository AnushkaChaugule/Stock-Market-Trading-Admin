import api from "../../utils/api-instance";

export const insertGroupMasterData = async (data) => {
  return await api.post("/user/groupMaster", data);
};

export const getGroupMasterData = async (data) => {
  return await api.get("/user/groupMaster", data);
};

export const deleteGroupMasterData = async (data) => {
  return await api.post("/user/groupMaster/delete", data);
};

export const updateGroupMasterData = async (data) => {
  return await api.patch("/user/groupMaster", data);
};

export const getAllGroupMasterData = async () => {
  return await api.get("/user/groupMaster/all");
};
