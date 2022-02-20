import React from "react";
import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

// Tabs area in Profile page
export const TabsArea = ({ scrollToComponent }) => {
  const [tabValue, setTabValue] = useState(false);

  // Changes active tab
  const handleChange = (e, value) => {
    setTabValue(value);
    scrollToComponent(value);
  };

  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
        >
          <Tab label="About Me" value="1" />
          <Tab label="Work" value="2" />
          <Tab label="Contact" value="3" />
          <Tab label="Github" value="4" />
          <Tab label="Posts" value="5" />
        </Tabs>
      </Box>
    </>
  );
};
