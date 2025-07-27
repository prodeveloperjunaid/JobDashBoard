import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ScheduleIcon from "@mui/icons-material/Schedule";
import WorkIcon from "@mui/icons-material/Work";
import { green, orange, blue } from "@mui/material/colors";

export default function ListInterview() {
  // Sample interview data
  const interviews = [
    {
      id: 1,
      candidate: "Ali Khan",
      position: "Frontend Developer",
      avatar: "/static/images/avatar/1.jpg",
      datetime: "2023-06-15T14:30:00",
      status: "Scheduled",
    },
    {
      id: 2,
      candidate: "Sana Ahmed",
      position: "UX Designer",
      avatar: "/static/images/avatar/2.jpg",
      datetime: "2023-06-16T11:00:00",
      status: "Completed",
    },
    {
      id: 3,
      candidate: "Omar Farooq",
      position: "Backend Developer",
      avatar: "/static/images/avatar/3.jpg",
      datetime: "2023-06-17T09:00:00",
      status: "Pending",
    },
  
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Scheduled":
        return green[500];
      case "Completed":
        return blue[500];
      case "Pending":
        return orange[500];
      default:
        return "text.secondary";
    }
  };

  return (
    <List
      sx={{
        width: "100%",
        ml: 1,
        maxWidth: 449,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        padding: 1,
      }}
    >
      <Typography variant="h6" sx={{ p: 2, fontWeight: "bold" }}>
        Interviews
      </Typography>
      {interviews.map((interview, index) => (
        <React.Fragment key={interview.id}>
          <ListItem alignItems="flex-start" >
            <ListItemAvatar>
              <Avatar alt={interview.candidate} src={interview.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontWeight="bold">
                  {interview.candidate}
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                    <WorkIcon
                      sx={{ fontSize: 14, mr: 0.5, color: "action.active" }}
                    />
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", mr: 2 }}
                    >
                      {interview.position}
                    </Typography>

                    <Box
                      sx={{
                        backgroundColor: getStatusColor(interview.status),
                        color: "white",
                        px: 1,
                        borderRadius: 1,
                        fontSize: "0.75rem",
                      }}
                    >
                      {interview.status}
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                    <ScheduleIcon
                      sx={{ fontSize: 14, mr: 0.5, color: "action.active" }}
                    />
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {new Date(interview.datetime).toLocaleString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Typography>
                  </Box>
                </React.Fragment>
              }
            />
          </ListItem>
          {index < interviews.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
