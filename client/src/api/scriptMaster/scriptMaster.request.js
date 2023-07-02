import api from "../../utils/api-instance";

export const insertScriptMasterData = async (data) => {
  return await api.post("/user/scriptMaster", data);
};

export const getScriptMasterData = async (data) => {
  return await api.get("/user/scriptMaster", data);
};

export const deleteScriptMasterData = async (data) => {
  return await api.post("/user/scriptMaster/delete", data);
};

export const updateScriptMasterData = async (data) => {
  return await api.patch("/user/scriptMaster", data);
};

export const getAllScriptMasterData = async () => {
  return await api.get("/user/scriptMaster/all");
};
