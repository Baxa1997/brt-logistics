"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {createTheme} from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {AppProvider, type Navigation} from "@toolpad/core/AppProvider";
import {DashboardLayout} from "@toolpad/core/DashboardLayout";
import {DemoProvider, useDemoRouter} from "@toolpad/core/internal";
import Drivers from "./Drivers";
import Operators from "./Operators";
import Dedicated from "./Dedicated";

const NAVIGATION: Navigation = [
  {
    segment: "drivers",
    title: "Drivers",
    icon: <DashboardIcon />,
  },
  {
    segment: "operators",
    title: "Operators",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "dedicated",
    title: "Dedicated Lines",
    icon: <ShoppingCartIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {light: true},
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({pathname}: {pathname: string}) {
  const drivers = pathname?.includes("drivers");
  const operators = pathname?.includes("operators");
  const dedicated = pathname?.includes("dedicated");

  return (
    <Box>
      {drivers && <Drivers />}
      {operators && <Operators />}
      {dedicated && <Dedicated />}
    </Box>
  );
}

export default function Admin() {
  const router = useDemoRouter("drivers");
  console.log("env", {
    project_id: process.env.GOOGLE_SHEET_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY,
    private_key_len: process.env.GOOGLE_PROJECT_ID,
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  });

  return (
    <DemoProvider>
      <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
        <DashboardLayout
          defaultSidebarCollapsed
          slots={{
            appTitle: CustomAppTitle,
          }}>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </DemoProvider>
  );
}

function CustomAppTitle() {
  return (
    <Stack direction="row" height={"1px"} alignItems="center" spacing={2}>
      <Typography variant="h6"></Typography>
    </Stack>
  );
}
