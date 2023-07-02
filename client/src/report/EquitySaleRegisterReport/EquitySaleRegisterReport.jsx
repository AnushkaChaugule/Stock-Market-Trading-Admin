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

class EquitySaleRegisterReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equitySaleData: [],
      filteredEquitySales: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await getAllEquitySalePurchaseData();
      const equitySaleData = response.data;
      const filteredEquitySales = equitySaleData.filter(
        (sale) => sale.transactionType.toLowerCase() === "s"
      );
      this.setState({
        equitySaleData,
        filteredEquitySales,
      });
    } catch (error) {
      console.error("Failed to fetch Equity Sale data:", error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { equitySaleData } = this.state;
    if (prevState.equitySaleData !== equitySaleData) {
      const filteredEquitySales = equitySaleData.filter(
        (sale) => sale.transactionType.toLowerCase() === "s"
      );
      this.setState({ filteredEquitySales });
    }
  }
  render() {
    const { filteredEquitySales } = this.state;

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
            Equity Sale Register Report
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
                paddingLeft: "550px"
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
                {filteredEquitySales.map((sale) => (
                  <TableRow key={sale.id}>
                    <TableCell>{sale.id}</TableCell>
                    <TableCell>{sale.billNo}</TableCell>
                    <TableCell>{sale.billDate}</TableCell>
                    <TableCell>{sale.transactionType}</TableCell>
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

export default EquitySaleRegisterReport;
