import React from "react";
import { useState } from "react";
import { Box, Drawer, IconButton, Tooltip, Typography } from "@mui/material";
import { useStyles } from "./ContactsDrawerStyles";
import { ContactsArea } from "../Feed/ContactsArea/ContactsArea";
import { useTheme } from "@mui/styles";
import PeopleIcon from "@mui/icons-material/People";

// Drawer menu for small size screens
export const ContactsDrawer = ({ contacts }) => {
  const theme = useTheme();
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Box>
      <Tooltip title="Contacts">
        <Box className={classes.messageicon}>
          <IconButton
            style={{
              background: theme.palette.primary.main,
              color: "white",
              border: "1px solid",
              transform: "scale(1.2)",
              marginTop: ".3rem",
            }}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <PeopleIcon />
          </IconButton>
        </Box>
      </Tooltip>

      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{
          style: { marginTop: "8rem", borderRadius: "10px", width: "15rem" },
        }}
      >
        <Box width="200px" pl={1} pt={2}>
          <Typography variant="h5">Contacts</Typography>
          <hr style={{ marginBottom: "1rem" }} />
          <ContactsArea contacts={contacts} />
        </Box>
      </Drawer>
    </Box>
  );
};
