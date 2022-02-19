import React from "react";
import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

export const TabsArea = ({ scrollToComponent }) => {
  const [tabValue, setTabValue] = useState(false);
  const handleChange = (e, value) => {
    setTabValue(value);
    scrollToComponent(value);
  };

  /* const handleScroll = (e) => {
    console.log("Target:", e.target);
  }; */
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabValue} onChange={handleChange}>
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
