import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useStyles } from "./SignupStyles";
import { handleSignUp as sendUser } from "./HandleSignUp";

// SignUp view
export const Signup = () => {
  const classes = useStyles();
  const userdata = {
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    password: "",
  };
  const [inputData, setInputData] = useState({
    ...userdata,
    confirmPassword: "",
  });
  const [inputsFilled, setInputsFilled] = useState(false);

  useEffect(() => {
    const filled = Object.values(inputData).every((field) => field.length > 0);
    if (filled) setInputsFilled(true);
    else setInputsFilled(false);
  }, [inputData]);

  const handleSignup = async () => {
    if (inputsFilled) {
      const data = await sendUser(inputData);

      console.log("DATA!!!:", data);
      if (data.status === 200) {
        console.log("OK HYVÄ!");
      } else if (data.status === 400) {
        console.log("STATUS 400!");
      }
    } else alert("Fill all fields!");
  };

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
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
              name="firstName"
              onChange={handleInputChange}
              value={inputData.firstName}
            ></TextField>
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <TextField
              className={classes.textfield}
              label="Last Name"
              name="lastName"
              onChange={handleInputChange}
              value={inputData.lastName}
            ></TextField>
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <TextField
              className={classes.textfield}
              label="Email"
              name="email"
              onChange={handleInputChange}
              value={inputData.email}
            ></TextField>
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <TextField
              className={classes.textfield}
              label="Date of Birth"
              name="dateOfBirth"
              onChange={handleInputChange}
              value={inputData.dateOfBirth}
            ></TextField>
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <TextField
              className={classes.textfield}
              label="Password"
              name="password"
              onChange={handleInputChange}
              value={inputData.password}
            ></TextField>
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <TextField
              className={classes.textfield}
              label="Confirm Password"
              name="confirmPassword"
              onChange={handleInputChange}
              value={inputData.confirmPassword}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.button}>
              <Button
                variant="contained"
                onClick={handleSignup}
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
