import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Stack,
  useTheme 
} from '@mui/material';
import { 
  DesignServices as DesignIcon,
  Code as ReactIcon,
  Pause as OnHoldIcon,
  CheckCircle as ReceivedIcon,
  Cancel as RejectedIcon
} from '@mui/icons-material';

export const Application = () => {
  const theme = useTheme();

  const statusData = [
    {
      title: "Design",
      icon: <DesignIcon color="primary" fontSize="small" />,
      counts: [
        { type: "Received", value: 5, icon: <ReceivedIcon />, color: "success" },
        { type: "On hold", value: 1, icon: <OnHoldIcon />, color: "warning" },
        { type: "Rejected", value: 3, icon: <RejectedIcon />, color: "error" }
      ]
    },
    {
      title: "React JS",
      icon: <ReactIcon color="primary" fontSize="small" />,
      counts: [
        { type: "Received", value: 25, icon: <ReceivedIcon />, color: "success" },
        { type: "On hold", value: 3, icon: <OnHoldIcon />, color: "warning" },
        { type: "Rejected", value: 4, icon: <RejectedIcon />, color: "error" }
      ]
    }
  ];

  return (
   <Paper
  elevation={0}
  sx={{
    p: 2.5,
    borderRadius: 4,
    bgcolor: 'background.paper',
    border: `1px solid ${theme.palette.divider}`,
    maxWidth: { xs: '100%', md: 1000 }, // Responsive max-width
    width: '98%',
    boxSizing: 'border-box' // Ensure padding is included in width
  }}
>
  <Typography 
    variant="h6" 
    fontWeight={600}
    sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}
  >
    Application Status
  </Typography>

  <Stack spacing={3}>
    {statusData.map((item, index) => (
      <Box key={index}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          {item.icon}
          <Typography variant="subtitle1" fontWeight={600}>
            {item.title}
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          flexWrap: 'wrap',
          // Add responsive behavior for the status items
          '& > *': {
            flexGrow: 1,
            minWidth: { xs: '100%', sm: 'calc(50% - 16px)', md: 'auto' }
          }
        }}>
          {item.counts.map((status, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: 3,
                bgcolor: `${theme.palette[status.color].light}20`,
                border: `1px solid ${theme.palette[status.color].light}30`,
                // Make status items grow proportionally but not too wide
                flexBasis: { xs: '100%', sm: 'calc(50% - 16px)', md: 'auto' }
              }}
            >
              <Box color={`${status.color}.main`}>
                {status.icon}
              </Box>
              <Typography variant="body2" fontWeight={600}>
                {status.value} {status.type}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    ))}
  </Stack>
</Paper>
  );
};