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

class CommoditiesReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commoditiesData: [],
      filteredcommodities: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await getAllScriptMasterData();
      const commoditiesData = response.data;
      const filteredcommodities = commoditiesData.filter(
        (commodities) => commodities.scriptType.toLowerCase() === "c"
      );
      this.setState({
        commoditiesData,
        filteredcommodities,
      });
    } catch (error) {
      console.error("Failed to fetch Commodities data:", error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { commoditiesData } = this.state;
    if (prevState.commoditiesData !== commoditiesData) {
      const filteredcommodities = commoditiesData.filter(
        (commodities) => commodities.scriptType.toLowerCase() === "c"
      );
      this.setState({ filteredcommodities });
    }
  }
  render() {
    const { filteredcommodities } = this.state;

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
              Commodities Report
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
                  {filteredcommodities.map((commodities) => (
                    <TableRow key={commodities.id}>
                      <TableCell>{commodities.id}</TableCell>
                      <TableCell>{commodities.scriptName}</TableCell>
                      <TableCell>{commodities.scriptType}</TableCell>
                      <TableCell>{commodities.lotSize}</TableCell>
                      <TableCell>{commodities.faceValue}</TableCell>
                      <TableCell>{commodities.scriptId}</TableCell>
                      <TableCell>{commodities.isinNo}</TableCell>
                      <TableCell>{commodities.createdBy}</TableCell>
                      <TableCell>{commodities.modifiedBy}</TableCell>
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

export default CommoditiesReport;
