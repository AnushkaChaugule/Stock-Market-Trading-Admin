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

class FutureOptionReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      futureOptionData: [],
      filteredFutureOption: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await getAllScriptMasterData();
      const futureOptionData = response.data;
      const filteredFutureOption = futureOptionData.filter(
        (futureOption) => futureOption.scriptType.toLowerCase() === "f"
      );
      this.setState({
        futureOptionData,
        filteredFutureOption,
      });
    } catch (error) {
      console.error("Failed to fetch Future & Option data:", error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { futureOptionData } = this.state;
    if (prevState.futureOptionData !== futureOptionData) {
      const filteredFutureOption = futureOptionData.filter(
        (futureOption) => futureOption.scriptType.toLowerCase() === "f"
      );
      this.setState({ filteredFutureOption });
    }
  }
  render() {
    const { filteredFutureOption } = this.state;

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
              Future & Option Report
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
                  {filteredFutureOption.map((futureOption) => (
                    <TableRow key={futureOption.id}>
                      <TableCell>{futureOption.id}</TableCell>
                      <TableCell>{futureOption.scriptName}</TableCell>
                      <TableCell>{futureOption.scriptType}</TableCell>
                      <TableCell>{futureOption.lotSize}</TableCell>
                      <TableCell>{futureOption.faceValue}</TableCell>
                      <TableCell>{futureOption.scriptId}</TableCell>
                      <TableCell>{futureOption.isinNo}</TableCell>
                      <TableCell>{futureOption.createdBy}</TableCell>
                      <TableCell>{futureOption.modifiedBy}</TableCell>
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

export default FutureOptionReport;
