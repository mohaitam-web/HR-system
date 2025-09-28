import React from 'react'
import { Box } from '@mui/material'
import LeftSide from '@/components/LoginComponents/LeftSide'
import AuthBanner from '@/components/LoginComponents/AuthBanner'

const Login: React.FC = () => {
  console.log("login page rendered");
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}   
    >
      <LeftSide />
      <AuthBanner />
    </Box>
  )
}

export default Login