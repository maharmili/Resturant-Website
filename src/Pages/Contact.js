import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Typography ,Box, TableContainer, Paper, TableHead, TableRow, TableCell,Table, TableBody} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:5, "& h4" : { fontWeight:"bold", mb:2}}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>
        We'd love to hear from you! Whether you have a question, a special request, or 
        just want to say hello, feel free to reach out to us. You can contact us by phone, email, or 
        through the contact form below. Our team is here to assist you and will get back to you as soon as possible. 
        Thank you for choosing my resturant. We look forward to connecting with you!....
        </p>
     </Box>
     <Box sx={{m:3, width:'600px',ml:10, "@media (max-width:600px)": {
      width:'300px',
      }}} >
      <TableContainer component={Paper} >
        <Table aria-label="contact table">
        <TableHead>
          <TableRow>
            <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>
              Contact Details
            </TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
      <TableRow>
      <TableCell>
       <SupportAgentIcon sx={{color:'red',pt:1}} />1800-00-0000(tollfree)
     </TableCell>
    </TableRow>
     <TableRow>
    <TableCell>
    <MailIcon sx={{color:'skyblue',pt:1}} /> help@myrest.com
    </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>
    <CallIcon sx={{color:'green',pt:1}} />1234567891
    </TableCell>
  </TableRow>
</TableBody>
        </Table>
        </TableContainer>
    </Box>
     </Layout>
  )
}

export default Contact