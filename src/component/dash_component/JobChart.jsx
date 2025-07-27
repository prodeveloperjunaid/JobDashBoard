import React from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material';

const JobChart = () => {
  const theme = useTheme();

  // Days of the week data
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Sample data
  const applications = [1250, 1450, 1100, 1350, 1650, 850, 650];
  const views = [3200, 3800, 3500, 4000, 4200, 2500, 1800];

  return (
    <Box sx={{ 
        width: '99%',
        p: 2,  // Reduced padding
        backgroundColor: theme.palette.background.paper,
        borderRadius: 3,
        boxShadow: theme.shadows[1]
    }}>
        <Typography variant="h6" gutterBottom sx={{ 
            color: theme.palette.text.primary,
            fontWeight: 600,
            mb: 1  // Reduced margin bottom
        }}>
            Job Stats
        </Typography>
        
        <BarChart
            height={190}  // Reduced height
            margin={{ top: 20, bottom: 30, left: 40, right: 10 }}  // Adjusted margins
            series={[
                { 
                    data: applications, 
                    label: 'Job Applied', 
                    color: theme.palette.primary.main,
                    type: 'bar',
                    yAxisKey: 'leftAxis',
                },
                { 
                    data: views, 
                    label: 'Job Views', 
                    color: theme.palette.secondary.main,
                    type: 'bar',
                    yAxisKey: 'leftAxis',
                }
            ]}
            xAxis={[
                { 
                    scaleType: 'band', 
                    data: days,
                    categoryGapRatio: 0.4,
                    barGapRatio: 0.1,
                }
            ]}
            yAxis={[
                {
                    id: 'leftAxis',
                    valueFormatter: (value) => `${value >= 1000 ? `${value/1000}k` : value}`,
                    tickMinStep: 1000,
                    min: 0,
                    max: Math.max(...views) + 1000,
                }
            ]}
            slotProps={{
                legend: {
                    labelStyle: {
                        fontSize: '0.75rem',  // Smaller legend text
                        fill: theme.palette.text.primary,
                    },
                    itemMark: {
                        borderRadius: 2,
                        width: 12,  // Smaller legend markers
                        height: 12,
                    },
                    position: {
                        vertical: 'top',
                        horizontal: 'right'
                    },
                    padding: { top: 0 }
                },
                bar: {
                    clipPath: `inset(0 round 15px 15px 0 0)`,  // Smaller rounded corners
                },
                tooltip: {
                    arrow: true,
                    arrowSize: 6,  // Smaller tooltip arrow
                }
            }}
            sx={{
                '& .MuiBarElement-root': {
                    clipPath: `inset(0 round 15px 15px 0 0)`,  // Smaller rounded corners
                },
                '& .MuiChartsAxis-tickLabel': {
                    fontSize: '0.65rem',  // Smaller axis labels
                    fontWeight: 500,
                },
                '& .MuiChartsAxis-label': {
                    fontSize: '0.7rem',  // Smaller axis title
                },
            }}
        />
    </Box>
  );
};

export default JobChart;