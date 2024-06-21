import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, Button, TableContainer, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./staff-document-listing.styles.css";

const data = [
  {
    no: "000001",
    name: "John Smith",
    icNo: "J000001",
    nationality: "Bruneian",
    passportNo: "PXZ01501NC",
    icExpiry: "12-4-2024",
    ldExpiry: "12-4-2024",
    visaExpiry: "02-02-2024",
    position: "Position",
    insurance: "Insurance",
  },
];

const StaffDocumentListing = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "No.",
        size: 40,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 80,
      },
      {
        accessorKey: "icNo",
        header: "IC No.",
        size: 40,
      },
      {
        accessorKey: "nationality",
        header: "Nationality",
        size: 40,
      },
      {
        accessorKey: "passportNo",
        header: "Passport No.",
        size: 40,
      },
      {
        accessorKey: "icExpiry",
        header: "IC Expiry",
        size: 40,
      },
      {
        accessorKey: "ldExpiry",
        header: "LD Expiry",
        size: 40,
      },
      {
        accessorKey: "visaExpiry",
        header: "Visa Expiry",
        size: 40,
      },
      {
        accessorKey: "position",
        header: "Position",
        size: 40,
      },
      {
        accessorKey: "insurance",
        header: "Insurance",
        size: 40,
      },
    ],
    []
  );

  return (
    <div className="table-container">
      <Box>
        <Box display="flex" justifyContent="end" m={2}>
          <Button className="btn-add" variant="contained" startIcon={<AddIcon />} disabled>
            Add Staff
          </Button>
        </Box>
        <TableContainer component={Paper} sx={{ maxWidth: "1000px" }}>
          <MaterialReactTable
            columns={columns}
            data={data}
            options={{
              fixedHeader: true,
              tableLayout: "auto",
              responsive: "standard",
              overflowY: "auto",
            }}
          />
        </TableContainer>
      </Box>
    </div>
  );
};

export default StaffDocumentListing;
