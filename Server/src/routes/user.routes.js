import { Router } from "express";

import {
  //Account Master
  insertAccountMaster,
  getAccountMaster,
  updateAccountMaster,
  deleteAccountMaster,
  getAllAccountMaster,

  // Company
  insertCompany,
  getCompany,
  updateCompany,
  deleteCompany,
  getAllCompany,

  // Equity Sale Purchase
  insertEquitySalePurchase,
  getEquitySalePurchase,
  updateEquitySalePurchase,
  deleteEquitySalePurchase,
  getAllEquitySalePurchase,

  // Expiry Master
  insertExpiryMaster,
  getExpiryMaster,
  updateExpiryMaster,
  deleteExpiryMaster,
  getAllExpiryMaster,

  // Group Master
  insertGroupMaster,
  getGroupMaster,
  updateGroupMaster,
  deleteGroupMaster,
  getAllGroupMaster,

  // Gst Rate Master
  insertGstRateMaster,
  getGstRateMaster,
  updateGstRateMaster,
  deleteGstRateMaster,
  getAllGstRateMaster,

  // Item Master
  insertItemMaster,
  getItemMaster,
  updateItemMaster,
  deleteItemMaster,
  getAllItemMaster,

  // Script Master
  insertScriptMaster,
  getScriptMaster,
  updateScriptMaster,
  deleteScriptMaster,
  getAllScriptMaster,

  //State Master
  insertStateMaster,
  getStateMaster,
  updateStateMaster,
  deleteStateMaster,
  getAllStateMaster,

  // User Forms
  insertUserForms,
  getUserForms,
  updateUserForms,
  deleteUserForms,
  getAllUserForms,

  // Users
  insertUsers,
  getUsers,
  updateUsers,
  deleteUsers,
  getAllUsers,

  // Year Master
  insertYearMaster,
  getYearMaster,
  updateYearMaster,
  deleteYearMaster,
  getAllYearMaster,

  // Transaction Head Details
  insertTransactionHeadDetails,
  getTransactionHeadDetails,
  updateTransactionHeadDetails,
  deleteTransactionHeadDetails,
  getAllTransactionHeadDetails,
} from "../controller/user.controller.js";

const router = Router();

// Account Master Table
router.post("/accountMaster", insertAccountMaster);
router.get("/accountMaster", getAccountMaster);
router.patch("/accountMaster", updateAccountMaster);
router.post("/accountMaster/delete", deleteAccountMaster);
router.get("/accountMaster/all", getAllAccountMaster);

// Company Table
router.post("/company", insertCompany);
router.get("/company", getCompany);
router.patch("/company", updateCompany);
router.post("/company/delete", deleteCompany);
router.get("/company/all", getAllCompany);

// Equity Sale Purchase Table
router.post("/equitySalePurchase", insertEquitySalePurchase);
router.get("/equitySalePurchase", getEquitySalePurchase);
router.patch("/equitySalePurchase", updateEquitySalePurchase);
router.post("/equitySalePurchase/delete", deleteEquitySalePurchase);
router.get("/equitySalePurchase/all", getAllEquitySalePurchase);

// Expiry Master Table
router.post("/expiryMaster", insertExpiryMaster);
router.get("/expiryMaster", getExpiryMaster);
router.patch("/expiryMaster", updateExpiryMaster);
router.post("/expiryMaster/delete", deleteExpiryMaster);
router.get("/expiryMaster/all", getAllExpiryMaster);

//  Group Master Table
router.post("/groupMaster", insertGroupMaster);
router.get("/groupMaster", getGroupMaster);
router.patch("/groupMaster", updateGroupMaster);
router.post("/groupMaster/delete", deleteGroupMaster);
router.get("/groupMaster/all", getAllGroupMaster);

// Gst Rate Master Table
router.post("/gstRateMaster", insertGstRateMaster);
router.get("/gstRateMaster", getGstRateMaster);
router.patch("/gstRateMaster", updateGstRateMaster);
router.post("/gstRateMaster/delete", deleteGstRateMaster);
router.get("/gstRateMaster/all", getAllGstRateMaster);

// Item Master Table
router.post("/itemMaster", insertItemMaster);
router.get("/itemMaster", getItemMaster);
router.patch("/itemMaster", updateItemMaster);
router.post("/itemMaster/delete", deleteItemMaster);
router.get("/itemMaster/all", getAllItemMaster);

// Script Master Table
router.post("/scriptMaster", insertScriptMaster);
router.get("/scriptMaster", getScriptMaster);
router.patch("/scriptMaster", updateScriptMaster);
router.post("/scriptMaster/delete", deleteScriptMaster);
router.get("/scriptMaster/all", getAllScriptMaster);

// State Master Table
router.post("/stateMaster", insertStateMaster);
router.get("/stateMaster", getStateMaster);
router.patch("/stateMaster", updateStateMaster);
router.post("/stateMaster/delete", deleteStateMaster);
router.get("/stateMaster/all", getAllStateMaster);

// User Forms Table
router.post("/userForms", insertUserForms);
router.get("/userForms", getUserForms);
router.patch("/userForms", updateUserForms);
router.post("/userForms/delete", deleteUserForms);
router.get("/userForms/all", getAllUserForms);

// Users Table
router.post("/users", insertUsers);
router.get("/users", getUsers);
router.patch("/users", updateUsers);
router.post("/users/delete", deleteUsers);
router.get("/users/all", getAllUsers);

// Year Master Table
router.post("/yearMaster", insertYearMaster);
router.get("/yearMaster", getYearMaster);
router.patch("/yearMaster", updateYearMaster);
router.post("/yearMaster/delete", deleteYearMaster);
router.get("/yearMaster/all", getAllYearMaster);

// Transaction Head Details
router.post("/transactionHeadDetails", insertTransactionHeadDetails);
router.get("/transactionHeadDetails", getTransactionHeadDetails);
router.patch("/transactionHeadDetails", updateTransactionHeadDetails);
router.post("/transactionHeadDetails/delete", deleteTransactionHeadDetails);
router.get("/transactionHeadDetails/all", getAllTransactionHeadDetails);

export default router;
