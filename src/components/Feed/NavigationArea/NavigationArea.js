import React from "react";
import { useEffect, useState } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link } from "react-router-dom";
import { useStyles } from "./NavigationAreaStyles";

// Navigation area for Feed page
export const NavigationArea = ({ menuitems, feedPage }) => {
  const classes = useStyles();
  const [menuItems, setMenuItems] = useState();

  // If on Feed page, remove 'Feed' option from menu
  useEffect(() => {
    if (feedPage) {
      let filtered = menuitems.filter((item) => item !== "Feed");
      setMenuItems(filtered);
    } else {
      setMenuItems(menuitems);
    }
  }, [menuitems]);

  return (
    <Box className={classes.container} elevation={1}>
      <Box className={classes.menulist}>
        <List>
          {menuItems &&
            menuItems.map((item, i) => (
              <ListItem key={i} className={classes.listitem}>
                <Link to={`/${item}`} style={{ textDecoration: "none" }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <ArrowCircleRightOutlinedIcon />
                    <Typography variant="h6" className={classes.listtext}>
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
