import UserDetailsCard from '@/components/DashboardComponents/UserDetailsCard';
import React from 'react'
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'
import QuickActions from '@/components/DashboardComponents/QuickActions';

const Dashboard = () => {
  console.log("Dashboard rendered");
  return (
    <Box sx={{paddingRight: "2rem", paddingLeft: "2rem", paddingTop: 5}}>
      <Typography variant="h5" color="primary.light" fontWeight="bold" sx={{pb: 2}}>Dashboard</Typography>
      <UserDetailsCard />
      <QuickActions />
    </Box>
  )
}

export default Dashboard