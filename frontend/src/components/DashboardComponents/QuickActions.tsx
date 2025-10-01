import { actions } from '@/utilities/constants';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const QuickActions = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography 
        variant="h6" 
        sx={{ 
          fontSize: '25px', 
          color: '#1D1D1D',
          mb: 2
        }}
      >
        Quick Actions
      </Typography>
      
      <Box sx={{ 
        display: 'flex',
        gap: 6          
      }}>
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              bgcolor: 'white',
              color: '#1D1D1D',
              borderRadius: '24px',
              px: 3,
              py: 1.25,
              fontSize: '14px',
              textTransform: 'none',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                bgcolor: '#f3f4f6',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            {action}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default QuickActions;