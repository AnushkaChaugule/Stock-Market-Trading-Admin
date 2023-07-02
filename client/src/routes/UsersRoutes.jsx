import { Route, Routes } from "react-router-dom";
import CompanyForm from "../pages/company/CompanyForm";
import CompanyRecords from "../pages/company/CompanyRecords";
import AccountMasterForm from "../pages/accountMaster/AccountMasterForm";
import AccountMasterRecords from "../pages/accountMaster/AccountMasterRecords";
import CompanySelection from "../pages/companySelection/companySelectionRecord";
import MenuBar from "../pages/menu/menuBar";
import GroupMasterForm from "../pages/groupMaster/GroupMasterForm";
import GroupMasterRecords from "../pages/groupMaster/GroupMasterRecords";
import GstRateMasterForm from "../pages/gstRateMaster/GstRateMasterForm";
import GstRateMasterRecords from "../pages/gstRateMaster/GstRateMasterRecords";
import ItemMasterForm from "../pages/itemMaster/ItemMasterForm";
import ItemMasterRecords from "../pages/itemMaster/ItemMasterRecords";
import StateMasterForm from "../pages/stateMaster/StateMasterForm";
import StateMasterRecords from "../pages/stateMaster/StateMasterRecords";
import ScriptMasterForm from "../pages/scriptMaster/ScriptMasterForm";
import ScriptMasterRecords from "../pages/scriptMaster/ScriptMasterRecords";
import EquitySalePurchaseForm from "../pages/equitySalePurchase/EquitySalePurchaseForm";
import EquitySalePurchaseRecords from "../pages/equitySalePurchase/EquitySalePurchaseRecords";
import TransactionForm from "../pages/transactionHeadDetails/TransactionHeadDetailsForm";
import EquitySaleRegisterReport from "../report/EquitySaleRegisterReport/EquitySaleRegisterReport";
import EquityPurchaseRegisterReport from "../report/EquityPurchaseRegisterReport/EquityPurchaseRegisterReport";
import EquityReport from "../report/EquityReport/EquityReport";
import FutureOptionReport from "../report/FutureOptionReport/FutureOptionReport";
import ComoditiesReport from "../report/ComoditiesReport/ComoditiesReport";

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/menuBar" element={<MenuBar />} />
      <Route path="/companySelection" element={<CompanySelection />} />
      <Route path="/companyRecords" element={<CompanyRecords />} />
      <Route path="/companyForm" element={<CompanyForm />} />
      <Route path="/accountMasterRecords" element={<AccountMasterRecords />} />
      <Route path="/accountMasterForm" element={<AccountMasterForm />} />
      <Route path="/groupMasterRecords" element={<GroupMasterRecords />} />
      <Route path="/groupMasterForm" element={<GroupMasterForm />} />
      <Route path="/gstRateMasterRecords" element={<GstRateMasterRecords />} />
      <Route path="/gstRateMasterForm" element={<GstRateMasterForm />} />
      <Route path="/itemMasterRecords" element={<ItemMasterRecords />} />
      <Route path="/itemMasterForm" element={<ItemMasterForm />} />
      <Route path="/stateMasterRecords" element={<StateMasterRecords />} />
      <Route path="/stateMasterForm" element={<StateMasterForm />} />
      <Route path="/scriptMaterRecords" element={<ScriptMasterRecords />} />
      <Route path="/scriptMasterForm" element={<ScriptMasterForm />} />
      <Route
        path="/equitySalePurchaseRecords"
        element={<EquitySalePurchaseRecords />}
      />
      <Route
        path="/equitySalePurchaseForm"
        element={<EquitySalePurchaseForm />}
      />
      <Route path="/transactionHeadDetailsForm" element={<TransactionForm />} />
      <Route
        path="/equitySaleRegisterReport"
        element={<EquitySaleRegisterReport />}
      />
      <Route
        path="/equityPurchaseRegisterReport"
        element={<EquityPurchaseRegisterReport />}
      />
      <Route path="/EquityReport" element={<EquityReport />} />
      <Route path="/FutureOptionReport" element={<FutureOptionReport />} />
      <Route path="/ComoditiesReport" element={<ComoditiesReport />} />
    </Routes>
  );
};
