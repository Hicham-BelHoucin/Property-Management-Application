import React, { useEffect, useState } from "react";
import PropertyList from "./../components/PropertyList";
import AddProperty from "./../components/AddProperty";
import TenantList from "./../components/TenantList";
import AddTenant from "./../components/AddTenant";
import PaymentList from "./../components/PaymentList";
import AddPayment from "./../components/AddPayment";
import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Layout from "./../layout";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import AddIcon from "@mui/icons-material/Add";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  fetcher,
  getPayments,
  getProperties,
  getTenants,
  Payment,
  Property,
  Tenant,
} from "./../services/api";
import useSWR from "swr";

const PropertyPage = () => {
  const [open, setOpen] = React.useState(false);
  const [property, setProperty] = useState<Property>();



  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <PropertyList
        sx={{
          maxHeight: "none",
        }}
        open={open}
        setOpen={setOpen}
        Property={property}
        setProperty={setProperty}
      />
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: 4,
            borderRadius: 4,
          }}
        >
          <AddProperty handleClose={handleClose} _property={property} />
        </Box>
      </Modal>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          key="Add Payment"
          icon={<AddIcon />}
          tooltipTitle="Add Payment"
          onClick={() => setOpen(true)}
        />
      </SpeedDial>
    </Container>
  );
};

export default PropertyPage;
