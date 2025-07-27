import * as React from 'react';
import { PieChart as MuiPieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material/styles';
import { Paper, Box, Typography } from '@mui/material';

const employeeData = [
  { id: 0, value: 50, label: 'Present', color: '#7B2CBF' },
  { id: 1, value: 20, label: 'Remote', color: '#FFD166' },
  { id: 2, value: 10, label: 'Absent', color: '#EF476F' },
];

const totalEmployees = 256;

export const PieChart = () => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 4,
        bgcolor: 'background.paper',
        border: `1px solid ${theme.palette.divider}`,
        maxWidth: 340,
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        height: 285,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <MuiPieChart
        series={[
          {
            data: employeeData,
            arcLabel: (item) => `${item.value} (${Math.round((item.value / totalEmployees) * 100)}%)`,
            arcLabelMinAngle: 20,
            arcLabelRadius: '65%',
            innerRadius: '40%',
            cornerRadius: 7,
            paddingAngle: 1,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: 'bold',
            fill: theme.palette.common.white,
            fontSize: 12,
          },
        }}
        width={250}
        height={250}
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'middle' },
            padding: { top: 10 },
            labelStyle: {
              fontFamily: theme.typography.fontFamily,
              fontSize: 14,
              fontWeight: 500,
              fill: theme.palette.text.primary,
            },
            itemMark: {
              borderRadius: '4px',
              width: '20px',
              height: '20px',
            },
          },
        }}
      />
      {/* Center label showing total */}
      <Box
        sx={{
          position: 'absolute',
          top: '42%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" fontWeight="bold" color={theme.palette.text.primary}>
          {totalEmployees}
        </Typography>
        <Typography variant="caption" color={theme.palette.text.secondary} sx={{
            fontWeight: 'bold',
        }}>
          Total Emp
        </Typography>
      </Box>
    </Paper>
  );
};