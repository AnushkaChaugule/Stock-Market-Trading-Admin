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
  useDeleteIntoAccountMasterData,
  useInsertIntoAccountMasterData,
  useUpdateIntoAccountMasterData,
} from "../../hooks/accountMaster/accountMaster.mutation";
import AccountMasterRecords from "./AccountMasterRecords";
import MenuBar from "../menu/menuBar";
import { useIds } from "../IdsContext/IdsContext";
import { getAllGroupMasterData } from "../../api/groupMaster/groupMaster.request";

const AccountMasterForm = ({ data }) => {
  const { ids } = useIds();
  // console.log(cids);

  const [accountData, setAccountData] = useState({
    accountName: "",
    accountType: "",
    address: "",
    cityCode: null,
    groupId: null,
    openingBalance: null,
    drcr: "",
    unregistered: "",
    gstNo: "",
    fssaiNo: "",
    stateCode: "",
    bankAccountCode: "",
    bankName: "",
    branch: "",
    ifsc: "",
    whatsappNo: "",
    tdstcsApplicable: "",
    locked: "",
    email: "",
    ccEmail: "",
    mobileNo: "",
    tanNo: "",
    companyCode: null,
    createdBy: null,
    //   modifiedBy: "",
  });
  const [accountMasterId, setAccountmasterId] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [redirectToAccountRecords, setRedirectToAccountRecords] =
    useState(false);

  const [groupMasterData, setGroupMasterData] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState("");
  const [selectedGroupName, setSelectedGroupName] = useState("");

  const handleInputData = (e) => {
    // const isNumeric = !isNaN(e.target.value);
    setAccountData({
      ...accountData,
      [e.target.name]: e.target.value,
      //[e.target.name]: isNumeric ? Number(e.target.value) : e.target.value,
    });
  };

  const handleAccountRecordsData = () => {
    console.log(data);
    setAccountData(data);
    setAccountmasterId(data.id);
  };

  const handleClick = () => {
    setRedirectToAccountRecords(true);
  };

  const handleClear = () => {
    setIsDisabled(!isDisabled);
    setAccountmasterId(null);
    setAccountData({
      accountName: "",
      accountType: "",
      address: "",
      cityCode: null,
      groupId: null,
      openingBalance: null,
      drcr: "",
      unregistered: "",
      gstNo: "",
      fssaiNo: "",
      stateCode: "",
      bankAccountCode: "",
      bankName: "",
      branch: "",
      ifsc: "",
      whatsappNo: "",
      tdstcsApplicable: "",
      locked: "",
      email: "",
      ccEmail: "",
      mobileNo: "",
      tanNo: "",
      //companyCode: null,
    });
  };

  const insertAccountMasterMutation = useInsertIntoAccountMasterData();

  function handleInsertAccountMasterData() {
    insertAccountMasterMutation.mutate({
      ...accountData,
      companyCode: ids.companyId,
      createdBy: ids.userId,
      groupId: selectedGroupId,
    });
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
  const updateAccountMasterMutation = useUpdateIntoAccountMasterData();

  function handleUpdateAccountMasterData() {
    updateAccountMasterMutation.mutate(accountData);
  }
  const deleteAccountMasterMutation = useDeleteIntoAccountMasterData();

  function handleDeleteAccountMasterData() {
    deleteAccountMasterMutation.mutate({ id: accountMasterId });
    setAccountmasterId(null);
    setAccountData({
      accountName: "",
      accountType: "",
      address: "",
      cityCode: null,
      groupId: null,
      openingBalance: null,
      drcr: "",
      unregistered: "",
      gstNo: "",
      fssaiNo: "",
      stateCode: "",
      bankAccountCode: "",
      bankName: "",
      branch: "",
      ifsc: "",
      whatsappNo: "",
      tdstcsApplicable: "",
      locked: "",
      email: "",
      ccEmail: "",
      mobileNo: "",
      tanNo: "",
      //companyCode: null,
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
    const fetchGroupMasterData = async () => {
      try {
        // console.log("inside");
        const response = await getAllGroupMasterData();
        //console.log("hii", response.data);
        setGroupMasterData(response.data);
        if (response.data.length > 0) {
          setSelectedGroupId(response.data[0].id);
          setSelectedGroupName(response.data[0].groupName);
          //console.log(response.data[0].groupName)
        }
      } catch (error) {
        console.error("Failed to fetch group data:", error);
      }
    };
    fetchGroupMasterData();
  }, []);

  const handleGroupChange = (event) => {
    const selectedOptionId = event.target.value;
    const selectedOption = groupMasterData.find(
      (group) => group.id === selectedOptionId
    );

    if (selectedOption) {
      setSelectedGroupId(selectedOption.id);
      setSelectedGroupName(selectedOption.groupName);
    }
  };

  return (
    <>
      {redirectToAccountRecords ? (
        <AccountMasterRecords />
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
                description={"Go Back To AccountMaster Records"}
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
                AccountMaster Form
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
                    placeholder="Enter AccountMaster Id"
                    label="AccountMaster Id"
                    disabled
                    variant="outlined"
                    value={accountMasterId || ""}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Account Name"
                    label="Account Name"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="accountName"
                    value={accountData.accountName || ""}
                    fullWidth
                    required
                  />
                </Grid>
                {/* <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Account Type"
                    label="Account Type"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="accountType"
                    value={accountData.accountType || ""}
                    fullWidth
                    required
                  />
                </Grid> */}
                <Grid item xs={12} sm={3}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel required id="scriptType">
                      Account Type
                    </InputLabel>
                    <Select
                      labelId="AccountType"
                      name="accountType"
                      label="AccountType"
                      disabled={isDisabled}
                      variant="outlined"
                      value={accountData.accountType}
                      onChange={handleInputData}
                    >
                      <MenuItem value={"B"}>Bank</MenuItem>
                      <MenuItem value={"P"}>Party</MenuItem>
                      <MenuItem value={"C"}>Cash</MenuItem>
                      <MenuItem value={"S"}>Supplier</MenuItem>
                      <MenuItem value={"I"}>Income</MenuItem>
                      <MenuItem value={"E"}>Expensis</MenuItem>
                    </Select>
                  </FormControl>
                           
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Address"
                    label="Address"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="address"
                    value={accountData.address || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter City Code"
                    label="City Code"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="cityCode"
                    value={accountData.cityCode ?? ""}
                    fullWidth
                    //InputLabelProps={{ shrink: length > 0 ? true : false }}
                  />
                </Grid>

                <Grid xs={12} sm={3} item>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel
                      required
                      id="groupId-label"
                      shrink={
                        groupMasterData.length > 0 || selectedGroupId
                          ? true
                          : false
                      }
                    >
                      Group Id
                    </InputLabel>
                    {selectedGroupId && (
                      <Select
                        labelId="groupId-label"
                        id="groupId"
                        label="Group Id"
                        disabled={isDisabled}
                        variant="outlined"
                        //onChange={handleInputData}
                        value={selectedGroupId}
                        {...console.log(selectedGroupId)}
                        onChange={handleGroupChange}
                      >
                        {groupMasterData.map((group) => (
                          <MenuItem key={group.id} value={group.id}>
                            {group.groupName}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Opening Balance"
                    label="Opening Balance"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="openingBalance"
                    value={accountData.openingBalance ?? ""}
                    fullWidth
                    // InputLabelProps={{ shrink: length > 0 ? true : false }}
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter DRCR"
                    label="DRCR"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="drcr"
                    value={accountData.drcr || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Unregister"
                    label="Unregister"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="unregistered"
                    value={accountData.unregistered || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Gst Number"
                    label="GST Number"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="gstNo"
                    value={accountData.gstNo || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Fssi Number"
                    label="FSSI Number"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="fssaiNo"
                    value={accountData.fssaiNo || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter State Code"
                    label="State Code"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="stateCode"
                    value={accountData.stateCode || ""}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Bank Account Code"
                    label="Bank Account Code"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="bankAccountCode"
                    value={accountData.bankAccountCode || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Bank Name"
                    label="Bank Name"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="bankName"
                    value={accountData.bankName || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Branch Name"
                    label="Branch Name"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="branch"
                    value={accountData.branch || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Ifsc"
                    label="Ifsc Number"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="ifsc"
                    value={accountData.ifsc || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter WhatsApp Number"
                    label="WhatsApp Number"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="whatsappNo"
                    value={accountData.whatsappNo || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter tdstcsApplicable"
                    label="TdsTcsApplicable"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="tdstcsApplicable"
                    value={accountData.tdstcsApplicable || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Locked"
                    label="Locked"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="locked"
                    value={accountData.locked || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Email"
                    label="Email"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="email"
                    value={accountData.email || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter ccEmail"
                    label="ccEmail"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="ccEmail"
                    value={accountData.ccEmail || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Mobile Number"
                    label="Mobile Number"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="mobileNo"
                    value={accountData.mobileNo || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    placeholder="Enter Tan Number"
                    label="Tan Number"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="tanNo"
                    value={accountData.tanNo || ""}
                    fullWidth
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
                    //console.log(cid);
                    // setAccountmasterCompanyCode(cid);
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
                    handleInsertAccountMasterData();
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
                    handleAccountRecordsData();
                    setManageButton({
                      create: true,
                      save: true,
                      edit: true,
                      update: false,
                      delete: false,
                      cancel: false,
                      editCompanyId: true,
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
                    handleUpdateAccountMasterData();
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
                    handleDeleteAccountMasterData();
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

export default AccountMasterForm;
