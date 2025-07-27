import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  InputAdornment,
  IconButton,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box sx={{ flexGrow: 1, height: "100vh", display: "flex" }}>
      <Grid container width={"100%"} height="100vh">
        {/* Left side - Login Form */}
        <Grid
          size={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            backgroundColor: "#ffffff",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 450,
              mx: 14,
              py: 6,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 1,
                fontWeight: 700,
                color:
                  theme.palette.mode === "dark"
                    ? "primary.light"
                    : "primary.main",
              }}
            >
              Welcome back
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: "text.secondary",
              }}
            >
              Sign in to continue to your account
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                margin="normal"
                id="email"
                label="Email address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                margin="normal"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  my: 2,
                }}
              >
                <Link href="#" variant="body2" underline="hover">
                  Forgot password?
                </Link>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  py: 1.5,
                  borderRadius: 1,
                  fontSize: "1rem",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Sign In
              </Button>
              <Typography
                variant="body2"
                sx={{
                  mt: 3,
                  mb: 1,
                  color: "text.secondary",
                }}
              >
                Don't have an account?{" "}
                <Link
                  underline="hover"
                  sx={{ fontWeight: 600 }}
                  component={RouterLink}
                  to="/signup"
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Right side - Image */}
        <Grid
          size={6}
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="./images/login.webp"
            alt="Login Visual"
            bgcolor={theme.palette.common.white}
            sx={{
              padding:1,
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              borderRadius: 6,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
