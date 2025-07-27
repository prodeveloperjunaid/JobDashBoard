import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const CalendarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 350, // Reduced from 450
  marginLeft: 10,
  "& .MuiDateCalendar-root": {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    border: `1px solid ${theme.palette.divider}`, 
    boxShadow: theme.shadows[1],      
    width: "100%",
    height: 290, // Added fixed height
  },
  "& .MuiPickersCalendarHeader-root": {
    marginTop: theme.spacing(1), // Reduced spacing
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  "& .MuiPickersDay-root": {
    borderRadius: theme.shape.borderRadius,
    fontSize: "0.85rem", // Reduced font size
    width: 28, // Reduced day cell size
    height: 28,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    "&.Mui-disabled": {
      color: theme.palette.text.disabled,
    },
  },
  "& .MuiDayCalendar-weekDayLabel": {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: "0.85rem", // Reduced font size
    width: 28, // Reduced day cell size
    height: 28,
  },
  "& .MuiPickersArrowSwitcher-button": {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  "& .MuiPickersCalendarHeader-label": {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: "1rem", // Reduced font size
  },
  "& .MuiPickersDay-today": {
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: "transparent",
  },
  "& .MuiDayCalendar-header": {
    justifyContent: "space-around",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  "& .MuiDayCalendar-weekContainer": {
    justifyContent: "space-around",
    margin: theme.spacing(0.5, 0),
  },
}));

export default function Calendar() {
  const [value, setValue] = React.useState(() => dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarContainer>
        <DateCalendar
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </CalendarContainer>
    </LocalizationProvider>
  );
}