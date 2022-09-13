import React from "react";
import { Button } from "@mui/material";

const Loginbutton = () => {
  const buttonstyle = { align: "center" };
  return (
    <Button style={buttonstyle} variant="contained">
      Login
    </Button>
  );
};

const Signbutton = () => {
  const buttonstyle = { align: "center" };
  return (
    <Button type="submit" style={buttonstyle} variant="contained" name='signup' id="signup" className="form-submit" value="register" onClick={PostData}>
      Sign Up
    </Button>
  );
};

export { Loginbutton, Signbutton };
