import React from 'react';
import { Grid, Paper, TextField, Typography,Box,Avatar, Button } from '@mui/material'
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () => {
  return (
    <Grid maxHeight='auto' maxWidth='auto'>
       <h1 align ='center'><i><strong>Contact Us</strong></i></h1>
     <Paper
        sx={{
          maxWidth: 900,
          mx: "auto", // margin left & right
          my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "row",
          // gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
         backgroundColor:'rgba(52, 52, 52, 0.8)'
          // backgroundImage:'https://www.travelandleisure.com/thmb/z58cxJrR_0MJRq2cePrO9KUnF9g=/1200x1200/smart/filters:no_upscale()/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg',
        }
    } item xs={2} sm={12} xl={2} md={2}
      >
       
        <Grid item xs={6}>
        <Paper
        sx={{
          width: 400,
          mx: 2, // margin left & right
          my: 3, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          // gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }} xs={6} sm={12} xl={2} md={2}
      >
        <h2>Contact Info</h2>
        <Grid item xs={6} md={8}>
          
          <PhoneEnabledOutlinedIcon/>
            
          <Typography margin={1}>Telephone: +00-123456789</Typography>
        </Grid>
        <Grid>
          <EmailIcon/>
        <Typography margin={1}>Email:xyz@company.com</Typography>
        </Grid>
        <Grid>
          <BusinessIcon/>
          <Typography margin={1}>
            XYZ Avenue, CPZ Plaza, ABCDBAD Road, Lorempore, PQ- 0000000
          </Typography>
          <Grid marginTop={4} sx={{display: "flex",
          flexDirection: "row",gap:3}}>
          <FacebookSharpIcon/>
            <GoogleIcon/>
            <YouTubeIcon/>
          </Grid>
        </Grid>
        </Paper>
        </Grid>
      <Grid item xs={6} sm={12} xl={2} md={2}>
      <Paper  sx={{
          width: 400,
          height:360,
          mx: 2, // margin left & right
          // marginLeft:10,
          // marginTop:10,
          my: 3, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 1,
          borderRadius: "sm",
          boxShadow: "md",
        }} xs={6}>
        <TextField id="standard-basic" label="First Name" variant="standard" required>First Name</TextField>
        <TextField id="standard-basic" label="Last Name" variant="standard" fullWidth required>Last Name</TextField>
        <TextField id="standard-basic" label="Mobile" variant="standard" fullWidth required></TextField>
        <TextField id="standard-basic" label="Email" variant="standard" fullWidth required>Email</TextField>
        <TextField id="standard-basic" label="Write Your Message" variant="standard" fullWidth>Message</TextField>
        <Button variant='contained'>Sent!</Button>
        {/* <Box id="standard-basic" label="Standard" variant="standard">Message</Box> */}
        </Paper>
      </Grid>
      </Paper>
    </Grid>
  )
}

export default Contact