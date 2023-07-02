import { useMutation } from "@tanstack/react-query";
import {
  insertScriptMasterData,
  updateScriptMasterData,
  deleteScriptMasterData,
} from "../../api/scriptMaster/scriptMaster.request";

export const useInsertIntoScriptMasterData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await insertScriptMasterData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Inserted Sucessfully");
    },
    onError: (error) => {
      alert("ScriptMaster Insertion Failed");
      console.log(error);
      return error;
    },
  });
};

export const useUpdateIntoScriptMasterData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await updateScriptMasterData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Updated Sucessfully");
    },
    onError: (error) => {
      alert("ScripttMaster Updation Failed");
      console.log(error);
      return error;
    },
  });
};

export const useDeleteIntoScriptMasterData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await deleteScriptMasterData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Deleted Sucessfully");
    },
    onError: (error) => {
      const err = error.response.data.message;
      alert(`"ScriptMaster Deletion Failed: ", ${err}`);
      console.log(error);
      return error;
    },
  });
};
