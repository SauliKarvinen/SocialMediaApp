import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useStyles } from "./ContactsPageStyles";

export const ContactCard = ({ contact }) => {
  const classes = useStyles();

  return (
    <Link
      to={`/profile/${contact.name}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Card
        style={{ maxWidth: "100%", marginBottom: "2rem" }}
        className={classes.contactCard}
      >
        <CardMedia
          component="img"
          alt="profilebackground"
          height="100px"
          image={contact.profilebackgroundimage}
        />

        <CardContent style={{ background: "#fafafa" }}>
          <Tooltip title={`Show ${contact.name}'s profile`}>
            <Box
              display="flex"
              maxWidth="100%"
              height="2.5rem"
              alignItems="center"
              gap={1}
              mt={2}
              p={2}
            >
              <Box className={classes.imgborder} boxShadow={2}>
                <img
                  src={contact.profileimg}
                  className={classes.img}
                  alt="profileimage"
                />
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignSelf="center"
                ml={1}
              >
                <Typography
                  variant="h6"
                  style={{
                    lineHeight: "1",
                  }}
                >
                  {contact.name}
                </Typography>
                <Typography variant="body3" style={{ fontSize: "1.1em" }}>
                  {`${contact.title} - ${contact.organization}`}
                </Typography>
              </Box>
            </Box>
          </Tooltip>
        </CardContent>
      </Card>
    </Link>
  );
};
