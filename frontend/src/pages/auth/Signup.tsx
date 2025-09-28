import React from 'react'
import AuthBanner from '@/components/SignupComponents/AuthBanner'
import RightSide from '@/components/SignupComponents/RightSide';
import Box from '@mui/material/Box';

const Signup: React.FC = () => {
  console.log("Signup page rendered");
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AuthBanner />
      <RightSide />
    </Box>
  )
}

export default Signup