import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const Cards = () => {
  const theme = useTheme();

  return (
    <Card 
      sx={{ 
        minWidth: 320,
        maxWidth: 340,
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 16px rgba(123, 44, 191, 0.2)',
        },
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
      }}
    >
      <CardContent sx={{ padding: '20px !important' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={2}>
            {/* Icon with gradient background */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #7B2CBF 0%, #9D4EDD 100%)',
                borderRadius: '12px',
                padding: '12px',
                color: 'white',
              }}
            >
              <PeopleAltIcon fontSize="medium" />
            </Box>
            
            {/* Text content */}
            <Box>
              <Typography 
                variant="subtitle3" 
                color={theme.palette.text.secondary}
                sx={{ fontWeight: 500 }}
              >
                Interview
              </Typography>
              <Typography 
                variant="h6" 
                color={theme.palette.text.primary}
                sx={{ fontWeight: 700 }}
              >
                256,204
              </Typography>
            </Box>
          </Box>

          {/* Growth indicator with icon - now aligned to right */}
          <Box
            sx={{
              color: theme.palette.success.main,
              backgroundColor: 'rgba(6, 214, 160, 0.1)',
              padding: '2px 10px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <TrendingUpIcon fontSize="small" />
            <Typography variant="caption" fontWeight={500}>
              20% Growth
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};