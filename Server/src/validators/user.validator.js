import Joi from "joi";

// Account Master

// B - Bank, P - Party, C - Cash , S - Supplier, I - Income, E - Expensis
// D - Debit, C - Credit

export const insertAccountMasterReq = Joi.object({
  accountName: Joi.string().required(),
  accountType: Joi.string().valid("B", "P", "C", "S", "I", "E").required(),
  address: Joi.string().allow(null, ""),
  cityCode: Joi.number().allow(null, ""),
  groupId: Joi.number().required(),
  openingBalance: Joi.number().allow(null, ""),
  drcr: Joi.string().valid("D", "C").allow(null, ""),
  unregistered: Joi.string().valid("Y", "N").allow(null, ""),
  gstNo: Joi.string().allow(null, ""), //if yes else required
  fssaiNo: Joi.string().allow(null, ""),
  stateCode: Joi.string().required(),
  bankAccountCode: Joi.string().allow(null, ""),
  bankName: Joi.string().allow(null, ""),
  branch: Joi.string().allow(null, ""),
  ifsc: Joi.string().allow(null, ""),
  whatsappNo: Joi.string().allow(null, ""),
  tdstcsApplicable: Joi.string().valid().allow(null, ""),
  locked: Joi.string().valid().allow(null, ""),
  email: Joi.string().allow(null, ""),
  ccEmail: Joi.string().allow(null, ""),
  mobileNo: Joi.string().allow(null, ""),
  tanNo: Joi.string().allow(null, ""),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const getAccountMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateAccountMasterReq = Joi.object({
  id: Joi.number().required(),
  accountName: Joi.string().required(),
  accountType: Joi.string().valid("B", "P", "C", "S", "I", "E").required(),
  address: Joi.string().allow(null, ""),
  cityCode: Joi.number().allow(null, ""),
  groupId: Joi.number().required(),
  openingBalance: Joi.number().allow(null, ""),
  drcr: Joi.string().allow(null, ""),
  unregisted: Joi.string().valid().allow(null, ""),
  gstNo: Joi.string().allow(null, ""),
  fssaiNo: Joi.string().allow(null, ""),
  stateCode: Joi.string().required(),
  bankAccountCode: Joi.string().allow(null, ""),
  bankName: Joi.string().allow(null, ""),
  branch: Joi.string().allow(null, ""),
  ifsc: Joi.string().allow(null, ""),
  whatsappNo: Joi.string().allow(null, ""),
  tdstcsApplicable: Joi.string().valid().allow(null, ""),
  locked: Joi.string().valid().allow(null, ""),
  email: Joi.string().allow(null, ""),
  ccEmail: Joi.string().allow(null, ""),
  mobileNo: Joi.string().allow(null, ""),
  tanNo: Joi.string().allow(null, ""),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const deleteAccountMasterReq = Joi.object({
  id: Joi.number().required(),
});

// Company

export const insertCompanyReq = Joi.object({
  companyName: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  mobile: Joi.string().allow(null, ""),
  gstNo: Joi.string().allow(null, ""),
  panNo: Joi.string().allow(null, ""),
  fssaiNo: Joi.string().allow(null, ""),
  signPath: Joi.string().allow(null, ""),
  logoPath: Joi.string().allow(null, ""),
  stateCode: Joi.string().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const getCompanyReq = Joi.object({
  id: Joi.number().required(),
});

export const updateCompanyReq = Joi.object({
  id: Joi.number().required(),
  companyName: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  mobile: Joi.string().allow(null, ""),
  gstNo: Joi.string().allow(null, ""),
  panNo: Joi.string().allow(null, ""),
  fssaiNo: Joi.string().allow(null, ""),
  signPath: Joi.string().allow(null, ""),
  logoPath: Joi.string().allow(null, ""),
  stateCode: Joi.string().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const deleteCompanyReq = Joi.object({
  id: Joi.number().required(),
});

// Equity Sale Purchase

// P - Purchase, S - Sale

export const insertEquitySalePurchaseReq = Joi.object({
  billNo: Joi.string().required(),
  billDate: Joi.date().required(),
  transactionType: Joi.string().valid("P", "S").required(),
  scriptId: Joi.number().required(),
  purchaseId: Joi.number().allow(null, ""),
  quantity: Joi.number().required(),
  bonus: Joi.number().allow(null, ""),
  value: Joi.number().required(),
  accountId: Joi.number().required(),
  brokage: Joi.number().allow(null, ""),
  cess: Joi.number().allow(null, ""),
  stt: Joi.number().allow(null, ""),
  serviceTax: Joi.number().allow(null, ""),
  stampDuty: Joi.number().allow(null, ""),
  turnoverTax: Joi.number().allow(null, ""),
  netValue: Joi.number().required(),
  netRate: Joi.number().required(),
  companyCode: Joi.number().required(),
  yearCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const getEquitySalePurchaseReq = Joi.object({
  id: Joi.number().required(),
});

export const updateEquitySalePurchaseReq = Joi.object({
  id: Joi.number().required(),
  billNo: Joi.string().required(),
  billDate: Joi.date().required(),
  transactionType: Joi.string().valid("P", "S").required(),
  scriptId: Joi.number().required(),
  purchaseId: Joi.number().allow(null, ""),
  quantity: Joi.number().required(),
  bonus: Joi.number().allow(null, ""),
  value: Joi.number().required(),
  accountId: Joi.number().required(),
  brokage: Joi.number().allow(null, ""),
  cess: Joi.number().allow(null, ""),
  stt: Joi.number().allow(null, ""),
  serviceTax: Joi.number().allow(null, ""),
  stampDuty: Joi.number().allow(null, ""),
  turnoverTax: Joi.number().allow(null, ""),
  netValue: Joi.number().required(),
  netRate: Joi.number().required(),
  companyCode: Joi.number().required(),
  yearCode: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const deleteEquitySalePurchaseReq = Joi.object({
  id: Joi.number().required(),
});

// Expiry Master

export const insertExpiryMasterReq = Joi.object({
  expiryDate: Joi.date().required(),
});

export const getExpiryMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateExpiryMasterReq = Joi.object({
  id: Joi.number().required(),
  expiryDate: Joi.date().required(),
});

export const deleteExpiryMasterReq = Joi.object({
  id: Joi.number().required(),
});

// Group Master

// B - Balancesheet, P - Income/Expensis , T - Trading

export const insertGroupMasterReq = Joi.object({
  groupName: Joi.string().required(),
  groupType: Joi.string().valid("B", "P", "T").required(),
  groupOrder: Joi.number().required(),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modified_by: Joi.number().allow(null, ""),
});

export const getGroupMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateGroupMasterReq = Joi.object({
  id: Joi.number().required(),
  groupName: Joi.string().required(),
  groupType: Joi.string().valid("B", "P", "T").required(),
  groupOrder: Joi.number().required(),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const deleteGroupMasterReq = Joi.object({
  id: Joi.number().required(),
});

// Gst Rate Master

export const insertGstRateMasterReq = Joi.object({
  gstName: Joi.string().required(),
  rate: Joi.number().optional(),
  cGstRate: Joi.number().required(),
  sGstRate: Joi.number().required(),
  iGstRate: Joi.number().required(),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const getGstRateMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateGstRateMasterReq = Joi.object({
  id: Joi.number().required(),
  gstName: Joi.string().required(),
  rate: Joi.number().optional(),
  cGstRate: Joi.number().required(),
  sGstRate: Joi.number().required(),
  iGstRate: Joi.number().required(),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const deleteGstRateMasterReq = Joi.object({
  id: Joi.number().required(),
});

// Item Master

// Q - Quantity, K - Kg

export const insertItemMasterReq = Joi.object({
  itemCode: Joi.number().required(),
  itemName: Joi.string().required(),
  openingStock: Joi.number().allow(null, ""),
  wtPer: Joi.number().allow(null, ""),
  hsnNo: Joi.string().allow(null, ""),
  gstCode: Joi.number().required(),
  isService: Joi.string().valid("Y", "N").required(),
  openingValue: Joi.number().allow(null, ""),
  ratePer: Joi.string().valid("Q", "K").allow(null, ""),
  reverseCalculation: Joi.string().valid().allow(null, ""),
  purchaseAccount: Joi.number().required(),
  pa: Joi.number().required(),
  sellAccount: Joi.number().required(),
  sa: Joi.number().required(),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const getItemMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateItemMasterReq = Joi.object({
  id: Joi.number().required(),
  itemCode: Joi.number().required(),
  itemName: Joi.string().required(),
  openingStock: Joi.number().allow(null, ""),
  wtPer: Joi.number().allow(null, ""),
  hsnNo: Joi.string().allow(null, ""),
  gstCode: Joi.number().required(),
  isService: Joi.string().valid("Y", "N").required(),
  openingValue: Joi.number().allow(null, ""),
  ratePer: Joi.string().valid("Q", "K").allow(null, ""),
  reverseCalculation: Joi.string().valid().allow(null, ""),
  purchaseAccount: Joi.number().required(),
  pa: Joi.number().required(),
  sellAccount: Joi.number().required(),
  sa: Joi.number().required(),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const deleteItemMasterReq = Joi.object({
  id: Joi.number().required(),
});

// Script Master

// E - Equity, F - F&O, C - Commodity

export const insertScriptMasterReq = Joi.object({
  scriptName: Joi.string().required(),
  scriptType: Joi.string().valid("E", "F", "C").required(),
  lotSize: Joi.number().required(),
  faceValue: Joi.number().required(),
  scriptId: Joi.string().required(),
  isinNo: Joi.string().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const getScriptMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateScriptMasterReq = Joi.object({
  id: Joi.number().required(),
  scriptName: Joi.string().required(),
  scriptType: Joi.string().valid("E", "F", "C").required(),
  lotSize: Joi.number().required(),
  faceValue: Joi.number().required(),
  scriptId: Joi.string().required(),
  isinNo: Joi.string().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const deleteScriptMasterReq = Joi.object({
  id: Joi.number().required(),
});

// State Master

export const insertStateMasterReq = Joi.object({
  cityName: Joi.string().required(),
  pinCode: Joi.string().allow(null, ""),
  subArea: Joi.string().allow(null, ""),
  state: Joi.string().allow(null, ""),
  stateCode: Joi.string().allow(null, ""),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const getStateMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateStateMasterReq = Joi.object({
  id: Joi.number().required(),
  cityName: Joi.string().required(),
  pinCode: Joi.string().allow(null, ""),
  subArea: Joi.string().allow(null, ""),
  state: Joi.string().allow(null, ""),
  stateCode: Joi.string().allow(null, ""),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const deleteStateMasterReq = Joi.object({
  id: Joi.number().required(),
});

// User Forms

export const insertUserFormsReq = Joi.object({
  userId: Joi.number().required(),
  formName: Joi.string().required(),
});

export const getUserFormsReq = Joi.object({
  id: Joi.number().required(),
});

export const updateUserFormsReq = Joi.object({
  id: Joi.number().required(),
  userId: Joi.number().required(),
  formName: Joi.string().required(),
});

export const deleteUserFormsReq = Joi.object({
  id: Joi.number().required(),
});

// Users

//  A - Admin, G - Group

export const insertUsersReq = Joi.object({
  userName: Joi.string().required(),
  userId: Joi.string().required(),
  userPassword: Joi.string().required(),
  emailAddress: Joi.string().allow(null, ""),
  emailPassword: Joi.string().allow(null, ""),
  mobileNo: Joi.string().allow(null, ""),
  userType: Joi.string().valid("A", "G").required(),
  userCategory: Joi.string().allow(null, ""),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const getUsersReq = Joi.object({
  id: Joi.number().required(),
});

export const updateUsersReq = Joi.object({
  id: Joi.number().required(),
  userName: Joi.string().required(),
  userId: Joi.string().required(),
  userPassword: Joi.string().required(),
  emailAddress: Joi.string().allow(null, ""),
  emailPassword: Joi.string().allow(null, ""),
  mobileNo: Joi.string().allow(null, ""),
  userType: Joi.string().valid("A", "G").required(),
  userCategory: Joi.string().allow(null, ""),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().allow(null, ""),
});

export const deleteUsersReq = Joi.object({
  id: Joi.number().required(),
});

// Year Master

export const insertYearMasterReq = Joi.object({
  fromDate: Joi.date().required(),
  toDate: Joi.date().required(),
});

export const getYearMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateYearMasterReq = Joi.object({
  id: Joi.number().required(),
  fromDate: Joi.date().required(),
  toDate: Joi.date().required(),
});

export const deleteYearMasterReq = Joi.object({
  id: Joi.number().required(),
});

// Transaction Head Details

export const insertTransactionHeadDetailsReq = Joi.object({
  head: Joi.object({
    tranType: Joi.string().valid("bp", "br", "cp", "cr").required(),
    docNo: Joi.number().allow(null, ""),
    docDate: Joi.date().allow(null, ""),
    cashbank: Joi.number().allow(null, ""),
    total: Joi.string().allow(null, ""),
    ode: Joi.number().allow(null, ""),
    yearCode: Joi.number().allow(null, ""),
    companyCode: Joi.number().required(),
    cb: Joi.number().required(),
    createdBy: Joi.number().required(),
    modifiedBy: Joi.number().allow(null, ""),
  }),
  details: Joi.array()
    .items(
      Joi.object({
        detailsId: Joi.number().allow(null, ""),
        debitAc: Joi.number().allow(null, ""),
        creditAc: Joi.number().allow(null, ""),
        amount: Joi.number().allow(null, ""),
        narration: Joi.string().allow(null, ""),
        drcr: Joi.string().valid("D", "C").allow(null, ""),
        da: Joi.number().required(),
        ca: Joi.number().required(),
      })
    )
    .min(1),
});

export const getTransactionHeadDetailsReq = Joi.object({
  head: Joi.object({
    id: Joi.array().items(Joi.number().required()),
  }),
});

export const updateTransactionHeadDetailsReq = Joi.object({
  head: Joi.object({
    id: Joi.array().items(Joi.number().required()).required(),
    tranType: Joi.string().valid("bp", "br", "cp", "cr").required(),
    docNo: Joi.number().allow(null, ""),
    docDate: Joi.date().allow(null, ""),
    cashbank: Joi.number().allow(null, ""),
    total: Joi.string().allow(null, ""),
    ode: Joi.number().allow(null, ""),
    yearCode: Joi.number().allow(null, ""),
    companyCode: Joi.number().required(),
    cb: Joi.number().required(),
    modifiedBy: Joi.number().allow(null, ""),
  }),
  details: Joi.object({
    delete: Joi.object({
      id: Joi.array().items(Joi.number().required()).required(),
    }),
    insert: Joi.array().items(
      Joi.object({
        tranId: Joi.number().required(),
        detailsId: Joi.number().allow(null, ""),
        debitAc: Joi.number().allow(null, ""),
        creditAc: Joi.number().allow(null, ""),
        amount: Joi.number().allow(null, ""),
        narration: Joi.string().allow(null, ""),
        drcr: Joi.string().valid("D", "C").allow(null, ""),
        da: Joi.number().required(),
        ca: Joi.number().required(),
      })
    ),
    update: Joi.array().items(
      Joi.object({
        id: Joi.number().required(),
        detailsId: Joi.number().allow(null, ""),
        debitAc: Joi.number().allow(null, ""),
        creditAc: Joi.number().allow(null, ""),
        amount: Joi.number().allow(null, ""),
        narration: Joi.string().allow(null, ""),
        drcr: Joi.string().valid("D", "C").allow(null, ""),
        da: Joi.number().required(),
        ca: Joi.number().required(),
      })
    ),
  }),
});

export const deleteTransactionHeadDetailsReq = Joi.object({
  head: Joi.object({
    id: Joi.array().items(Joi.number().required()),
  }),
});
