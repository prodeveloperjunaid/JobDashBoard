import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Link,
  Checkbox,
  FormControlLabel,
  Avatar,
  Container,
  CssBaseline
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const SignUp = () => {
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ 
          m: 1,
          bgcolor: theme.palette.primary.main,
          width: 56,
          height: 56
        }}>
          <LockOutlinedIcon fontSize="medium" />
        </Avatar>
        
        <Typography component="h1" variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Sign up
        </Typography>
        
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item size={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                size="medium"
                sx={{ mb: 1 }}
              />
            </Grid>
            <Grid item size={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                size="medium"
                sx={{ mb: 1 }}
              />
            </Grid>
            <Grid item size={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size="medium"
                sx={{ mb: 1 }}
              />
            </Grid>
            <Grid item size={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                size="medium"
                sx={{ mb: 1 }}
              />
            </Grid>
           <Grid item xs={12} sx={{ mb: 2 }}>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Checkbox 
      value="allowExtraEmails" 
      color="primary"
      sx={{ 
        padding: 0,
        marginRight: 1,
        alignSelf: 'flex-start' 
      }}
    />
    <Typography variant='body1' color='palette.common.black'>
      I want to receive inspiration, marketing promotions and updates via email.
    </Typography>
  </Box>
</Grid>
          </Grid>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ 
              mb: 2,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '8px',
               '&:hover': {
                                backgroundColor: 'secondary.main',
                                color: 'white',
                            }
            }}
          >
            Sign Up
          </Button>
          
          <Grid container justifyContent="center">
            <Grid item>
              <Link variant="body1" underline="hover" sx={{ fontWeight: 500 }} component={RouterLink} to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;