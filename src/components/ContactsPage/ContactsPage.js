import React from "react";
import { useEffect, useState } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { useStyles } from "./ContactsPageStyles";
import { NavBar } from "../NavBar/NavBar";
import { useAppContext } from "../ContextProvider/ContextProvider";
import { ContactCard } from "./ContactCard";

// Contacts Page
export const ContactsPage = ({ menuitems }) => {
  const classes = useStyles();
  const [filteredContacts, setFilteredContacts] = useState();
  const { contacts, loggedInUser } = useAppContext();

  // Filter logged in user from contacts
  useEffect(() => {
    if (contacts) {
      const filtered = contacts.filter(
        (user) => user.name !== loggedInUser.name
      );
      setFilteredContacts(filtered);
    }
  }, [contacts, loggedInUser.name]);

  return (
    <Box className={classes.container}>
      <NavBar menuitems={menuitems} />
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} display="flex" flexDirection="column">
          <Typography variant="h4" mb={1}>
            Contacts
          </Typography>
          <hr width="100%" />
        </Grid>

        <Grid item xs={12} sm={8} md={7} lg={6} mt={5}>
          <Paper style={{ width: "100%", minHeight: "60vh" }} elevation={4}>
            <Box display="flex" flexDirection="column" p={2} overflow="scroll">
              {filteredContacts &&
                filteredContacts.map((contact, i) => (
                  <ContactCard key={i} contact={contact} />
                ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
