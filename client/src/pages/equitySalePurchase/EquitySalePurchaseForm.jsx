import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useColors } from "../../hooks/use-colors";
import CustomIconButton from "../../components/Buttons/CustomIconButton";
import {
  useDeleteIntoEquitySalePurchaseData,
  useUpdateIntoEquitySalePurchaseData,
  useInsertIntoEquitySalePurchaseData,
} from "../../hooks/equitySalePurchase/equitySalePurchase.mutation";
import EquitySalePurchaseRecords from "./EquitySalePurchaseRecords";
import MenuBar from "../menu/menuBar";
import { useIds } from "../IdsContext/IdsContext";
import { getAllAccountMasterData } from "../../api/accountMaster/accountMaster.request";
import { getAllScriptMasterData } from "../../api/scriptMaster/scriptMaster.request";

const EquitySalePurchaseForm = ({ data }) => {
  const { ids } = useIds();
  const [equitySalePurchaseData, setEquitySalePurchaseData] = useState({
    billNo: "",
    billDate: "",
    transactionType: "",
    scriptId: null,
    purchaseId: "",
    quantity: "",
    bonus: "",
    value: "",
    accountId: null,
    brokage: "",
    cess: "",
    stt: "",
    serviceTax: "",
    stampDuty: "",
    turnoverTax: "",
    netValue: "",
    netRate: "",
    companyCode: null,
    yearCode: "",
    createdBy: null,
    // modifiedBy:"",
  });
  const [equitySalePurchaseId, setEquitySalePurchaseId] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [
    redirectToEquitySalePurchaseRecords,
    setRedirectToEquitySalePurchaseRecords,
  ] = useState(false);

  const [accountMasterData, setAccountMasterData] = useState([]);
  const [selectedAccountId, setSelectedAccountId] = useState("");
  const [selectedAccountName, setSelectedAccountName] = useState("");

  const [scriptMasterData, setScriptMasterData] = useState([]);
  const [selectedScriptId, setSelectedScriptId] = useState("");
  const [selectedScriptName, setSelectedScriptName] = useState("");

  const handleInputData = (e) => {
    setEquitySalePurchaseData({
      ...equitySalePurchaseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEquitySalePurchaseRecordsData = () => {
    console.log(data);
    setEquitySalePurchaseData(data);
    setEquitySalePurchaseId(data.id);
  };

  const handleClick = () => {
    setRedirectToEquitySalePurchaseRecords(true);
  };

  const handleClear = () => {
    setIsDisabled(!isDisabled);
    setEquitySalePurchaseId(null);
    setEquitySalePurchaseData({
      billNo: "",
      billDate: "",
      transactionType: "",
      scriptId: null,
      purchaseId: "",
      quantity: "",
      bonus: "",
      value: "",
      accountId: null,
      brokage: "",
      cess: "",
      stt: "",
      serviceTax: "",
      stampDuty: "",
      turnoverTax: "",
      netValue: "",
      netRate: "",
      // companyCode:"",
      yearCode: "",
      // createdBy:"",
      // modifiedBy:"",
    });
  };

  const insertEquitySalePurchaseMutation =
    useInsertIntoEquitySalePurchaseData();

  function handleInsertEquitySalePurchaseData() {
    const insertEquitySalePurchaseData = {
      billNo: equitySalePurchaseData.billNo,
      billDate: equitySalePurchaseData.billDate,
      transactionType: equitySalePurchaseData.transactionType,
      scriptId: selectedScriptId,
      purchaseId: equitySalePurchaseData.purchaseId,
      quantity: equitySalePurchaseData.quantity,
      bonus: equitySalePurchaseData.bonus,
      value: equitySalePurchaseData.value,
      accountId: selectedAccountId,
      // brokage: equitySalePurchaseData.brokage,
      // cess: equitySalePurchaseData.cess,
      // stt: equitySalePurchaseData.stt,
      // serviceTax: equitySalePurchaseData.serviceTax,
      // stampDuty: equitySalePurchaseData.stampDuty,
      // turnoverTax: equitySalePurchaseData.turnoverTax,
      netValue: equitySalePurchaseData.netValue,
      netRate: equitySalePurchaseData.netRate,
      companyCode: ids.companyId,
      yearCode: equitySalePurchaseData.yearCode,
      createdBy: ids.userId,
    };

    insertEquitySalePurchaseMutation.mutate(insertEquitySalePurchaseData);
    setIsDisabled(isDisabled);

    setManageButton({
      create: false,
      save: true,
      delete: false,
      update: false,
      cancel: false,
      edit: false,
    });
  }
  const updateEquitySalePurchaseMutation =
    useUpdateIntoEquitySalePurchaseData();

  function handleUpdateEquitySalePurchaseData() {
    const updateEquitySalePurchaseData = {
      id: equitySalePurchaseData.id,
      billNo: equitySalePurchaseData.billNo,
      billDate: equitySalePurchaseData.billDate,
      transactionType: equitySalePurchaseData.transactionType,
      scriptId: selectedScriptId,
      purchaseId: equitySalePurchaseData.purchaseId,
      quantity: equitySalePurchaseData.quantity,
      bonus: equitySalePurchaseData.bonus,
      value: equitySalePurchaseData.value,
      accountId: selectedAccountId,
      brokage: equitySalePurchaseData.brokage,
      cess: equitySalePurchaseData.cess,
      stt: equitySalePurchaseData.stt,
      serviceTax: equitySalePurchaseData.serviceTax,
      stampDuty: equitySalePurchaseData.stampDuty,
      turnoverTax: equitySalePurchaseData.turnoverTax,
      netValue: equitySalePurchaseData.netValue,
      netRate: equitySalePurchaseData.netRate,
      companyCode: equitySalePurchaseData.companyCode,
      yearCode: equitySalePurchaseData.yearCode,
      modifiedBy: equitySalePurchaseData.modifiedBy,
    };
    updateEquitySalePurchaseMutation.mutate(updateEquitySalePurchaseData);
  }

  const deleteEquitySalePurchaseMutation =
    useDeleteIntoEquitySalePurchaseData();

  function handleDeleteEquitySalePurchaseData() {
    deleteEquitySalePurchaseMutation.mutate({ id: equitySalePurchaseId });
    setEquitySalePurchaseId(null);
    setEquitySalePurchaseData({
      billNo: "",
      billDate: "",
      transactionType: "",
      scriptId: null,
      purchaseId: "",
      quantity: "",
      bonus: "",
      value: "",
      accountId: null,
      brokage: "",
      cess: "",
      stt: "",
      serviceTax: "",
      stampDuty: "",
      turnoverTax: "",
      netValue: "",
      netRate: "",
      // companyCode:"",
      yearCode: "",
      // createdBy:"",
      // modifiedBy:"",
    });
  }
  const [manageButton, setManageButton] = useState({
    create: false,
    save: true,
    delete: false,
    update: false,
    cancel: false,
    edit: false,
  });
  const colors = useColors();

  useEffect(() => {
    const fetchAccountMasterData = async () => {
      try {
        const response = await getAllAccountMasterData();
        setAccountMasterData(response.data);
        if (response.data.length > 0) {
          setSelectedAccountId(response.data[0].id);
          setSelectedAccountName(response.data[0].accountName);
        }
      } catch (error) {
        console.error("Failed to fetch account data:", error);
      }
    };

    fetchAccountMasterData();
  }, []);

  const handleAccountChange = (event) => {
    const selectedOptionId = event.target.value;
    const selectedOption = accountMasterData.find(
      (account) => account.id === selectedOptionId
    );

    if (selectedOption) {
      setSelectedAccountId(selectedOption.id);

      setSelectedAccountName(selectedOption.accountName);
    }
  };

  useEffect(() => {
    const fetchScriptMasterData = async () => {
      try {
        const response = await getAllScriptMasterData();
        setScriptMasterData(response.data);
        if (response.data.length > 0) {
          setSelectedScriptId(response.data[0].id);
          setSelectedScriptName(response.data[0].scriptName);
        }
      } catch (error) {
        console.error("Failed to fetch Script Master data:", error);
      }
    };

    fetchScriptMasterData();
  }, []);

  const handleScriptChange = (event) => {
    const selectedOptionId = event.target.value;

    const selectedOption = scriptMasterData.find(
      (script) => script.id === selectedOptionId
    );

    if (selectedOption) {
      setSelectedScriptId(selectedOption.id);
      // console.log("selectedScriptId : ", selectedScriptId);
      setSelectedScriptName(selectedOption.scriptName);
      console.log("selectedoption", selectedOption);
    }
  };
  return (
    <>
      {redirectToEquitySalePurchaseRecords ? (
        <EquitySalePurchaseRecords />
      ) : (
        <>
          <MenuBar />
          <Box
            sx={{
              bgcolor: colors.bgColor,
              width: "100%",
              height: "100%",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 18,
            }}
          >
            <Box
              sx={{
                bgcolor: colors.card,
                p: 2,
                borderRadius: 3,
                display: "flex",
              }}
            >
              <CustomIconButton
                color={colors.blue[500]}
                onClick={() => {
                  handleClick();
                }}
                description={"Go Back To EquitySalePurchase Records"}
              >
                <ArrowBack />
              </CustomIconButton>

              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 500,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                variant="h5"
              >
                EquitySalePurchase Form
              </Typography>
            </Box>

            <Box
              sx={{
                bgcolor: colors.card,
                p: 2,
                borderRadius: 2,
                py: 2,
              }}
            >
              <Grid container spacing={3}>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Equity Id"
                    label="Equity Id"
                    disabled
                    variant="outlined"
                    value={equitySalePurchaseId || ""}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Bill No"
                    label="Bill No"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="billNo"
                    value={equitySalePurchaseData.billNo || ""}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Bill Date"
                    label="Bill Date"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="billDate"
                    value={equitySalePurchaseData.billDate || ""}
                    fullWidth
                    required
                  />
                           
                </Grid>
                {/* <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Transaction Type"
                    label="Transaction Type"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="transactionType"
                    value={equitySalePurchaseData.transactionType || ""}
                    fullWidth
                    required
                  />
                </Grid> */}
                <Grid item xs={12} sm={3}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel required id="transactionType">
                      Transaction Type
                    </InputLabel>
                    <Select
                      labelId="TransactionType"
                      name="transactionType"
                      label="TransactionType"
                      disabled={isDisabled}
                      variant="outlined"
                      value={equitySalePurchaseData.transactionType}
                      onChange={handleInputData}
                    >
                      <MenuItem value={"P"}>Purchase</MenuItem>
                      <MenuItem value={"S"}>Sale</MenuItem>
                    </Select>
                  </FormControl>
                           
                </Grid>
                <Grid xs={12} sm={3} item>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel
                      required
                      id="scriptId-label"
                      shrink={
                        scriptMasterData.length > 0 || selectedScriptId
                          ? true
                          : false
                      }
                    >
                      Script Id
                    </InputLabel>
                    {selectedScriptId && (
                      <Select
                        labelId="scriptId-label"
                        id="scriptId"
                        label="Script Id"
                        disabled={isDisabled}
                        variant="outlined"
                        value={selectedScriptId}
                        {...console.log(selectedScriptId)}
                        onChange={handleScriptChange}
                      >
                        {scriptMasterData.map((script) => (
                          <MenuItem key={script.id} value={script.id}>
                            {script.scriptName}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Purchase Id"
                    label="Purchase Id"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="purchaseId"
                    value={equitySalePurchaseData.purchaseId || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Quantity"
                    label="Quantity"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="quantity"
                    value={equitySalePurchaseData.quantity || ""}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Bonus"
                    label="Bonus"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="bonus"
                    value={equitySalePurchaseData.bonus || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Value"
                    label="Value"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="value"
                    value={equitySalePurchaseData.value ?? ""}
                    fullWidth
                    required
                  />
                       
                </Grid>
                <Grid xs={12} sm={4} item>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel
                      required
                      id="accountId-label"
                      shrink={
                        accountMasterData.length > 0 || selectedAccountId
                          ? true
                          : false
                      }
                    >
                      accountId
                    </InputLabel>
                    {selectedAccountId && (
                      <Select
                        labelId="accountId-label"
                        id="accountId"
                        label="Account Id"
                        disabled={isDisabled}
                        variant="outlined"
                        value={selectedAccountId}
                        {...console.log(selectedAccountId)}
                        onChange={handleAccountChange}
                      >
                        {accountMasterData.map((account) => (
                          <MenuItem key={account.id} value={account.id}>
                            {account.accountName}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Brokage"
                    label="Brokage"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="brokage"
                    value={equitySalePurchaseData.brokage || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Cess"
                    label="Cess"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="cess"
                    value={equitySalePurchaseData.cess || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter STT"
                    label="STT"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="stt"
                    value={equitySalePurchaseData.stt || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Service Tax"
                    label="Service Tax"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="serviceTax"
                    value={equitySalePurchaseData.serviceTax || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Stamp Duty"
                    label="Stamp Duty"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="stampDuty"
                    value={equitySalePurchaseData.stampDuty || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Turnover Tax"
                    label="Turnover Tax"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="turnoverTax"
                    value={equitySalePurchaseData.turnoverTax || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Net Value"
                    label="Net Value"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="netValue"
                    value={equitySalePurchaseData.netValue ?? ""}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Net Rate"
                    label="Net Rate"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="netRate"
                    value={equitySalePurchaseData.netRate ?? ""}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Year Code"
                    label="Year Code"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="yearCode"
                    value={equitySalePurchaseData.yearCode ?? ""}
                    fullWidth
                    required
                  />
                           
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                bgcolor: colors.card,
                borderRadius: 2,
              }}
            >
              <Box display="flex" gap={2}>
                <Button
                  disabled={manageButton.create}
                  onClick={() => {
                    setIsDisabled(!isDisabled);
                    setManageButton({
                      create: true,
                      save: false,
                      edit: true,
                      update: true,
                      delete: true,
                      cancel: false,
                    });
                  }}
                  color="green"
                  variant="contained"
                >
                  Add
                </Button>
                <Button
                  disabled={manageButton.save}
                  onClick={() => {
                    handleInsertEquitySalePurchaseData();
                    setIsDisabled(!isDisabled);
                  }}
                  color="green"
                  variant="contained"
                >
                  Save
                </Button>

                <Button
                  disabled={manageButton.edit}
                  onClick={() => {
                    setIsDisabled(!isDisabled);
                    handleEquitySalePurchaseRecordsData();
                    setManageButton({
                      create: true,
                      save: true,
                      edit: true,
                      update: false,
                      delete: false,
                      cancel: false,
                      editItemMasterId: true,
                    });
                  }}
                  color="blue"
                  variant="contained"
                >
                  Edit
                </Button>

                <Button
                  disabled={manageButton.update}
                  onClick={() => {
                    handleUpdateEquitySalePurchaseData();
                  }}
                  color="violet"
                  variant="contained"
                >
                  Update
                </Button>

                <Button
                  disabled={manageButton.delete}
                  onClick={() => {
                    setIsDisabled(isDisabled);
                    handleDeleteEquitySalePurchaseData();
                  }}
                  color="red"
                  variant="contained"
                >
                  Delete
                </Button>

                <Button
                  onClick={() => {
                    handleClear();
                    setManageButton({
                      create: false,
                      save: true,
                      delete: false,
                      update: false,
                      cancel: false,
                      edit: false,
                    });
                  }}
                  variant="contained"
                >
                  Clear
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default EquitySalePurchaseForm;
