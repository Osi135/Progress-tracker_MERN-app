import React from 'react';
import { Button } from '@mui/material';
import { NavbarWrap } from '../../wrapper';

const Home = () => {
  return (
    <div>
      <Button
        sx={{
          mt: {lg: '200px', xs: '20px'},
          ml: {lg: '200px', xs: '20px'},

        }}
      >Hello</Button>
    </div>

  )
}

export default NavbarWrap(Home)