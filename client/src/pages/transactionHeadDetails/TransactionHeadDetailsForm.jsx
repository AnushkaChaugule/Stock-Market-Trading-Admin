import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Table,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useColors } from "../../hooks/use-colors";
import CustomIconButton from "../../components/Buttons/CustomIconButton.jsx";
import {
  useInsertIntoTransactionHeadDetailsData,
  useUpdateIntoTransactionHeadDetailsData,
  useDeleteIntoTransactionHeadDetailsData,
} from "../../hooks/transactionHeadDetails/transactionHeadDetails.mutation";
import { useIds } from "../IdsContext/IdsContext.jsx";
import MenuBar from "../menu/menuBar";
import { getAllAccountMasterData } from "../../api/accountMaster/accountMaster.request.js";

const TransactionForm = ({ data }) => {
  const { ids } = useIds();
  console.log("ids", ids);

  const [transactionData, setTransactionData] = useState({
    head: {
      tranType: "",
      // docNo: "",
      // docDate: "",
      // cashbank: "",
      // total: "",
      // ode: "",
      // yearCode: "",
      companyCode: null,
      cb: "",
      createdBy: null,
    },
    details: [
      {
        // detailsId: "",
        // debitAc: "",
        // creditAc: "",
        // amount: "",
        // narration: "",
        // drcr: "",
        da: 1,
        ca: 1,
      },
    ],
  });
  useEffect(() => {
    console.log("transactionData", transactionData);
  });
  const [transactionId, setTransactionId] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [redirectToTransactionRecords, setRedirectToTransactionRecords] =
    useState(false);

  const [accountMasterData, setAccountMasterData] = useState([]);
  const [selectedAccountId, setSelectedAccountId] = useState("");
  const [selectedAccountName, setSelectedAccountName] = useState("");

  const [tranRecordData, setTranRecordData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [editedRowIndex, setEditedRowIndex] = useState(-1);

  const handleEdit = (index) => {
    setEditedRowIndex(index);
    setEditMode(true);
    setEditedData(tranRecordData[index]);
  };

  const handleTransactionRecordsData = () => {
    setTransactionData(data);
    setTransactionId(data.id);
  };

  const handleClick = () => {
    setRedirectToTransactionRecords(true);
  };

  const handleClear = () => {
    setTransactionId(null);
    setTransactionData({
      head: {
        tranType: "",
        docNo: "",
        docDate: "",
        cashbank: "",
        total: "",
        ode: "",
        yearCode: "",
        companyCode: null,
        cb: "",
        createdBy: null,
      },
      details: [
        {
          detailsId: "",
          debitAc: "",
          creditAc: "",
          amount: "",
          narration: "",
          drcr: "",
          da: "",
          ca: "",
        },
      ],
    });
  };

  const insertTransactionMutation = useInsertIntoTransactionHeadDetailsData();

  function handleInsertTransactionData() {
    console.log("transactioninsertdata", transactionData);
    const insertTransactionData = {
      head: {
        tranType: transactionData.head.tranType,
        // docNo: transactionData.head.docNo,
        // docDate: transactionData.head.docDate,
        // cashbank: transactionData.head.cashbank,
        // total: transactionData.head.total,
        // ode: transactionData.head.ode,
        // yearCode: transactionData.head.yearCode,
        cb: selectedAccountId,
        companyCode: ids.companyId,
        createdBy: ids.userId,
      },
      details: transactionData.details,
    };
    console.log("inserttransaction", insertTransactionData);
    insertTransactionMutation.mutate(insertTransactionData);
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

  const updateTransactionMutation = useUpdateIntoTransactionHeadDetailsData();

  function handleUpdateTransactionData() {
    const updateTransactionData = {
      head: {
        id: transactionData.id,
        tranType: transactionData.tranType,
        docNo: transactionData.docNo,
        docDate: transactionData.docDate,
        cashbank: transactionData.cashbank,
        total: transactionData.total,
        ode: transactionData.ode,
        yearCode: transactionData.yearCode,
        cb: transactionData.cb,
        companyCode: ids.companyId,
        modifiedBy: transactionData.modifiedBy,
      },
      details: transactionData.details,
    };
    updateTransactionMutation.mutate(updateTransactionData);
  }

  const deleteTransactionMutation = useDeleteIntoTransactionHeadDetailsData();

  function handleDeleteTransactionData() {
    deleteTransactionMutation.mutate({ id: transactionId });
    setTransactionId(null);
    setTransactionData({
      head: {
        id: "",
        tranType: "",
        docNo: "",
        docDate: "",
        cashbank: "",
        total: "",
        ode: "",
        yearCode: "",
        companyCode: null,
        cb: "",
        createdBy: null,
      },
      details: [
        {
          detailsId: "",
          debitAc: "",
          creditAc: "",
          amount: "",
          narration: "",
          drcr: "",
          da: "",
          ca: "",
        },
      ],
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

  useEffect(() => {
    const fetchAccountMasterData = async () => {
      const response = await getAllAccountMasterData();
      setAccountMasterData(response.data);
      if (response.data.length > 0) {
        setSelectedAccountId(response.data[0].id);
        setSelectedAccountName(response.data[0].accountName);
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

  const handleTranTypeChange = (event) => {
    const newTransactionData = { ...transactionData }; // Create a shallow copy of the state

    newTransactionData.head.tranType = event.target.value; // Update the tranType property
    setTransactionData(newTransactionData); // Update the state with the new transactionData
    console.log("newtransactiondata", newTransactionData);
  };
  const handleHeadInputChange = (e) => {
    setTransactionData({
      ...transactionData,
      head: {
        ...transactionData.head,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleDetailsChange = (index, e) => {
    const details = [...transactionData.details];
    details[index][e.target.name] = e.target.value;
    setTransactionData({
      ...transactionData,
      details: details,
    });
  };

  const handleClickRecord = (data) => {
    setEditMode(true);
    setEditedData(data);
  };

  const handleAddDetails = () => {
    setTransactionData({
      ...transactionData,
      details: [
        ...transactionData.details,
        {
          detailsId: "",
          debitAc: "",
          creditAc: "",
          amount: "",
          narration: "",
          drcr: "",
          da: "",
          ca: "",
        },
      ],
    });
  };

  const handleRemoveDetails = (index) => {
    const details = [...transactionData.details];
    details.splice(index, 1);
    setTransactionData({
      ...transactionData,
      details,
    });
  };

  const colors = useColors();

  return (
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
            p: 3,
            borderRadius: 3,
            display: "flex",
          }}
        >
          <CustomIconButton
            color={colors.blue[500]}
            onClick={() => {
              handleClick();
            }}
            description={"Go Back To Transaction Records"}
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
            Transaction Form
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: colors.card,
            p: 2,
            borderRadius: 2,
            py: 4,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Transaction Id"
                name="id"
                disabled
                value={transactionId || ""}
                fullWidth
                required
              />
            </Grid>
            {/* <Grid item xs={12} sm={4}>
             
              <FormControl fullWidth variant="outlined">
                <InputLabel
                  required
                  id="tranType"
                  shrink={
                    selectedAccountId || accountMasterData.length > 0
                      ? true
                      : false
                  }
                >
                  Transaction Type
                </InputLabel>
                <Select
                  placeholder="Transaction Type"
                  name="tranType"
                  disabled={isDisabled}
                  value={transactionData.head.tranType}
                  onChange={handleTranTypeChange}
                  fullWidth
                  required
                >
                  
                    <MenuItem value={"bp"}>
                    bp
                    </MenuItem>
                    <MenuItem value={"br"}>
                    br
                    </MenuItem>
                    <MenuItem value={"cp"}>
                    cp
                    </MenuItem>
                    <MenuItem value={"cr"}>
                    cr
                    </MenuItem>
                 
                </Select>
              </FormControl>
            </Grid> */}

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel
                  required
                  id="tranType"
                  shrink={
                    selectedAccountId || accountMasterData.length > 0
                      ? true
                      : false
                  }
                >
                  Transaction Type
                </InputLabel>
                <Select
                  labelId="tranType"
                  label="tranType"
                  disabled={isDisabled}
                  variant="outlined"
                  value={transactionData.head.tranType}
                  onChange={handleTranTypeChange}
                >
                  <MenuItem value={"bp"}>bp</MenuItem>
                  <MenuItem value={"br"}>br</MenuItem>
                  <MenuItem value={"cp"}>cp</MenuItem>
                  <MenuItem value={"cr"}>cr</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                label="Document Number"
                name="docNo"
                disabled={isDisabled}
                value={transactionData.head.docNo}
                onChange={handleHeadInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Document Date"
                placeholder="yyyy-mm-dd"
                name="docDate"
                disabled={isDisabled}
                value={transactionData.head.docDate}
                onChange={handleHeadInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Cashbank"
                name="cashbank"
                disabled={isDisabled}
                value={transactionData.head.cashbank}
                onChange={handleHeadInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Total"
                name="total"
                disabled={isDisabled}
                value={transactionData.head.total}
                onChange={handleHeadInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Ode"
                name="ode"
                disabled={isDisabled}
                value={transactionData.head.ode}
                onChange={handleHeadInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Year Code"
                name="yearCode"
                disabled={isDisabled}
                value={transactionData.head.yearCode}
                onChange={handleHeadInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel
                  required
                  id="accountId-label"
                  shrink={
                    selectedAccountId || accountMasterData.length > 0
                      ? true
                      : false
                  }
                >
                  cb
                </InputLabel>
                <Select
                  labelId="accountId-label"
                  id="cb"
                  label="cb"
                  disabled={isDisabled}
                  variant="outlined"
                  value={selectedAccountId}
                  onChange={handleAccountChange}
                >
                  {accountMasterData.map((account) => (
                    <MenuItem key={account.id} value={account.id}>
                      {account.accountName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            bgcolor: colors.card,
            p: 2,
            borderRadius: 2,
            py: 2,
          }}
        >
          <Grid item xs={12} sm={4}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Details Id
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Debit Account
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Credit Account
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>Amount</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Narration
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>drcr</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>da</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>ca</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactionData.details.map((details, index) => (
                    <TableRow
                      key={index}
                      onClick={() => {
                        handleClickRecord(index);
                      }}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell>
                        <TextField
                          label="Details Id"
                          placeholder="Details Id"
                          name="detailsId"
                          disabled={isDisabled}
                          value={details.detailsId}
                          onChange={(e) => handleDetailsChange(index, e)}
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="Debit Account"
                          placeholder="Debit Account"
                          name="debitAc"
                          disabled={isDisabled}
                          value={details.debitAc}
                          onChange={(e) => handleDetailsChange(index, e)}
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="Credit Account"
                          placeholder="Credit Account"
                          name="creditAc"
                          disabled={isDisabled}
                          value={details.creditAc}
                          onChange={(e) => handleDetailsChange(index, e)}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="Amount"
                          placeholder="Amount"
                          name="amount"
                          disabled={isDisabled}
                          value={details.amount}
                          onChange={(e) => handleDetailsChange(index, e)}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="Narration"
                          placeholder="Narration"
                          name="narration"
                          disabled={isDisabled}
                          value={details.narration}
                          onChange={(e) => handleDetailsChange(index, e)}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="drcr"
                          placeholder="drcr"
                          name="drcr"
                          disabled={isDisabled}
                          value={details.drcr}
                          onChange={(e) => handleDetailsChange(index, e)}
                        />
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel
                            required
                            id="accountId-label"
                            shrink={
                              selectedAccountId || accountMasterData.length > 0
                                ? true
                                : false
                            }
                          >
                            da
                          </InputLabel>
                          <Select
                            name="da"
                            labelId="accountId-label"
                            id="da"
                            label="da"
                            value={selectedAccountId}
                            onChange={handleAccountChange}
                            disabled={isDisabled}
                            variant="outlined"
                            required
                          >
                            {accountMasterData.map((account) => (
                              <MenuItem key={account.id} value={account.id}>
                                {account.accountName}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel
                            required
                            id="accountId-label"
                            shrink={
                              selectedAccountId || accountMasterData.length > 0
                                ? true
                                : false
                            }
                          >
                            ca
                          </InputLabel>
                          <Select
                            name="ca"
                            labelId="accountId-label"
                            id="ca"
                            label="ca"
                            value={selectedAccountId}
                            onChange={handleAccountChange}
                            disabled={isDisabled}
                            variant="outlined"
                          >
                            {accountMasterData.map((account) => (
                              <MenuItem key={account.id} value={account.id}>
                                {account.accountName}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          onClick={() => handleRemoveDetails(index)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box mt={2}>
              <Button variant="outlined" onClick={handleAddDetails}>
                Add Details
              </Button>
            </Box>
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
                handleInsertTransactionData();
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
                handleTransactionRecordsData();
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
                handleUpdateTransactionData();
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
                handleDeleteTransactionData();
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
  );
};

export default TransactionForm;
