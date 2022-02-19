import React from "react";
import { useAppContext } from "../../ContextProvider/ContextProvider";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useStyles } from "./ContactsAreaStyles";
import { Contact } from "./Contact";
export const ContactsArea = ({ contacts }) => {
  const { loggedInUser } = useAppContext();
  const [contactsData, setContactsData] = useState();

  // Filter logged in user from contacts
  useEffect(() => {
    const arr = contacts.filter((user) => user.name !== loggedInUser.name);
    setContactsData(arr);
  }, [contacts]);
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        {contactsData &&
          contactsData.map((contact, key) => (
            <Contact key={key} contact={contact}></Contact>
          ))}
      </Box>
    </>
  );
};
