import { Grid,Paper } from "@mui/material";
import React from "react";


const Home = ()=>{
    return(
        
            <Grid container align="center" sx={{flex:"row", backgroundColor:"pink"}} >
                 <Paper
        sx={{
          maxWidth: 900,
          mx: "auto", // margin left & right
          my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          // gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
         backgroundColor:'rgba(52, 52, 52, 0.8)'
          // backgroundImage:'https://www.travelandleisure.com/thmb/z58cxJrR_0MJRq2cePrO9KUnF9g=/1200x1200/smart/filters:no_upscale()/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg',
        }
    } item xs={2} sm={12} xl={2} md={2}
      >
         <Grid>
               <h3>Welcome to Employee Portal Management. </h3>
                {/* <h3>Kindly Login To Continue.</h3> */}
               </Grid>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVW0X9BtBI18G1sgEXY-ePQwEOEDUX5c3bcQ6NG17rAgI3Qwe3BEeXpdODY4B4J3OZvNs&usqp=CAU"/>
              
            

      </Paper>
      </Grid>
            
    );
}

export {Home};