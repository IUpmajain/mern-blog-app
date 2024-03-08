import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from '@mui/material'

const Navbar = () => {

  const [value, setValue]=useState();

  return (
    <>
     <AppBar position="fixed">
      <Toolbar>
        <Typography variant='h4'>
            MY BLOG APP
        </Typography>
        <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
          {/* <Button variant='contained'>Login</Button> */}
          <Tabs textColor='inherit' value={1} onChange={(e, val)=>setValue(val)}>
            <Tab label="All Blogs" LinkComponent={Link} to="/blogs" />
            <Tab label="create Blogs" LinkComponent={Link} to="/createblogs"/>
          </Tabs>
        </Box>
      </Toolbar>
      </AppBar> 
    </>
  )
}

export default Navbar
