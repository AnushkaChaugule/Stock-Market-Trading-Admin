import React, { Component } from "react";
import {
  TableCell,
  TableRow,
  TableHead,
  Table,
  Box,
  Typography,
} from "@mui/material";
import { getAllScriptMasterData } from "../../api/scriptMaster/scriptMaster.request";
import MenuBar from "../../pages/menu/menuBar";

class EquityReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equityData: [],
      filteredEquity: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await getAllScriptMasterData();
      const equityData = response.data;
      const filteredEquity = equityData.filter(
        (equity) => equity.scriptType.toLowerCase() === "e"
      );
      this.setState({
        equityData,
        filteredEquity,
      });
    } catch (error) {
      console.error("Failed to fetch Equity data:", error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { equityData } = this.state;
    if (prevState.equityData !== equityData) {
      const filteredEquity = equityData.filter(
        (equity) => equity.scriptType.toLowerCase() === "e"
      );
      this.setState({ filteredEquity });
    }
  }
  render() {
    const { filteredEquity } = this.state;

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
              Equity Report
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
                  paddingLeft: "0px",
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }}>id</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      scriptName
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      scriptType
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      lotSize
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      faceValue
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      scriptId
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>isinNo</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      createdBy
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      modifiedBy
                    </TableCell>
                  </TableRow>
                </TableHead>
                <tbody>
                  {filteredEquity.map((equity) => (
                    <TableRow key={equity.id}>
                      <TableCell>{equity.id}</TableCell>
                      <TableCell>{equity.scriptName}</TableCell>
                      <TableCell>{equity.scriptType}</TableCell>
                      <TableCell>{equity.lotSize}</TableCell>
                      <TableCell>{equity.faceValue}</TableCell>
                      <TableCell>{equity.scriptId}</TableCell>
                      <TableCell>{equity.isinNo}</TableCell>
                      <TableCell>{equity.createdBy}</TableCell>
                      <TableCell>{equity.modifiedBy}</TableCell>
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

export default EquityReport;
