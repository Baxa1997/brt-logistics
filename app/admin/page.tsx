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
import {useRouter} from "next/navigation";
import DriverJobAppliers from "./DriverJobs";
import OperatorJobAppliers from "./OperatorJobs";
import DedicatedJobAppliers from "./DedicatedJobs";

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
  {
    segment: "appliedDedicated",
    title: "Dedicated Lanes Jobs",
    icon: <ShoppingCartIcon />,
  },

  {
    segment: "driverJobs",
    title: "Driver Jobs",
    icon: <DashboardIcon />,
  },
  {
    segment: "appliedOperator",
    title: "Operator Jobs",
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
  console.log("pathnamepathnamepathname", pathname);

  const drivers = pathname?.includes("drivers");
  const operators = pathname?.includes("operators");
  const dedicated = pathname?.includes("dedicated");
  const driverJobs = pathname?.includes("driverJobs");
  const operatorJobs = pathname?.includes("appliedOperator");
  const dedicatedJobs = pathname?.includes("appliedDedicated");

  return (
    <Box>
      {drivers && <Drivers />}
      {operators && <Operators />}
      {dedicated && <Dedicated />}
      {driverJobs && <DriverJobAppliers />}
      {operatorJobs && <OperatorJobAppliers />}
      {dedicatedJobs && <DedicatedJobAppliers />}
    </Box>
  );
}

export default function Admin() {
  const router = useDemoRouter("drivers");
  const route = useRouter();

  React.useEffect(() => {
    if (!sessionStorage.getItem("sessionId")) {
      route.push("/login");
    }
  }, []);

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
