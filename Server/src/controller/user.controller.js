import { Op } from "sequelize";
import {
  // Account Master
  insertIntoAccountMaster,
  getDataFromAccountMaster,
  getAllDataFromAccountMaster,
  updateAccountMasterByQuery,
  deleteAccountMasterByQuery,

  // Company
  insertIntoCompany,
  getDataFromCompany,
  getAllDataFromCompany,
  updateCompanyByQuery,
  deleteCompanyByQuery,

  // Equity Sale Purchase
  insertIntoEquitySalePurchase,
  getDataFromEquitySalePurchase,
  getAllDataFromEquitySalePurchase,
  updateEquitySalePurchaseByQuery,
  deleteEquitySalePurchaseByQuery,

  // Expiry Master
  insertIntoExpiryMaster,
  getDataFromExpiryMaster,
  getAllDataFromExpiryMaster,
  updateExpiryMasterByQuery,
  deleteExpiryMasterByQuery,

  //  Group Master
  insertIntoGroupMaster,
  getDataFromGroupMaster,
  getAllDataFromGroupMaster,
  updateGroupMasterByQuery,
  deleteGroupMasterByQuery,

  // Gst Rate Master
  insertIntoGstRateMaster,
  getDataFromGstRateMaster,
  getAllDataFromGstRateMaster,
  updateGstRateMasterByQuery,
  deleteGstRateMasterByQuery,

  // Item Master
  insertIntoItemMaster,
  getDataFromItemMaster,
  getAllDataFromItemMaster,
  updateItemMasterByQuery,
  deleteItemMasterByQuery,

  // Script Master
  insertIntoScriptMaster,
  getDataFromScriptMaster,
  getAllDataFromScriptMaster,
  updateScriptMasterByQuery,
  deleteScriptMasterByQuery,

  // State Master
  insertIntoStateMaster,
  getDataFromStateMaster,
  getAllDataFromStateMaster,
  updateStateMasterByQuery,
  deleteStateMasterByQuery,

  // Transaction Head
  insertIntoTransactionHead,
  getDataFromTransactionHead,
  getAllDataFromTransactionHead,
  updateTransactionHeadByQuery,
  deleteTransactionHeadByQuery,

  // Transaction Details
  insertIntoTransactionDetails,
  getDataFromTransactionDetails,
  getAllDataFromTransactionDetails,
  updateTransactionDetailsByQuery,
  deleteTransactionDetailsByQuery,

  // User Forms
  insertIntoUserForms,
  getDataFromUserForms,
  getAllDataFromUserForms,
  updateUserFormsByQuery,
  deleteUserFormsByQuery,

  // Users
  insertIntoUsers,
  getDataFromUsers,
  getAllDataFromUsers,
  updateUsersByQuery,
  deleteUsersByQuery,

  // Year Master
  insertIntoYearMaster,
  getDataFromYearMaster,
  getAllDataFromYearMaster,
  updateYearMasterByQuery,
  deleteYearMasterByQuery,
} from "../models/index.js";

import {
  AccountMaster,
  Company,
  EquitySalePurchase,
  ExpiryMaster,
  GroupMaster,
  GstRateMaster,
  ItemMaster,
  ScriptMaster,
  StateMaster,
  UserForms,
  Users,
  YearMaster,
  TransactionHead,
  TransactionDetails,
} from "../models/index.js";

import { validateReq } from "../utils/index.js";
import { sendResponse } from "../utils/index.js";
import {
  // Account Master
  insertAccountMasterReq,
  getAccountMasterReq,
  updateAccountMasterReq,
  deleteAccountMasterReq,

  // Company
  insertCompanyReq,
  getCompanyReq,
  updateCompanyReq,
  deleteCompanyReq,

  // Equity Sale Purchase
  insertEquitySalePurchaseReq,
  getEquitySalePurchaseReq,
  updateEquitySalePurchaseReq,
  deleteEquitySalePurchaseReq,

  // Expirt Master
  insertExpiryMasterReq,
  getExpiryMasterReq,
  updateExpiryMasterReq,
  deleteExpiryMasterReq,

  // Group Master
  insertGroupMasterReq,
  getGroupMasterReq,
  updateGroupMasterReq,
  deleteGroupMasterReq,

  // Gst Rate Master
  insertGstRateMasterReq,
  getGstRateMasterReq,
  updateGstRateMasterReq,
  deleteGstRateMasterReq,

  // Item Master
  insertItemMasterReq,
  getItemMasterReq,
  updateItemMasterReq,
  deleteItemMasterReq,

  // Script Master
  insertScriptMasterReq,
  getScriptMasterReq,
  updateScriptMasterReq,
  deleteScriptMasterReq,

  // State Master
  insertStateMasterReq,
  getStateMasterReq,
  updateStateMasterReq,
  deleteStateMasterReq,

  // User Forms
  insertUserFormsReq,
  getUserFormsReq,
  updateUserFormsReq,
  deleteUserFormsReq,

  // Users
  insertUsersReq,
  getUsersReq,
  updateUsersReq,
  deleteUsersReq,

  // Year Master
  insertYearMasterReq,
  getYearMasterReq,
  updateYearMasterReq,
  deleteYearMasterReq,

  // Transaction Head Details
  insertTransactionHeadDetailsReq,
  getTransactionHeadDetailsReq,
  updateTransactionHeadDetailsReq,
  deleteTransactionHeadDetailsReq,
} from "../validators/user.validator.js";

// Account Master

export async function insertAccountMaster(req, res) {
  const { error, value } = validateReq(insertAccountMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }

  try {
    const accountMasterDataQuery = await insertIntoAccountMaster(value);
    return sendResponse(res, 200, accountMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAccountMaster(req, res) {
  const { error, value } = validateReq(getAccountMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const accountMasterDataQuery = await AccountMaster.findOne({
      where: { id: value.id },
    });
    console.log("data", accountMasterDataQuery?.dataValues)
    return sendResponse(res, 200, accountMasterDataQuery?.dataValues);
  } catch (err) {
    console.log(err)
    sendResponse(res, 500, err);
  }
}

export async function updateAccountMaster(req, res) {
  const { error, value } = validateReq(updateAccountMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    // if (!req.body.createdBy) {
    const accountMasterDataQuery = await updateAccountMasterByQuery(value, {
      where: { id: value.id },
      returning: true,
    });
    return sendResponse(res, 200, accountMasterDataQuery);
    // }
    // return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteAccountMaster(req, res) {
  const { error, value } = validateReq(deleteAccountMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };

    const equitySalePurchaseData = await EquitySalePurchase.findAll({
      where: {
        accountId: value.id,
      },
    });
    const itemMasterData = await ItemMaster.findAll({
      where: {
        [Op.or]: [{ pa: value.id }, { sa: value.id }],
      },
    });
    const transactionDetailsData = await TransactionDetails.findAll({
      where: {
        [Op.or]: [{ da: value.id }, { ca: value.id }],
      },
    });
    const transactionHeadData = await TransactionHead.findAll({
      where: {
        cb: value.id,
      },
    });

    if (
      equitySalePurchaseData == "" &&
      itemMasterData == "" &&
      transactionDetailsData == "" &&
      transactionHeadData == ""
    ) {
      const deletedAccountMasterData = await deleteAccountMasterByQuery(
        whereQuery
      );
      return sendResponse(res, 200, deletedAccountMasterData);
    }

    if (
      equitySalePurchaseData != "" &&
      itemMasterData != "" &&
      transactionDetailsData != "" &&
      transactionHeadData != ""
    ) {
      return sendResponse(res, 500, {
        message:
          "The data is present in EQUITYSALEPURCHASE, ITEMMASTER, TRANSACTIONDETAILS AND TRANSACTIONHEAD so it can't be deleted",
      });
    }

    if (
      equitySalePurchaseData != "" &&
      itemMasterData != "" &&
      transactionDetailsData != ""
    ) {
      return sendResponse(res, 500, {
        message:
          "The data is present in EQUITYSALEPURCHASE, ITEMMASTER AND TRANSACTIONDETAILS so it can't be deleted",
      });
    }

    if (
      equitySalePurchaseData != "" &&
      itemMasterData != "" &&
      transactionHeadData != ""
    ) {
      return sendResponse(res, 500, {
        message:
          "The data is present in EQUITYSALEPURCHASE, ITEMMASTER AND TRANSACTIONHEAD so it can't be deleted",
      });
    }

    if (
      equitySalePurchaseData != "" &&
      transactionDetailsData != "" &&
      transactionHeadData != ""
    ) {
      return sendResponse(res, 500, {
        message:
          "The data is present in EQUITYSALEPURCHASE, TRANSACTIONDETAILS AND TRANSACTIONHEAD so it can't be deleted",
      });
    }

    if (
      itemMasterData != "" &&
      transactionDetailsData != "" &&
      transactionHeadData != ""
    ) {
      return sendResponse(res, 500, {
        message:
          "The data is present in ITEMMASTER, TRANSACTIONDETAILS AND TRANSACTIONHEAD so it can't be deleted",
      });
    }

    if (equitySalePurchaseData != "" && itemMasterData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in EQUITYSALEPURCHASE AND ITEMMASTER so it can't be deleted",
      });
    }

    if (equitySalePurchaseData != "" && transactionDetailsData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in EQUITYSALEPURCHASE AND TRANSACTIONDETAILS so it can't be deleted",
      });
    }

    if (equitySalePurchaseData != "" && transactionHeadData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in EQUITYSALEPURCHASE AND TRANSACTIONHEAD so it can't be deleted",
      });
    }

    if (itemMasterData != "" && transactionDetailsData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in ITEMMASTER AND TRANSACTIONDETAILS so it can't be deleted",
      });
    }

    if (itemMasterData != "" && transactionHeadData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in ITEMMASTER AND TRANSACTIONHEAD so it can't be deleted",
      });
    }

    if (transactionDetailsData != "" && transactionHeadData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in TRANSACTIONDETAILS AND TRANSACTIONHEAD so it can't be deleted",
      });
    }

    if (equitySalePurchaseData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in EQUITYSALEPURCHASE so it can't be deleted",
      });
    }

    if (itemMasterData != "") {
      return sendResponse(res, 500, {
        message: "The data is present in ITEMMASTER so it can't be deleted",
      });
    }

    if (transactionDetailsData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in TRANSACTIONDETAILS so it can't be deleted",
      });
    }

    if (transactionHeadData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in TRANSACTIONHEAD so it can't be deleted",
      });
    }
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllAccountMaster(req, res) {
  try {
    const allAccountMasterDataQuery = await getAllDataFromAccountMaster();
    return sendResponse(res, 200, allAccountMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// Company

export async function insertCompany(req, res) {
  const { error, value } = validateReq(insertCompanyReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }

  try {
    const companyDataQuery = await insertIntoCompany(value);
    return sendResponse(res, 200, companyDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getCompany(req, res) {
  const { error, value } = validateReq(getCompanyReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const companyDataQuery = await getDataFromCompany({
      where: { id: value.id },
    });
    return sendResponse(res, 200, companyDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateCompany(req, res) {
  const { error, value } = validateReq(updateCompanyReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    // if (!req.body.createdBy) {
    const companyDataQuery = await updateCompanyByQuery(value, {
      where: { id: value.id },
      returning: true,
    });
    return sendResponse(res, 200, companyDataQuery);
    // }
    // return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteCompany(req, res) {
  const { error, value } = validateReq(deleteCompanyReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };

    const where = {
      where: {
        companyCode: value.id,
      },
    };
    const accountMasterData = await AccountMaster.findAll(where);
    const equitySalePurchaseData = await EquitySalePurchase.findAll(where);
    const groupMasterData = await GroupMaster.findAll(where);

    if (
      accountMasterData == "" &&
      equitySalePurchaseData == "" &&
      groupMasterData == ""
    ) {
      const deletedCompanyData = await deleteCompanyByQuery(whereQuery);
      return sendResponse(res, 200, deletedCompanyData);
    }

    if (
      accountMasterData != "" &&
      equitySalePurchaseData != "" &&
      groupMasterData != ""
    ) {
      return sendResponse(res, 500, {
        message:
          "The data is present in ACCOUNTMASTER, EQUITYSALEPURCHASE AND GROUPMASTER so it can't be deleted",
      });
    }

    if (accountMasterData != "" && equitySalePurchaseData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in ACCOUNTMASTER AND EQUITYSALEPURCHASE so it can't be deleted",
      });
    }

    if (accountMasterData != "" && groupMasterData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in ACCOUNTMASTER AND GROUPMASTER so it can't be deleted",
      });
    }

    if (equitySalePurchaseData != "" && groupMasterData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in EQUITYSALEPURCHASE AND GROUPMASTER so it can't be deleted",
      });
    }

    if (accountMasterData != "") {
      return sendResponse(res, 500, {
        message: "The data is present in ACCOUNTMASTER so it can't be deleted",
      });
    }

    if (equitySalePurchaseData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in EQUITYSALEPURCHASE so it can't be deleted",
      });
    }

    if (groupMasterData != "") {
      return sendResponse(res, 500, {
        message: "The data is present in GROUPMASTER so it can't be deleted",
      });
    }
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllCompany(req, res) {
  try {
    const allCompanyDataQuery = await getAllDataFromCompany();
    return sendResponse(res, 200, allCompanyDataQuery);
  } catch (err) {
    console.log(err);
    sendResponse(res, 500, err);
  }
}

// Equity Sale Purchase

export async function insertEquitySalePurchase(req, res) {
  const { error, value } = validateReq(insertEquitySalePurchaseReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }

  try {
    const equitySalePurchaseDataQuery = await insertIntoEquitySalePurchase(
      value
    );
    return sendResponse(res, 200, equitySalePurchaseDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getEquitySalePurchase(req, res) {
  const { error, value } = validateReq(getEquitySalePurchaseReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const equitySalePurchaseDataQuery = await getDataFromEquitySalePurchase({
      where: { id: value.id },
    });
    return sendResponse(res, 200, equitySalePurchaseDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateEquitySalePurchase(req, res) {
  const { error, value } = validateReq(updateEquitySalePurchaseReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    // if (!req.body.createdBy) {
    const equitySalePurchaseDataQuery = await updateEquitySalePurchaseByQuery(
      value,
      {
        where: { id: value.id },
        returning: true,
      }
    );
    return sendResponse(res, 200, equitySalePurchaseDataQuery);
    // }
    // return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteEquitySalePurchase(req, res) {
  const { error, value } = validateReq(deleteEquitySalePurchaseReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const deletedEquitySalePurchaseData = await deleteEquitySalePurchaseByQuery(
      whereQuery
    );

    return sendResponse(res, 200, deletedEquitySalePurchaseData);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllEquitySalePurchase(req, res) {
  try {
    const allEquitySalePurchaseDataQuery =
      await getAllDataFromEquitySalePurchase();
    return sendResponse(res, 200, allEquitySalePurchaseDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// Expiry Master

export async function insertExpiryMaster(req, res) {
  const { error, value } = validateReq(insertExpiryMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }

  try {
    const expiryMasterDataQuery = await insertIntoExpiryMaster(value);
    return sendResponse(res, 200, expiryMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getExpiryMaster(req, res) {
  const { error, value } = validateReq(getExpiryMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const expiryMasterDataQuery = await getDataFromExpiryMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, expiryMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateExpiryMaster(req, res) {
  const { error, value } = validateReq(updateExpiryMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    // if (!req.body.createdBy) {
    const expiryMasterDataQuery = await updateExpiryMasterByQuery(value, {
      where: { id: value.id },
      returning: true,
    });
    return sendResponse(res, 200, expiryMasterDataQuery);
    // }
    // return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteExpiryMaster(req, res) {
  const { error, value } = validateReq(deleteExpiryMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const deletedExpiryMasterData = await deleteExpiryMasterByQuery(whereQuery);

    return sendResponse(res, 200, deletedExpiryMasterData);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllExpiryMaster(req, res) {
  try {
    const allExpiryMasterDataQuery = await getAllDataFromExpiryMaster();
    return sendResponse(res, 200, allExpiryMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// Group Master

export async function insertGroupMaster(req, res) {
  const { error, value } = validateReq(insertGroupMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }

  try {
    const groupMasterDataQuery = await insertIntoGroupMaster(value);
    return sendResponse(res, 200, groupMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getGroupMaster(req, res) {
  const { error, value } = validateReq(getGroupMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const groupMasterDataQuery = await getDataFromGroupMaster({
      where: { companyCode: value.id },
    });
    return sendResponse(res, 200, groupMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateGroupMaster(req, res) {
  const { error, value } = validateReq(updateGroupMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    // if (!req.body.createdBy) {
    const groupMasterDataQuery = await updateGroupMasterByQuery(value, {
      where: { id: value.id },
      returning: true,
    });
    return sendResponse(res, 200, groupMasterDataQuery);
    // }
    // return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteGroupMaster(req, res) {
  const { error, value } = validateReq(deleteGroupMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };

    const where = {
      where: {
        groupId: value.id,
      },
    };
    const accountMasterData = await AccountMaster.findAll(where);

    if (accountMasterData == "") {
      const deletedGroupMasterData = await deleteGroupMasterByQuery(whereQuery);
      return sendResponse(res, 200, deletedGroupMasterData);
    }

    if (accountMasterData != "") {
      return sendResponse(res, 500, {
        message: "The data is present in ACCOUNTMASTER so it can't be deleted",
      });
    }
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllGroupMaster(req, res) {
  try {
    const allGroupMasterDataQuery = await getAllDataFromGroupMaster();
    return sendResponse(res, 200, allGroupMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// Gst Rate Master

export async function insertGstRateMaster(req, res) {
  const { error, value } = validateReq(insertGstRateMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }

  try {
    const gstRateMasterDataQuery = await insertIntoGstRateMaster(value);
    return sendResponse(res, 200, gstRateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getGstRateMaster(req, res) {
  const { error, value } = validateReq(getGstRateMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const gstRateMasterDataQuery = await getDataFromGstRateMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, gstRateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateGstRateMaster(req, res) {
  const { error, value } = validateReq(updateGstRateMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    // if (!req.body.createdBy) {
    const gstRateMasterDataQuery = await updateGstRateMasterByQuery(value, {
      where: { id: value.id },
      returning: true,
    });
    return sendResponse(res, 200, gstRateMasterDataQuery);
    // }
    // return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteGstRateMaster(req, res) {
  const { error, value } = validateReq(deleteGstRateMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };

    const where = {
      where: {
        gstCode: value.id,
      },
    };
    const itemMasterData = await ItemMaster.findAll(where);

    if (itemMasterData == "") {
      const deletedGstRateMasterData = await deleteGstRateMasterByQuery(
        whereQuery
      );
      return sendResponse(res, 200, deletedGstRateMasterData);
    }

    if (itemMasterData != "") {
      return sendResponse(res, 500, {
        message: "The data is present in ITEMMASTER so it can't be deleted",
      });
    }
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllGstRateMaster(req, res) {
  try {
    const allGstRateMasterDataQuery = await getAllDataFromGstRateMaster();
    return sendResponse(res, 200, allGstRateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// Item Master

export async function insertItemMaster(req, res) {
  const { error, value } = validateReq(insertItemMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }

  try {
    const itemMasterDataQuery = await insertIntoItemMaster(value);
    return sendResponse(res, 200, itemMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getItemMaster(req, res) {
  const { error, value } = validateReq(getItemMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const itemMasterDataQuery = await getDataFromItemMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, itemMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateItemMaster(req, res) {
  const { error, value } = validateReq(updateItemMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    // if (!req.body.createdBy) {
    const itemMasterDataQuery = await updateItemMasterByQuery(value, {
      where: { id: value.id },
      returning: true,
    });
    return sendResponse(res, 200, itemMasterDataQuery);
    // }
    // return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteItemMaster(req, res) {
  const { error, value } = validateReq(deleteItemMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const deletedItemMasterData = await deleteItemMasterByQuery(whereQuery);

    return sendResponse(res, 200, deletedItemMasterData);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllItemMaster(req, res) {
  try {
    const allItemMasterDataQuery = await getAllDataFromItemMaster();
    return sendResponse(res, 200, allItemMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// Script Master

export async function insertScriptMaster(req, res) {
  const { error, value } = validateReq(insertScriptMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }

  try {
    const scriptMasterDataQuery = await insertIntoScriptMaster(value);
    return sendResponse(res, 200, scriptMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getScriptMaster(req, res) {
  const { error, value } = validateReq(getScriptMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const scriptMasterDataQuery = await getDataFromScriptMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, scriptMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateScriptMaster(req, res) {
  const { error, value } = validateReq(updateScriptMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    // if (!req.body.createdBy) {
    const scriptMasterDataQuery = await updateScriptMasterByQuery(value, {
      where: { id: value.id },
      returning: true,
    });
    return sendResponse(res, 200, scriptMasterDataQuery);
    // }
    // return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteScriptMaster(req, res) {
  const { error, value } = validateReq(deleteScriptMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };

    const where = {
      where: {
        scriptId: value.id,
      },
    };
    const equitySalePurchaseData = await EquitySalePurchase.findAll(where);

    if (equitySalePurchaseData == "") {
      const deletedScriptMasterData = await deleteScriptMasterByQuery(
        whereQuery
      );
      return sendResponse(res, 200, deletedScriptMasterData);
    }

    if (equitySalePurchaseData != "") {
      return sendResponse(res, 500, {
        message:
          "The data is present in EQUITYSALEPURCHASE so it can't be deleted",
      });
    }
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllScriptMaster(req, res) {
  try {
    const allScriptMasterDataQuery = await getAllDataFromScriptMaster();
    return sendResponse(res, 200, allScriptMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// State Master

export async function insertStateMaster(req, res) {
  const { error, value } = validateReq(insertStateMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }

  try {
    const stateMasterDataQuery = await insertIntoStateMaster(value);
    return sendResponse(res, 200, stateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getStateMaster(req, res) {
  const { error, value } = validateReq(getStateMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const stateMasterDataQuery = await getDataFromStateMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, stateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateStateMaster(req, res) {
  const { error, value } = validateReq(updateStateMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    // if (!req.body.createdBy) {
    const stateMasterDataQuery = await updateStateMasterByQuery(value, {
      where: { id: value.id },
      returning: true,
    });
    return sendResponse(res, 200, stateMasterDataQuery);
    // }
    // return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteStateMaster(req, res) {
  const { error, value } = validateReq(deleteStateMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const deletedStateMasterData = await deleteStateMasterByQuery(whereQuery);

    return sendResponse(res, 200, deletedStateMasterData);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllStateMaster(req, res) {
  try {
    const allStateMasterDataQuery = await getAllDataFromStateMaster();
    return sendResponse(res, 200, allStateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// User Forms

export async function insertUserForms(req, res) {
  const { error, value } = validateReq(insertUserFormsReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }

  try {
    const userFormsDataQuery = await insertIntoUserForms(value);
    return sendResponse(res, 200, userFormsDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getUserForms(req, res) {
  const { error, value } = validateReq(getUserFormsReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const userFormsDataQuery = await getDataFromUserForms({
      where: { id: value.id },
    });
    return sendResponse(res, 200, userFormsDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateUserForms(req, res) {
  const { error, value } = validateReq(updateUserFormsReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    // if (!req.body.createdBy) {
    const userFormsDataQuery = await updateUserFormsByQuery(value, {
      where: { id: value.id },
      returning: true,
    });
    return sendResponse(res, 200, userFormsDataQuery);
    // }
    // return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteUserForms(req, res) {
  const { error, value } = validateReq(deleteUserFormsReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const userFormsDataQuery = await deleteUserFormsByQuery(whereQuery);

    return sendResponse(res, 200, userFormsDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllUserForms(req, res) {
  try {
    const allUserFormsDataQuery = await getAllDataFromUserForms();
    return sendResponse(res, 200, allUserFormsDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// Users

export async function insertUsers(req, res) {
  const { error, value } = validateReq(insertUsersReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }

  try {
    const usersDataQuery = await insertIntoUsers(value);
    return sendResponse(res, 200, usersDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getUsers(req, res) {
  const { error, value } = validateReq(getUsersReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const usersDataQuery = await getDataFromUsers({
      where: { id: value.id },
    });
    return sendResponse(res, 200, usersDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateUsers(req, res) {
  const { error, value } = validateReq(updateUsersReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    // if (!req.body.createdBy) {
    const usersDataQuery = await updateUsersByQuery(value, {
      where: { id: value.id },
      returning: true,
    });
    return sendResponse(res, 200, usersDataQuery);
    // }
    // return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteUsers(req, res) {
  const { error, value } = validateReq(deleteUsersReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const usersDataQuery = await deleteUsersByQuery(whereQuery);

    return sendResponse(res, 200, usersDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllUsers(req, res) {
  try {
    const allUsersDataQuery = await getAllDataFromUsers();
    return sendResponse(res, 200, allUsersDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// Year Master

export async function insertYearMaster(req, res) {
  const { error, value } = validateReq(insertYearMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }

  try {
    const yearMasterDataQuery = await insertIntoYearMaster(value);
    return sendResponse(res, 200, yearMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getYearMaster(req, res) {
  const { error, value } = validateReq(getYearMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const yearMasterDataQuery = await getDataFromYearMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, yearMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateYearMaster(req, res) {
  const { error, value } = validateReq(updateYearMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    // if (!req.body.createdBy) {
    const yearMasterDataQuery = await updateYearMasterByQuery(value, {
      where: { id: value.id },
      returning: true,
    });
    return sendResponse(res, 200, yearMasterDataQuery);
    // }
    // return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteYearMaster(req, res) {
  const { error, value } = validateReq(deleteYearMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const yearMasterDataQuery = await deleteYearMasterByQuery(whereQuery);

    return sendResponse(res, 200, yearMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllYearMaster(req, res) {
  try {
    const allYearMasterDataQuery = await getAllDataFromYearMaster();
    return sendResponse(res, 200, allYearMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// Transaction Head Details

export async function insertTransactionHeadDetails(req, res) {
  const { error, value } = validateReq(
    insertTransactionHeadDetailsReq,
    req.body
  );
  if (error) {
    return sendResponse(res, 422, error);
  }
  const { head, details } = value;
  try {
    const TransactionHeadData = await insertIntoTransactionHead(head);

    const TransactionDetailsData = await Promise.all(
      details.map((d) => {
        const data = insertIntoTransactionDetails({
          ...d,
          tranId: TransactionHeadData.id,
        });
        return data;
      })
    );
    sendResponse(res, 200, { TransactionHeadData, TransactionDetailsData });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getTransactionHeadDetails(req, res) {
  const { error, value } = validateReq(getTransactionHeadDetailsReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }

  const { head, details } = value;
  console.log("value: ", value);

  let apiResponse = {};
  try {
    if (head) {
      const getTransactionHeadData = await getDataFromTransactionHead({
        where: { id: head.id },
        returning: true,
      });
      apiResponse = { ...apiResponse, getTransactionHeadData };
    }
    if (!details) {
      const getTransactionDetailsData = await getDataFromTransactionDetails({
        where: { tranId: head.id },
        returning: true,
      });
      apiResponse = { ...apiResponse, getTransactionDetailsData };
    }

    sendResponse(res, 200, apiResponse);
  } catch (err) {
    console.log(err);
    sendResponse(res, 500, err);
  }
}

export async function updateTransactionHeadDetails(req, res) {
  const { error, value } = validateReq(
    updateTransactionHeadDetailsReq,
    req.body
  );
  if (error) {
    return sendResponse(res, 422, error.details);
  }

  let apiResponse = {};
  try {
    //head update
    if (value.head) {
      const updateTransactionHeadData = await updateTransactionHeadByQuery(
        value.head,
        {
          where: { id: value.head.id },
          returning: true,
        }
      );
      apiResponse = { ...apiResponse, updateTransactionHeadData };
    }

    // details delete
    if (value.details.delete) {
      const whereQuery = {
        where: {
          id: {
            [Op.in]: value.details.delete.id,
          },
        },
      };
      const deleteTransactionDetailsData =
        await deleteTransactionDetailsByQuery(whereQuery);
      apiResponse = { ...apiResponse, deleteTransactionDetailsData };
    }

    // details insert
    if (value.details.insert) {
      const insertTransactionDetailsData = await Promise.all(
        value.details.insert.map((d) => {
          const insertedData = insertIntoTransactionDetails(d);
          return insertedData;
        })
      );
      apiResponse = { ...apiResponse, insertTransactionDetailsData };
    }

    // details update
    if (value.details.update) {
      const updateTransactionDetailsData = await Promise.all(
        value.details.update.map((data) => {
          const { id, ...others } = data;
          return updateTransactionDetailsByQuery(others, {
            where: { id: id },
            returning: true,
          });
        })
      );
      apiResponse = { ...apiResponse, updateTransactionDetailsData };
    }

    sendResponse(res, 200, { message: "success", data: apiResponse });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteTransactionHeadDetails(req, res) {
  const { error, value } = validateReq(
    deleteTransactionHeadDetailsReq,
    req.body
  );
  if (error) {
    return sendResponse(res, 422, error);
  }

  let apiResponse = {};

  try {
    const whereQuery = {
      where: {
        id: {
          [Op.in]: value.head.id,
        },
      },
    };
    const deleteTransactionHeadData = await deleteTransactionHeadByQuery(
      whereQuery
    );

    const query = {
      where: {
        tranId: {
          [Op.in]: value.head.id,
        },
      },
    };
    const deleteTransactionDetailsData = await deleteTransactionDetailsByQuery(
      query
    );

    apiResponse = {
      ...apiResponse,
      deleteTransactionHeadData,
      deleteTransactionDetailsData,
    };

    return sendResponse(res, 200, apiResponse);
  } catch (err) {
    console.log(err);
    sendResponse(res, 500, err);
  }
}

export async function getAllTransactionHeadDetails(req, res) {
  let apiResponse = {};
  try {
    const getTransactionHeadData = await getAllDataFromTransactionHead();
    const getTransactionDetailsData = await getAllDataFromTransactionDetails();
    apiResponse = {
      ...apiResponse,
      getTransactionHeadData,
      getTransactionDetailsData,
    };
    sendResponse(res, 200, apiResponse);
  } catch (err) {
    console.log(err);
    sendResponse(res, 500, err);
  }
}
