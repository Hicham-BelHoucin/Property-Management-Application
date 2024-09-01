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
  getPayments,
  getProperties,
  getTenants,
  Payment,
  Property,
  Tenant,
} from "./../services/api";

const PaymentPage = () => {


  return (
    <Container maxWidth="lg">
      <PaymentList />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          key="Add Payment"
          icon={<AddIcon />}
          tooltipTitle="Add Payment"
          onClick={() => console.log("Add Payment")}
        />
      </SpeedDial>
    </Container>
  );
};

export default PaymentPage;
