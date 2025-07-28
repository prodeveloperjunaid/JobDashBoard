import React, { useState } from "react";
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
  Alert,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError("");
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        
        // Find user
        const user = users.find(
          (user) => user.email === values.email && user.password === values.password
        );

        if (user) {
          // Store user data and auth status
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("currentUser", JSON.stringify(user));
          navigate("/dashboard");
        } else {
          setError("Invalid email or password");
        }
      } catch {
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box sx={{ flexGrow: 1, height: "100vh", display: "flex" }}>
      <Grid container width={"100%"} height="100vh">
        {/* Left side - Login Form */}
        <Grid
          item
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

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                margin="normal"
                id="email"
                label="Email address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
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
                disabled={loading}
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
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Sign In"
                )}
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
          item
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
              padding: 1,
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