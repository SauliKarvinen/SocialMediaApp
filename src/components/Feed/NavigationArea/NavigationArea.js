import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link } from "react-router-dom";
import { useStyles } from "./NavigationAreaStyles";

export const NavigationArea = ({ menuitems }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container} elevation={1}>
      <Box className={classes.menulist}>
        <List>
          {menuitems &&
            menuitems.map((item, i) => (
              <ListItem key={i} className={classes.listitem}>
                <Link to={`/${item}`} style={{ textDecoration: "none" }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <ArrowCircleRightOutlinedIcon />
                    <Typography variant="h5" className={classes.listtext}>
                      {item}
                    </Typography>
                  </Box>
                </Link>
              </ListItem>
            ))}
        </List>
      </Box>
    </Box>
  );
};
