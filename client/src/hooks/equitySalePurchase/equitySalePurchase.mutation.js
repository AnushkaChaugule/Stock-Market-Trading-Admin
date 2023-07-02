import { useMutation } from "@tanstack/react-query";
import {
  insertEquitySalePurchaseData,
  updateEquitySalePurchaseData,
  deleteEquitySalePurchaseData,
} from "../../api/equitySalePurchase/equitySalePurchase.request";

export const useInsertIntoEquitySalePurchaseData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await insertEquitySalePurchaseData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Inserted Sucessfully 👍👍");
    },
    onError: (error) => {
      alert(
        "Equity Insertion Failed 👎👎, Please Insert all the requried Fields."
      );
      console.log(error);
      return error;
    },
  });
};
export const useUpdateIntoEquitySalePurchaseData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await updateEquitySalePurchaseData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Updated Sucessfully 👍👍");
    },
    onError: (error) => {
      alert("Equity Updation Failed 👎👎");
      console.log(error);
      return error;
    },
  });
};
export const useDeleteIntoEquitySalePurchaseData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await deleteEquitySalePurchaseData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Deleted Sucessfully 👍👍");
    },
    onError: (error) => {
      alert("Equity Deletion Failed 👎👎");
      console.log(error);
      return error;
    },
  });
};
