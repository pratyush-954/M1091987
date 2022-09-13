import { Box, Grid } from "@mui/material";
import * as React from "react";

// import pizzas from "../pizza-data";
// import Pizza from "../Pizza";
// import { Navbar } from "../frontend/components/molecules/Homenavbar/NavbarHome";

import pizzas from "../pizza-data";
import Pizza from "../Pizza";

const HomePizza= () => {
  return (
    <>
      <Box marginLeft={6}marginTop={5}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {pizzas.map((pizza) => (
            <Grid item xs={6} sm={4} md={4}>
              <Pizza pizza={pizza} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default HomePizza;
