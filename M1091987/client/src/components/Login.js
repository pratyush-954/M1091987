import React, { useState, useContext } from "react";
import {
  Grid,
  Paper,
  Box,
  Link,
  Switch,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NavLink, useHistory } from "react-router-dom";
import { Fbicon, Googleicon, Accounticon } from "./atoms/Logo";
import { UserContext } from "../App";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Login() {
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(UserContext);

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successful");
      history.push("/");
    }
  };

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <Box
      align="center"
      backgroundColor="#f0ada8"
      component="form"
      className="login-form"
      id="login-form"
    >
      <ThemeProvider theme={theme}>
        <Paper
          sx={{
            maxWidth: 400,
            mx: "auto", // margin left & right
            // my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
        >
          <Switch
            checked={darkMode}
            onClick={() => setDarkMode(!darkMode)}
          ></Switch>
          <h1>Login Page</h1>
          <Grid align="center">
            <Avatar>
              <Accounticon />
            </Avatar>
          </Grid>
          {/* <Box component="form" className="login-form" id="login-form"sx={{gap:2}}> */}
          <TextField
            name="email"
            type="email"
            placeholder="Email"
            variant="standard"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            name="password"
            type="password"
            placeholder="Password"
            variant="standard"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <FormControlLabel align="center"
            control={<Checkbox defaultChecked />}
            label="Login as Admin"
          />
          <Button
            type="submit"
            value="Log In"
            onClick={loginUser}
            variant="contained"
            name="signin"
            id="signin"
            className="form-login"
          >
            Login
          </Button>
          {/* </Box> */}

          <Typography>-----------------OR-----------------</Typography>
          <Typography>Login In Using:</Typography>
          <Grid align="center">
            <Avatar>
              <Fbicon />
            </Avatar>
          </Grid>
          <Grid align="center" marginTop={1}>
            <Avatar>
              <Googleicon />
            </Avatar>
          </Grid>
          <Grid marginTop={1}>
            <Link>Forgot Password?</Link>
          </Grid>
          <Grid marginTop={1}>
            <Typography>
              Don't have an Account?
              <NavLink to="/signup" className="signup-link">
                <p>Sign Up</p>
              </NavLink>
            </Typography>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
