import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import React, { useState } from "react";
import {
  useDeleteIntoCompanyData,
  useInsertIntoCompanyData,
  useUpdateIntoCompanyData,
} from "../../hooks/company/company.mutation";
import { useColors } from "../../hooks/use-colors";
import CustomIconButton from "../../components/Buttons/CustomIconButton";
import CompanyRecords from "./CompanyRecords";
import MenuBar from "../menu/menuBar";
import { useIds } from "../IdsContext/IdsContext";

const CompanyForm = ({ data }) => {
  const { ids, setIds } = useIds();

  const [companyData, setCompanyData] = useState({
    companyName: "",
    city: "",
    state: "",
    mobile: "",
    gstNo: "",
    panNo: "",
    createdBy: null,
    modifiedBy: null,
    fssaiNo: "",
    signPath: "",
    logoPath: "",
    stateCode: "",
  });

  const [companyId, setCompanyId] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [redirectToCompanyRecords, setRedirectToCompanyRecords] =
    useState(false);

  const handleInputData = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handleCompanyRecordsData = () => {
    setCompanyData(data);
    setCompanyId(data.id);
  };

  const handleClick = () => {
    setRedirectToCompanyRecords(true);
  };

  const handleClear = () => {
    setCompanyId(null);
    setCompanyData({
      companyName: "",
      city: "",
      state: "",
      mobile: "",
      gstNo: "",
      panNo: "",
      createdBy: null,
      modifiedBy: null,
      fssaiNo: "",
      signPath: "",
      logoPath: "",
      stateCode: "",
    });
  };

  const insertCompanyMutation = useInsertIntoCompanyData();

  function handleInsertCompanyData() {
    insertCompanyMutation.mutate({ ...companyData, createdBy: ids.userId });
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
  const updateCompanyMutation = useUpdateIntoCompanyData();

  function handleUpdateCompanyData() {
    updateCompanyMutation.mutate(companyData);
  }
  const deleteCompanyMutation = useDeleteIntoCompanyData();

  function handleDeleteCompanyData() {
    const deletedID = {
      id: companyId,
    };
    deleteCompanyMutation.mutate(deletedID);
    setCompanyId(null);
    setCompanyData({
      companyName: "",
      city: "",
      state: "",
      mobile: "",
      gstNo: "",
      panNo: "",
      createdBy: null,
      modifiedBy: null,
      fssaiNo: "",
      signPath: "",
      logoPath: "",
      stateCode: "",
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

  return (
    <>
      {redirectToCompanyRecords ? (
        <CompanyRecords />
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
                description={"Go Back To Company Records"}
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
                Company Form
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
                <Grid xs={12} sm={4} item>
                  <TextField
                    placeholder="Enter Company Id"
                    label="Company Id"
                    disabled
                    variant="outlined"
                    value={companyId || ""}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} sm={4} item>
                  <TextField
                    placeholder="Enter Company Name"
                    label="Company Name"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="companyName"
                    value={companyData.companyName || ""}
                    fullWidth
                    required
                    autoFocus
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    placeholder="Enter Mobile Number"
                    label="Mobile Number"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="mobile"
                    value={companyData.mobile || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    placeholder="Enter City Name"
                    label="City"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="city"
                    value={companyData.city || ""}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    placeholder="Enter State Name"
                    label="State"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="state"
                    value={companyData.state || ""}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    placeholder="Enter State Code"
                    label="StateCode"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="stateCode"
                    value={companyData.stateCode || ""}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    placeholder="Enter Gst Number"
                    label="GST Number"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="gstNo"
                    value={companyData.gstNo || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    placeholder="Enter Pan Number"
                    label="Pan Number"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="panNo"
                    value={companyData.panNo || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    placeholder="Enter fssai Number"
                    label="fssai Number"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="fssaiNo"
                    value={companyData.fssaiNo || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    placeholder="Enter Sign Path"
                    label="Sign Path"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="signPath"
                    value={companyData.signPath || ""}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    placeholder="Enter Logo Path"
                    label="Logo Path"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="logoPath"
                    value={companyData.logoPath || ""}
                    fullWidth
                  />
                </Grid>
                {/* <Grid xs={12} sm={4} item>
      <TextField
        placeholder="Enter createdBy"
        label="CreatedBy"
        for="createdBy"
        disabled={isDisabled}
        variant="outlined"
        onChange={handleInputData}
        name="createdBy"
        value={companyData.createdBy || ""}
        fullWidth
        required
      />
    </Grid>
    <Grid xs={12} sm={4} item>
      <TextField
        placeholder="Enter modifiedBy"
        label="ModifiedBy"
        disabled={isDisabled}
        variant="outlined"
        onChange={handleInputData}
        name="modifiedBy"
        value={companyData.modifiedBy || ""}
        fullWidth
      />
    </Grid> */}
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
                    handleInsertCompanyData();
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
                    handleCompanyRecordsData();
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
                    handleUpdateCompanyData();
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
                    handleDeleteCompanyData();
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

export default CompanyForm;
