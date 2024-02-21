import React from 'react'
import Layout from '../Components/Layout/Layout'
import { MenuList } from '../data/data'
import { Card, CardActionArea, CardMedia ,Box, CardContent, Typography} from '@mui/material'

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {
          MenuList.map(menu=>
            <Card sx={{maxWidth:'390px', display:'flex',m:2}}>
              <CardActionArea>
                <CardMedia  sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name}/>
                <CardContent>
                  <Box sx={{display:'flex', justifyContent:'space-between'}}>
                  <Typography variant='h5' gutterBottom component={'div'} >
                    {menu.name}  
                  </Typography>
                  <Typography variant='h6' gutterBottom component={'div'}>
                  ₹{menu.price}
                  </Typography>
                  </Box>
                  <Typography variant='body2' >
                    {menu.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            )
        }
      </Box>
    </Layout>
  )
}

export default Menu