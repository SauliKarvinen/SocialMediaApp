import React from "react";
import { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  OutlinedInput,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useStyles } from "./LoginStyles";

// LogIn view
export const LogIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const userdata = { email: "keijo@email.com", password: "password" };
  const [inputData, setInputData] = useState(() => userdata);
  const [inputsFilled, setInputsFilled] = useState(false);
  const theme = useTheme();
  const smallscreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const email = inputData.email;
    const password = inputData.password;

    if (email !== "" && password !== "") setInputsFilled(true);
    else setInputsFilled(false);
  }, [inputData]);
  const handleInputChange = (e) => {
    setInputData(() => ({ ...inputData, [e.target.name]: e.target.value }));
  };

  const handleLogin = () => {
    history.push("/feed");
  };
  return (
    <Box className={classes.body}>
      <Box className={classes.somelogo}>
        <h1>Social Media App</h1>
        <p>Connecting programmers</p>
      </Box>
      <Box className={classes.logincontainer} boxShadow={2}>
        <Typography
          variant="h3"
          style={{
            fontFamily: ["Lobster", "sans-serif"],
            color: "red",
            textShadow: "1px 1px black",
          }}
        >
          Log In
        </Typography>
        <hr className={classes.hr} />
        <Box className={classes.formcontainer}>
          <TextField
            className={classes.textfield}
            label="Email"
            name="email"
            value={inputData.email}
            onChange={handleInputChange}
          >
            Email
          </TextField>
          <TextField
            className={classes.textfield}
            type="password"
            label="Password"
            name="password"
            value={inputData.password}
            onChange={handleInputChange}
          >
            Password
          </TextField>
        </Box>

        <Box className={classes.button}>
          <Button
            variant="contained"
            onClick={handleLogin}
            disabled={!inputsFilled}
            style={{
              background: "linear-gradient(140deg, red, #630000)",
              color: "white",
            }}
          >
            Log In
          </Button>
        </Box>

        <Typography className={classes.text}>
          Need an account?{" "}
          <Link className={classes.link} to="/signup">
            Sign Up here!
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
