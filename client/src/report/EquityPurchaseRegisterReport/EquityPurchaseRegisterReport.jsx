import React, { Component } from "react";
import {
  TableCell,
  TableRow,
  TableHead,
  Table,
  Box,
  Typography,
} from "@mui/material";
import { getAllEquitySalePurchaseData } from "../../api/equitySalePurchase/equitySalePurchase.request";
import MenuBar from "../../pages/menu/menuBar";

class EquityPurchaseRegisterReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equityPurchaseData: [],
      filteredEquityPurchase: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await getAllEquitySalePurchaseData();
      const equityPurchaseData = response.data;
      const filteredEquityPurchase = equityPurchaseData.filter(
        (purchase) => purchase.transactionType.toLowerCase() === "p"
      );
      this.setState({
        equityPurchaseData,
        filteredEquityPurchase,
      });
    } catch (error) {
      console.error("Failed to fetch Equity Purchase data:", error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { equityPurchaseData } = this.state;
    if (prevState.equityPurchaseData !== equityPurchaseData) {
      const filteredEquityPurchase = equityPurchaseData.filter(
        (sale) => sale.transactionType.toLowerCase() === "p"
      );
      this.setState({ filteredEquityPurchase });
    }
  }
  render() {
    const { filteredEquityPurchase } = this.state;

    return (
        <>
        <MenuBar />
      <div>
        <Box
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontWeight: 500,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="h4"
          >
            Equity Purchase Register Report
          </Typography>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
              mb: 3,
            }}
          ></Box>

          <Box sx={{ overflowX: "auto" }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{
                backgroundColor: "#f5f5f5",
                width: "100%",
                paddingLeft: "650px"
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>id</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>billNo</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>billDate</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    transactionType
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    purchaseId
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>scriptId</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>quantity</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>bonus</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>value</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    accountId
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>brokage</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>cess</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>stt</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    serviceTax
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    stampDuty
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    turnoverTax
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>netValue</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>netRate</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>yearCode</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    companyCode
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    createdBy
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    modifiedBy
                  </TableCell>
                </TableRow>
              </TableHead>
              <tbody>
                {filteredEquityPurchase.map((sale) => (
                  <TableRow key={sale.id}>
                    <TableCell>{sale.id}</TableCell>
                    <TableCell>{sale.billNo}</TableCell>
                    <TableCell>{sale.billDate}</TableCell>
                    <TableCell>{sale.transactionType}</TableCell>
                    <TableCell>{sale.purchaseId}</TableCell>
                    <TableCell>{sale.scriptId}</TableCell>
                    <TableCell>{sale.quantity}</TableCell>
                    <TableCell>{sale.bonus}</TableCell>
                    <TableCell>{sale.value}</TableCell>
                    <TableCell>{sale.accountId}</TableCell>
                    <TableCell>{sale.brokage}</TableCell>
                    <TableCell>{sale.cess}</TableCell>
                    <TableCell>{sale.stt}</TableCell>
                    <TableCell>{sale.serviceTax}</TableCell>
                    <TableCell>{sale.stampDuty}</TableCell>
                    <TableCell>{sale.turnoverTax}</TableCell>
                    <TableCell>{sale.netValue}</TableCell>
                    <TableCell>{sale.netRate}</TableCell>
                    <TableCell>{sale.yearCode}</TableCell>
                    <TableCell>{sale.companyCode}</TableCell>
                    <TableCell>{sale.createdBy}</TableCell>
                    <TableCell>{sale.modifiedBy}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </Box>
        </Box>
      </div>
      </>
    );
  }
}

export default EquityPurchaseRegisterReport;
