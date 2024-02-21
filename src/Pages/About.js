import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
 <Box sx={{
  my:15,
  textAlign:'center',
  p:2,
  "& h4":{
    fontWeight:'bold',
    my:2,
    fontSize:"2rem"
  },
  "& p":{
    textAlign:'justify'
  },
 "@media (max-width: 600px)" :{
  mt:0,
  "& h4" : {
    fontSize:'1.5rem'
  }
 }
}}>
  <Typography variant='h4'>Welcome To My Resturant</Typography>
  <p>
  Where we're passionate about good food and great company.
   Our goal is simple: to serve delicious meals made with love and care. 
   Each dish is crafted to perfection, using the finest ingredients to ensure 
   a dining experience that's both satisfying and memorable. Whether you're here for a casual meal or
    a special occasion, we're dedicated to providing you with exceptional service and a warm, inviting atmosphere. 
    Thank you for choosing my resturant. We can't wait to have you dine with us.
</p>
<br/>
<p>
We're all about community at my resturant. We love supporting local farmers and producers by using their fresh 
ingredients in our dishes. It's our way of giving back to the community and ensuring that our meals are not only delicious
 but also sustainable. Join us in supporting local and enjoy the best flavors our region has to offer.
</p>
 </Box>
    </Layout>
   )
}

export default About