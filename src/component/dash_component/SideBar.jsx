import React, { useState } from 'react';
import {
  Button,
  Box,
  IconButton,
  Drawer,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Menu,
  Close,
  Dashboard,
  Inbox,
  Work,
  People,
  Description,
  CalendarToday,
  Settings,
  Help,
  ExitToApp
} from '@mui/icons-material';

// Styled Sidebar Container
const SidebarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  width: 250,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  [theme.breakpoints.down('sm')]: {
    height: '100vh'
  }
}));

const SidebarButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  color: theme.palette.text.primary,
  transition: 'all 0.2s ease',
  minWidth: 'auto',
  zIndex: 1,
  '&:hover': {
    backgroundColor: theme.palette.primary.light + '20',
    color: theme.palette.primary.main,
  },
}));

const LogoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.error.contrastText,
  borderRadius: 30,
  padding: theme.spacing(1.5),
  fontWeight: 700,
  fontSize: '1rem',
  textTransform: 'none',
  marginTop: '125px',
  boxShadow: theme.shadows[2],
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
    boxShadow: theme.shadows[4],
    transform: 'translateY(-2px)',
  },
}));

const SideBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Dashboard', Icon: Dashboard },
    { text: 'Inbox', Icon: Inbox },
    { text: 'Jobs', Icon: Work },
    { text: 'Candidates', Icon: People },
    { text: 'Resources', Icon: Description },
    { text: 'Calendar', Icon: CalendarToday },
    { text: 'Settings', Icon: Settings },
    { text: 'Support', Icon: Help },
  ];

  const SidebarContent = (
    <SidebarContainer>
      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          <IconButton onClick={toggleDrawer}>
            <Close />
          </IconButton>
        </Box>
      )}
      
      {menuItems.map((item, index) => (
        <SidebarButton key={index} startIcon={<item.Icon />}>
          {item.text}
        </SidebarButton>
      ))}

      <LogoutButton 
        variant="contained"
        startIcon={<ExitToApp />}
      >
        Logout
      </LogoutButton>
    </SidebarContainer>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            top: 10,
            left: 10,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[3],
            ':hover': {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.common.white,
            },
          }}
        >
          <Menu />
        </IconButton>
      )}

      {isMobile ? (
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={toggleDrawer}
          sx={{
            '& .MuiDrawer-paper': {
              width: 250,
            },
          }}
        >
          {SidebarContent}
        </Drawer>
      ) : (
        <Box sx={{ width: 250, position: 'sticky', top: 0 }}>{SidebarContent}</Box>
      )}
    </>
  );
};

export default SideBar;