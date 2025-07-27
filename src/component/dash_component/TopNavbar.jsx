import { 
  AppBar,
  Toolbar,
  Button,
  IconButton,
  InputBase,
  Box,
  Badge,
  Avatar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Search, Notifications, PostAdd } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 30,
  border: '1px solid #ccc',
  backgroundColor: alpha(theme.palette.common.white, 1),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    maxWidth: 400,
  },
   [theme.breakpoints.up('xs')]: {
    maxWidth: 220,
    left: 50,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

const TopNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar position="static" elevation={0} sx={{ 
      backgroundColor: 'primary.main',
      color: 'text.primary',
      borderBottom: '1px solid',
      borderColor: 'divider',
    }}>
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        position: 'relative',
        gap: 1,
        px: 2
      }}>
        <Typography 
          variant="h5" 
          component="div" 
          sx={{ 
            fontWeight: 600,
            color: 'common.white',
            display: { xs: 'none', sm: 'block' }
          }}
        >
          Junaid Tech
        </Typography>
    
        {/* Search bar - position changes based on screen size */}
        {isMobile ? (
          <Box sx={{ flexGrow: 1, maxWidth: 350 }}>
            <SearchBar>
              <SearchIconWrapper>
                <Search />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </SearchBar>
          </Box>
        ) : (
          <Box sx={{ 
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}>
            <SearchBar>
              <SearchIconWrapper>
                <Search />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </SearchBar>
          </Box>
        )}

        {/* Right side actions - adjust for mobile */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 1,
          ml: 'auto'
        }}>
          {!isMobile && (
            <Button 
              startIcon={<PostAdd />}
              sx={(theme) => ({
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.common.white,
                textTransform: 'none',
                borderRadius: 30,
                px: 3,
                whiteSpace: 'nowrap',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.common.white,
                }
              })}
            >
              Post Job
            </Button>
          )}

          <IconButton sx={{
            color: 'common.white',
            '&:hover': {
              color: 'secondary.main', 
            }
          }}>
            <Badge badgeContent={3} color="error">
              <Notifications />
            </Badge>
          </IconButton>

          <Avatar 
            sx={{ 
              width: 36,
              color: 'primary.main',
              height: 36,
              bgcolor: 'common.white',
              cursor: 'pointer'
            }}
          >
            A
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;