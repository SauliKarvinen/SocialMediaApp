import React from "react";
import { useEffect, useState, useRef } from "react";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useStyles } from "./MessagesPageStyles";
import { NavBar } from "../NavBar/NavBar";
import { useAppContext } from "../ContextProvider/ContextProvider";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SendIcon from "@mui/icons-material/Send";
import { Message } from "../ContextProvider/Message";

// Messages page
export const MessagesPage = ({ menuitems }) => {
  const theme = useTheme();
  const smallscreen = useMediaQuery(theme.breakpoints.down("sm"));
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const { contacts, loggedInUser } = useAppContext();
  const [filteredContacts, setFilteredContacts] = useState();
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState({ name: "" });
  const messagearea = useRef(null);
  const [inputvalue, setInputvalue] = useState("");
  const classes = useStyles();

  // Filter logged in user from contacts
  useEffect(() => {
    if (contacts) {
      const filtered = contacts.filter(
        (user) => user.name !== loggedInUser.name
      );
      setFilteredContacts(filtered);
    }
  }, []);

  // When new user is selected, scrolls chat window to the end
  useEffect(() => {
    if (messagearea.current.children.length > 1) {
      messagearea.current.children[
        messagearea.current.children.length - 1
      ].scrollIntoView({});
    }
  }, [selectedUser, filteredMessages]);

  // Filter messages according to the selected user
  const handleContactClick = (e) => {
    setSelectedUser(e);
    fetchMessages(e);
  };

  const fetchMessages = (e) => {
    // filter messages between selected user and logged in user
    const filtered = loggedInUser.messages.filter(
      (message) =>
        (message.to.name === e.name &&
          message.from.name === loggedInUser.name) ||
        (message.from.name === e.name && message.to.name === loggedInUser.name)
    );

    setFilteredMessages(filtered);
  };

  const handleInputChange = (e) => {
    setInputvalue(e.target.value);
  };

  const sendMessage = () => {
    if (inputvalue !== "") {
      const start = Date.now();
      const now = new Date(start);

      const sender = new Message({
        to: selectedUser,
        from: loggedInUser,
        time: now.toLocaleString(),
        exacttime: start,
        text: inputvalue,
      });
      loggedInUser.addMessage(sender);

      const receiver = new Message({
        to: loggedInUser,
        from: selectedUser,
        time: now.toLocaleString(),
        exacttime: start,
        text: inputvalue,
      });

      selectedUser.addMessage(receiver);
      setInputvalue("");

      setFilteredMessages([...filteredMessages, sender]);
    }
  };

  return (
    <Box className={classes.container}>
      <NavBar menuitems={menuitems} />
      <Box
        style={{
          position: "absolute",
          zIndex: 11000,
          left: ".3rem",
          top: ".6rem",
        }}
      ></Box>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h5">Messages</Typography>
            <hr />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} mt={3}>
          <Typography variant="h6">Contacts</Typography>
          <hr width="90%" />
        </Grid>
        {!smallscreen && (
          <Grid item xs={12} sm={8} mt={3}>
            <Typography variant="h6">Chat</Typography>
            <hr width="90%" />
          </Grid>
        )}
        <Grid item xs={12} sm={4} mt={3}>
          <Paper style={{ width: "90%", height: "60vh", padding: "1rem" }}>
            <Typography variant="body2" color="secondary" mb={1}>
              Click user card to show chat
            </Typography>
            {/* Render contacts */}
            {filteredContacts &&
              filteredContacts.map((contact, i) => (
                <Paper
                  className={classes.contactContainer}
                  elevation={2}
                  key={i}
                  onClick={() => handleContactClick(contact)}
                  style={{
                    background:
                      selectedUser.name === contact.name
                        ? theme.palette.primary.main
                        : "white",
                  }}
                >
                  <Box
                    display="flex"
                    maxWidth="100%"
                    height="2.5rem"
                    alignItems="center"
                    gap={1}
                    p={1}
                  >
                    <Box className={classes.imgborder} boxShadow={2}>
                      <img
                        src={contact.profileimg}
                        className={classes.img}
                        alt="profileimage"
                      />
                    </Box>

                    <Typography
                      style={{
                        lineHeight: "1",
                      }}
                    >
                      {contact.name}
                    </Typography>
                  </Box>
                </Paper>
              ))}
          </Paper>
        </Grid>
        {smallscreen && (
          <Grid item xs={12} sm={8} mt={3}>
            <Typography variant="h6">Chat</Typography>
            <hr width="50%" />
          </Grid>
        )}
        <Grid item xs={12} sm={8} mt={3} display="flex" flexDirection="column">
          <Paper
            style={{
              width: "90%",
              height: "60vh",
              overflow: "scroll",
            }}
          >
            {/* Render messages */}
            <Box
              ref={messagearea}
              display="flex"
              flexDirection="column"
              rowGap={1}
              p={1}
              style={{ minHeight: "100%" }}
            >
              {loggedInUser &&
                selectedUser &&
                filteredMessages.map((message, i) => (
                  <Paper
                    key={i}
                    style={{
                      background: "aliceblue",
                      padding: ".5rem",
                      width: belowLargeScreen ? "80%" : "48%",
                      textAlign: smallscreen ? "justify" : "initial",
                      border: "1px solid",
                      alignSelf:
                        message.from.name === loggedInUser.name
                          ? "flex-start"
                          : "flex-end",
                    }}
                  >
                    {message.to.name === loggedInUser.name && (
                      <img
                        src={message.from.profileimg}
                        style={{
                          maxHeight: "3rem",
                          maxWidth: "3rem",
                          borderRadius: "50%",
                          border: "1px solid",
                        }}
                        alt="profileimage"
                      />
                    )}
                    <Typography variant="body1">{message.text}</Typography>
                    <Box display="flex" justifyContent="flex-end">
                      <Typography variant="body2" mt={1} mr={1}>
                        {message.time}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
            </Box>
            <TextField
              style={{
                width: "100%",
                background: "white",
                position: "sticky",
                bottom: "0px",
                paddingTop: "1rem",
              }}
              className={classes.input}
              value={inputvalue}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      color="primary"
                      onClick={sendMessage}
                    >
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
