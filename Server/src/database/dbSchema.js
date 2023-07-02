import mssql from "../connections/mssql.connection.js";

export const ACCOUNT_MASTER = "accountMaster";
export const COMPANY = "company";
export const EQUITY_SALE_PURCHASE = "equitySalePurchase";
export const EXPIRY_MASTER = "expiryMaster";
export const GROUP_MASTER = "groupMaster";
export const GST_RATE_MASTER = "gstRateMaster";
export const ITEM_MASTER = "itemMaster";
export const SCRIPT_MASTER = "scriptMaster";
export const STATE_MASTER = "stateMaster";
export const TRANSACTION_DETAILS = "transactionDetails";
export const TRANSACTION_HEAD = "transactionHead";
export const USER_FORMS = "userForms";
export const USERS = "users";
export const YEAR_MASTER = "yearMaster";

export const QRY_ACCOUNT_MASTER =
  "SELECT  dbo.accountMaster.id, dbo.accountMaster.accountName, dbo.accountMaster.accountType, dbo.accountMaster.address, dbo.accountMaster.city, dbo.accountMaster.groupId, dbo.accountMaster.openingBalance, dbo.accountMaster.drcr, dbo.accountMaster.companyCode, dbo.accountMaster.createdBy AS groupName, dbo.accountMaster.modifiedBy, dbo.groupMaster.groupName  FROM  dbo.accountMaster INNER JOIN dbo.groupMaster ON dbo.accountMaster.groupId = dbo.groupMaster.id";

export const QRY_FNO_SCRIPT_MASTER =
  "SELECT  dbo.equitySalePurchase.id, dbo.equitySalePurchase.billNo, dbo.equitySalePurchase.billDate, dbo.equitySalePurchase.transactionType, dbo.equitySalePurchase.scriptId, dbo.equitySalePurchase.purchaseId, dbo.equitySalePurchase.quantity, dbo.equitySalePurchase.bonus, dbo.equitySalePurchase.value, dbo.equitySalePurchase.accountId, dbo.equitySalePurchase.brokage, dbo.equitySalePurchase.cess, dbo.equitySalePurchase.stt, dbo.equitySalePurchase.serviceTax, dbo.equitySalePurchase.stampDuty, dbo.equitySalePurchase.turnoverTax, dbo.equitySalePurchase.netValue, dbo.equitySalePurchase.netRate, dbo.equitySalePurchase.companyCode, dbo.equitySalePurchase.yearCode, dbo.equitySalePurchase.createdBy, dbo.equitySalePurchase.modifiedBy, dbo.accountMaster.accountName, dbo.scriptMaster.scriptName   FROM  dbo.equitySalePurchase INNER JOIN dbo.accountMaster ON dbo.equitySalePurchase.accountId = dbo.accountMaster.id INNER JOIN dbo.scriptMaster ON dbo.equitySalePurchase.scriptId = dbo.scriptMaster.id";

export const QRY_EQUITY_SALE_PURCHASE =
  "SELECT  dbo.scriptMaster.id, dbo.scriptMaster.scriptName, dbo.scriptMaster.scriptType, dbo.scriptMaster.lotSize, dbo.expiryMaster.expiryDate   FROM  dbo.scriptMaster CROSS JOIN dbo.expiryMaster";
