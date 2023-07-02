import { useMutation } from "@tanstack/react-query";
import {
  deleteCompanyData,
  insertCompanyData,
  updateCompanyData,
} from "../../api/company/company.request";

export const useInsertIntoCompanyData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await insertCompanyData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Inserted Sucessfully 👍👍");
    },
    onError: (error) => {
      alert(
        "Company Insertion Failed 👎👎, Please Insert all the requried Fields."
      );
      console.log(error);
      return error;
    },
  });
};
export const useUpdateIntoCompanyData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await updateCompanyData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Updated Sucessfully 👍👍");
    },
    onError: (error) => {
      alert("Company Updation Failed 👎👎");
      console.log(error);
      return error;
    },
  });
};
export const useDeleteIntoCompanyData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await deleteCompanyData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Deleted Sucessfully 👍👍");
    },
    onError: (error) => {
      const err = error.response.data.message;
      alert(`"Company Deletion Failed : ",${err}`);
      console.log(error);
      return error;
    },
  });
};
