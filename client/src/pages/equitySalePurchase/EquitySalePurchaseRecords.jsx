import {
  TableCell,
  TableRow,
  TableHead,
  Table,
  Button,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { React, useState, useEffect } from "react";
import CustomIconButton from "../../components/Buttons/CustomIconButton";
import { Search } from "@mui/icons-material";
import EquitySalePurchaseForm from "./EquitySalePurchaseForm";
import { getAllEquitySalePurchaseData } from "../../api/equitySalePurchase/equitySalePurchase.request";
import { useIds } from "../IdsContext/IdsContext";

const EquitySalePurchaseRecords = () => {
  const { ids, setIds } = useIds();

  const [equitySalePurchaseData, setEquitySalePurchaseData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [
    redirectToEquitySalePurchaseForm,
    setRedirectToEquitySalePurchaseForm,
  ] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchEquitySalePurchaseData = async () => {
      try {
        const response = await getAllEquitySalePurchaseData();
        setEquitySalePurchaseData(response.data);
      } catch (error) {
        console.error("Failed to fetch EquitySalePurchase data:", error);
      }
    };
    fetchEquitySalePurchaseData();
  }, []);

  const handleSearch = () => {
    const filteredData = searchQuery
      ? equitySalePurchaseData.filter((data) =>
          data.transactionType.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : equitySalePurchaseData;
    setEquitySalePurchaseData(filteredData);
  };

  const handleClick = (equitySalePurchase) => {
    console.log(equitySalePurchase.id);
    const equitySalePurchaseId = equitySalePurchase.id;
    setIds((prev) => ({ ...prev, equitySalePurchaseId }));
    setRedirectToEquitySalePurchaseForm(true);
    setSelectedData(equitySalePurchase);
  };

  const handleAddClick = () => {
    setRedirectToEquitySalePurchaseForm(true);
  };

  if (redirectToEquitySalePurchaseForm) {
    return <EquitySalePurchaseForm data={selectedData} />;
  }

  return (
    <Box
      sx={{
        maxWidth: "95%",
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
          mt: 3,
        }}
        variant="h4"
      >
        Equity Sale Purchase Records
      </Typography>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Button
            sx={{ color: "black", bgcolor: "grey" }}
            onClick={() => {
              handleAddClick();
            }}
          >
            Add Data
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            gap: 1,
          }}
        >
          <TextField
            id="search-bar"
            className="text"
            label="Enter Transaction Type"
            variant="outlined"
            placeholder="Search..."
            value={searchQuery}
            size="small"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <CustomIconButton onClick={handleSearch}>
            <Search />
          </CustomIconButton>
        </Box>
      </Box>

      <Table
        stickyHeader
        aria-label="sticky table"
        style={{
          backgroundColor: "#f5f5f5",
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
            <TableCell style={{ fontWeight: "bold" }}>purchaseId</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>quantity</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>bonus</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>value</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>accountId</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>brokage</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>cess</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>stt</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>serviceTax</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>stampDuty</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>turnoverTax</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>netValue</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>netRate</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>yearCode</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>companyCode</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>createdBy</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>modifiedBy</TableCell>
          </TableRow>
        </TableHead>

        <tbody>
          {equitySalePurchaseData.map((data) => (
            <TableRow
              key={data.id}
              onClick={() => {
                handleClick(data);
              }}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.billNo}</TableCell>
              <TableCell>{data.billDate}</TableCell>
              <TableCell>{data.transactionType}</TableCell>
              <TableCell>{data.scriptId}</TableCell>
              <TableCell>{data.purchaseId}</TableCell>
              <TableCell>{data.quantity}</TableCell>
              <TableCell>{data.bonus}</TableCell>
              <TableCell>{data.value}</TableCell>
              <TableCell>{data.accountId}</TableCell>
              <TableCell>{data.brokage}</TableCell>
              <TableCell>{data.cess}</TableCell>
              <TableCell>{data.stt}</TableCell>
              <TableCell>{data.serviceTax}</TableCell>
              <TableCell>{data.stampDuty}</TableCell>
              <TableCell>{data.turnoverTax}</TableCell>
              <TableCell>{data.netValue}</TableCell>
              <TableCell>{data.netRate}</TableCell>
              <TableCell>{data.yearCode}</TableCell>
              <TableCell>{data.companyCode}</TableCell>
              <TableCell>{data.createdBy}</TableCell>
              <TableCell>{data.modifiedBy}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default EquitySalePurchaseRecords;
