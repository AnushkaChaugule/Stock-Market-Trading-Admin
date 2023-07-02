import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputLabel,
  Popover,
  MenuItem,
} from "@mui/material";
import { useColors } from "../../hooks/use-colors";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const colors = useColors();
  const [menuState, setMenuState] = useState({
    master: { anchorEl: null, openPopover: false },
    transaction: { anchorEl: null, openPopover: false },
    outward: { anchorEl: null, openPopover: false },
    report: { anchorEl: null, openPopover: false },
    bonusSplit: { anchorEl: null, openPopover: false },
    utility: { anchorEl: null, openPopover: false },
  });

  const handleMenuClick = (event, menu) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menu]: { anchorEl: event.currentTarget, openPopover: true },
    }));
  };

  const handleMenuClose = (menu) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menu]: { anchorEl: null, openPopover: false },
    }));
  };

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          bgcolor: colors.card,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          variant="h6"
          sx={{ cursor: "pointer", color: "black" }}
          onClick={(event) => handleMenuClick(event, "master")}
        >
          Master
        </Typography>
        <Popover
          open={menuState.master.openPopover}
          anchorEl={menuState.master.anchorEl}
          onClose={() => handleMenuClose("master")}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              bgcolor: "white",
            }}
          >
            <MenuItem>
              <Link to="/accountMasterForm" style={{ textDecoration: "none" }}>
                <InputLabel sx={{ color: "black" }}>AccountMaster</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/companyForm" style={{ textDecoration: "none" }}>
                <InputLabel sx={{ color: "black" }}>Company</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/groupMasterForm" style={{ textDecoration: "none" }}>
                <InputLabel sx={{ color: "black" }}>GroupMaster</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/itemMasterForm" style={{ textDecoration: "none" }}>
                <InputLabel sx={{ color: "black" }}>ItemMaster</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/stateMasterForm" style={{ textDecoration: "none" }}>
                <InputLabel sx={{ color: "black" }}>StateMaster</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/gstRateMasterForm" style={{ textDecoration: "none" }}>
                <InputLabel sx={{ color: "black" }}>GstRateMaster</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/scriptMasterForm" style={{ textDecoration: "none" }}>
                <InputLabel sx={{ color: "black" }}>ScriptMaster</InputLabel>
              </Link>
            </MenuItem>
          </Box>
        </Popover>

        <Typography
          variant="h6"
          sx={{ cursor: "pointer", color: "black" }}
          onClick={(event) => handleMenuClick(event, "transaction")}
        >
          Transaction
        </Typography>
        <Popover
          open={menuState.transaction.openPopover}
          anchorEl={menuState.transaction.anchorEl}
          onClose={() => handleMenuClose("transaction")}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              bgcolor: "white",
            }}
          >
            <MenuItem>
              <Link
                to="/transactionHeadDetailsForm"
                style={{ textDecoration: "none" }}
              >
                <InputLabel sx={{ color: "black" }}>
                  TransactionHeadDetails
                </InputLabel>
              </Link>
            </MenuItem>
          </Box>
                
        </Popover>

        <Typography
          variant="h6"
          sx={{ cursor: "pointer", color: "black" }}
          onClick={(event) => handleMenuClick(event, "outward")}
        >
          Outward
        </Typography>
        <Popover
          open={menuState.outward.openPopover}
          anchorEl={menuState.outward.anchorEl}
          onClose={() => handleMenuClose("outward")}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              bgcolor: "white",
            }}
          >
            <MenuItem>
              <Link
                to="/equitySalePurchaseForm"
                style={{ textDecoration: "none" }}
              >
                <InputLabel sx={{ color: "black" }}>
                  EquitySalePurchase
                </InputLabel>
              </Link>
            </MenuItem>
          </Box>
        </Popover>

        <Typography
          variant="h6"
          sx={{ cursor: "pointer", color: "black" }}
          onClick={(event) => handleMenuClick(event, "report")}
        >
          Reports
        </Typography>
        <Popover
          open={menuState.report.openPopover}
          anchorEl={menuState.report.anchorEl}
          onClose={() => handleMenuClose("report")}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              bgcolor: "white",
            }}
          >
            <MenuItem>
              <Link
                to="/equityPurchaseRegisterReport"
                style={{ textDecoration: "none" }}
              >
                <InputLabel sx={{ color: "black" }}>
                  Equity Purchase Register
                </InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/equitySaleRegisterReport"
                style={{ textDecoration: "none" }}
              >
                <InputLabel sx={{ color: "black" }}>
                  Equity Sale Register
                </InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/equityReport" style={{ textDecoration: "none" }}>
                <InputLabel sx={{ color: "black" }}>Equity Report</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/futureOptionReport" style={{ textDecoration: "none" }}>
                <InputLabel sx={{ color: "black" }}>
                  Future & Option Report
                </InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/comoditiesReport" style={{ textDecoration: "none" }}>
                <InputLabel sx={{ color: "black" }}>
                  Comodities Report
                </InputLabel>
              </Link>
            </MenuItem>
          </Box>
        </Popover>

        <Typography variant="h6" sx={{ cursor: "pointer", color: "black" }}>
          <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
            Logout
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
