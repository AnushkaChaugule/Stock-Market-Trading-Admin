import { logger } from "../utils/index.js";
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
} from "./index.js";

export default function syncMssql() {
  const options = {
    logging: false,
    alter: false,
  };
  AccountMaster.sync(options).catch((err) =>
    logger.error("failed to sync Account Master " + err)
  );
  Company.sync(options).catch((err) =>
    logger.error("failed to sync Company " + err)
  );
  EquitySalePurchase.sync(options).catch((err) =>
    logger.error("failed to sync Equity Sale Purchase " + err)
  );
  ExpiryMaster.sync(options).catch((err) =>
    logger.error("failed to sync Expiry Master " + err)
  );
  GroupMaster.sync(options).catch((err) =>
    logger.error("failed to sync Group Master " + err)
  );
  GstRateMaster.sync(options).catch((err) =>
    logger.error("failed to sync Gst Rate Master " + err)
  );
  ItemMaster.sync(options).catch((err) =>
    logger.error("failed to sync Item Master " + err)
  );
  ScriptMaster.sync(options).catch((err) =>
    logger.error("failed to sync Script Master " + err)
  );
  StateMaster.sync(options).catch((err) =>
    logger.error("failed to sync State Master " + err)
  );
  UserForms.sync(options).catch((err) =>
    logger.error("failed to sync User Forms " + err)
  );
  Users.sync(options).catch((err) =>
    logger.error("failed to sync Users " + err)
  );
  YearMaster.sync(options).catch((err) =>
    logger.error("failed to sync Year Master " + err)
  );
}
