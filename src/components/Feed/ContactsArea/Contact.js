import React from "react";
import { Box, Paper, Tooltip, Typography } from "@mui/material";
import { useStyles } from "./ContactStyles";
import { Link } from "react-router-dom";

// Contact card for Feed contact area
export const Contact = ({ contact }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container} elevation={2}>
      <Tooltip title={`Show ${contact.name}'s profile`}>
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
          <Link
            to={`/profile/${contact.name}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography
              style={{
                lineHeight: "1",
              }}
            >
              {contact.name}
            </Typography>
          </Link>
        </Box>
      </Tooltip>
    </Paper>
  );
};
