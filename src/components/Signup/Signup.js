import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useStyles } from "./SignupStyles";

// SignUp view
export const Signup = () => {
  const classes = useStyles();
  const userdata = { email: "", password: "" };
  const [inputData, setInputData] = useState(() => userdata);
  const [inputsFilled, setInputsFilled] = useState(true);
  const theme = useTheme();

  /* useEffect(() => {
    const email = inputData.email;
    const password = inputData.password;

    if (email !== "" && password !== "") setInputsFilled(true);
    else setInputsFilled(false);
  }, [inputData]); */
  const handleInputChange = (e) => {
    setInputData(() => ({ ...inputData, [e.target.name]: e.target.value }));
  };

  const handleSignup = () => {
    alert("Sign Up system under construction....");
  };
  return (
    <Box className={classes.body}>
      <Box className={classes.somelogo}>
        <h1>Social Media App</h1>
        <p>Connecting programmers</p>
      </Box>
      <Box className={classes.signupcontainer} boxShadow={2}>
        <Typography
          variant="h3"
          style={{
            fontFamily: ["Lobster", "sans-serif"],
            color: "red",
            textShadow: "1px 1px black",
          }}
        >
          Sign Up
        </Typography>
        <hr className={classes.hr} />

        {/* <FormControl> */}
        <Grid container width="100%" className={classes.formcontainer}>
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <TextField
              className={classes.textfield}
              label="First Name"
            ></TextField>
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <TextField
              className={classes.textfield}
              label="Last Name"
            ></TextField>
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <TextField className={classes.textfield} label="Email"></TextField>
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <TextField
              className={classes.textfield}
              label="Date of Birth"
            ></TextField>
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <TextField
              className={classes.textfield}
              label="Password"
            ></TextField>
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <TextField
              className={classes.textfield}
              label="Confirm Password"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.button}>
              <Button
                variant="contained"
                onClick={handleSignup}
                disabled={!inputsFilled}
                style={{
                  background: "linear-gradient(140deg, red, #630000)",
                  color: "white",
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text}>
              Already have an account?{" "}
              <Link className={classes.link} to="/login">
                Log In here!
              </Link>
            </Typography>
          </Grid>
        </Grid>
        {/*    </FormControl> */}
      </Box>
    </Box>
  );
};
