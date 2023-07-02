import {
  Typography,
  Box,
  Table,
  TableHead,
  TableCell,
  TableRow,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Link,
} from "@mui/material";
import { useColors } from "../../hooks/use-colors";
import { getAllCompanyData } from "../../api/company/company.request";
import { useState, useEffect } from "react";
import CompanyForm from "../company/CompanyForm";
import { useIds } from "../IdsContext/IdsContext";

const CompanySelection = () => {
  const { ids, setIds } = useIds();

  const colors = useColors();
  const [companyData, setCompanyData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [redirectToCompanyForm, setRedirectToCompanyForm] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);

  const selectYear = [
    "2010-2011",
    "2011-2012",
    "2012-2013",
    "2013-2014",
    "2014-2015",
    "2015-2016",
    "2016-2017",
    "2017-2018",
    "2018-2019",
    "2019-2020",
    "2020-2021",
    "2021-2022",
    "2022-2023",
    "2023-2024",
    "2024-2025",
  ];

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await getAllCompanyData();
        setCompanyData(response.data);
      } catch (error) {
        console.error("Failed to fetch company data:", error);
      }
    };
    fetchCompanyData();
  }, []);

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleClick = (companyId) => {
    setSelectedCompanyId(companyId);
    setIds((prev) => ({ ...prev, companyId }));
    //companyId:cid
    console.log(companyId);
  };

  const handleSelect = (e) => {
    if (selectedCompanyId) {
      setRedirectToCompanyForm(true);
    }
  };

  const selectedCompany = companyData.find(
    (data) => data.id === selectedCompanyId
  );

  if (redirectToCompanyForm) {
    return <CompanyForm data={selectedCompany} />;
  }

  return (
    <Box
      sx={{
        height: "100%",
        width: "90%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            mt: 1,
          }}
        >
          <InputLabel sx={{ color: "black", textEmphasisColor: "black" }}>
            Accounting Year
          </InputLabel>
          <Select
            value={selectedYear}
            onChange={handleChange}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
              getContentAnchorEl: null,
            }}
            style={{ maxHeight: 200, overflow: "auto" }}
          >
            {selectYear.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
          variant="h4"
        >
          Company Selection
        </Typography>

        <Box
          sx={{
            pt: 4,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ pr: 3 }}>
            <Button color="green" variant="contained" onClick={handleSelect}>
              Select
            </Button>
          </Box>
        </Box>
      </Box>

      <Table
        stickyHeader
        aria-label="sticky table"
        style={{
          backgroundColor: "#f5f5f5",
          mt: 4,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>id</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Company Name</TableCell>
          </TableRow>
        </TableHead>

        <tbody>
          {companyData.map((data) => (
            <TableRow
              key={data.id}
              onClick={() => handleClick(data.id)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.companyName}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default CompanySelection;
