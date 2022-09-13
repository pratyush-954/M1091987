import React, { useState } from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
// import { Buttonfunc } from "./frontend/components/atoms/Button/button";

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  return (
     <Grid container>
      <Card sx={{ maxWidth: 400, maxHeight: 500 }} >
        <CardMedia component="img" height="140" src={pizza.image} alt="Pizza" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pizza.name}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            {pizza.description}
          </Typography>
        
          <Grid container>
            <Grid item xs={6}>
              <h4>Varients</h4>
              <select value={varient} onChange={(e) => setVarient(e.target.value)}>
                {pizza.varients.map((varient) => (
                  <option>
                    {varient}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid item xs={6}>
              <h4>Quantity</h4>
              <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {[...Array(10).keys()].map((v, i) => (
                  <option
                    value={i + 1}>
                    {i + 1}
                  </option>
                ))}
                <option></option>
              </select>
            </Grid>
            
              <h4>Price: {pizza.prices[0][varient]*quantity} /-</h4>
          
          </Grid>
        </CardContent>
        <CardActions>
          
          <Button size="small" varient="contained">Add to Cart</Button>
          {/* <Buttonfunc><Typography><h3>Add to Cart</h3></Typography></Buttonfunc> */}
          
          {/* <Button size="small">Quantity</Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Pizza;
