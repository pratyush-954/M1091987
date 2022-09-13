import React, { useState } from "react";
import {
  Grid,
  Paper,
  Box,
  Switch,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NavLink, useHistory } from "react-router-dom";
import { Fbicon, Googleicon, Accounticon } from "./atoms/Logo";

// import { Signbutton } from "./atoms/Buttons";
// import {
//   Username,
//   Password,
//   Repassword,
//   Email,
//   Mobilenumber,
// } from "./atoms/FieldInputs";

export default function Signup() {
  const history = useHistory();
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    //calling fetch API to connect backend and frontend

    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    console.log(name);

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      console.log(data);

      history.push("/login");
    }
  };
  const unamestyle = {
    padding: "1px auto",
    margin: "10px auto",
    align: "center",
  };
  const buttonstyle = { align: "center" };

  return (
    // <form method="POST" className="register-form" id="register-form">
    <Box align="center" sx={{ display: "flex-box", flexDirection: "row" }}>
      <Paper
        sx={{
          maxWidth: 1000,
          mx: "auto", // margin left & right

          //  my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "row",backgroundColor:"#f0ada8"
          // gap: 2,
          // borderRadius: "sm",
          // boxShadow: "md",
        }}
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
              boxShadow: "md"
            }}
          >
            <Switch
              checked={darkMode}
              onClick={() => setDarkMode(!darkMode)}
            ></Switch>
            <h1>Sign Up</h1>
            <Grid align="center">
              <Avatar>
                <Accounticon />
              </Avatar>
            </Grid>
            <Box component="form" className="register-form" id="register-form">
              <TextField
                style={unamestyle}
                name="name"
                placeholder="Username"
                variant="standard"
                fullWidth
                value={user.name}
                onChange={handleInputs}
              ></TextField>
              <TextField
                style={unamestyle}
                type="email"
                name="email"
                placeholder="Email"
                variant="standard"
                fullWidth
                value={user.email}
                onChange={handleInputs}
              ></TextField>
              <TextField
                style={unamestyle}
                name="phone"
                placeholder="Phone"
                variant="standard"
                fullWidth
                value={user.phone}
                onChange={handleInputs}
              ></TextField>
              <TextField
                style={unamestyle}
                type="password"
                name="password"
                placeholder="Password"
                variant="standard"
                fullWidth
                value={user.password}
                onChange={handleInputs}
              ></TextField>
              <TextField
                style={unamestyle}
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                variant="standard"
                fullWidth
                value={user.cpassword}
                onChange={handleInputs}
              ></TextField>
              <Button
                type="submit"
                style={buttonstyle}
                variant="contained"
                name="signup"
                id="signup"
                className="form-submit"
                value="register"
                onClick={PostData}
              >
                Sign Up
              </Button>
            </Box>
            <Typography>-----------------OR-----------------</Typography>
            <Typography>Sign Up Using:</Typography>
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
            <div>
              <NavLink to="/login" className="signup-image-link">
                <p>Already Registered?</p>
              </NavLink>
            </div>
          </Paper>
          <div>
            {" "}
            <img
              src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=2000"
              width={500}
              height={700}
              alt="sign"
            />
          </div>
        </ThemeProvider>
      </Paper>
    </Box>
    // </form>
  );
}
