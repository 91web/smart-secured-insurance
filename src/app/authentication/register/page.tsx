"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import Image from "next/image";
import SgLogo from "../../../assets/img/sg-logo.png";
import SafeLogo from "../../../assets/img/Sg-image.jpg";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";

function AppRegister() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ firstName, lastName, email, password });
  };

  return (
    <Grid
      container
      spacing={4}
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Image Section */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <CardMedia
          component="img"
          image={SafeLogo.src}
          alt="Register Image"
          sx={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            opacity: 0.5,
          }}
        />
      </Grid>

      {/* Form Section */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 2, md: 4 },
          py: 4,
        }}
      >
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Box
            sx={{
              display: "inline-block",
              width: { xs: 75, md: 100 },
              // mb: 2,
            }}
          >
            <Image
              alt="Smart Guard"
              src={SgLogo}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Typography variant="h5" gutterBottom color="black">
            Create an Account
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ width: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirm password visibility"
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#000000",
              color: "white",
              mt: 2,
              textTransform: "none",
              width: "100%",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            Register
          </Button>
        </Box>

        {/* Additional Links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 2,
            width: "100%",
          }}
        >
          <Link href="./login" passHref>
            <Button sx={{ textTransform: "none", mb: { xs: 1, md: 0 } }}>
              Back to Login
            </Button>
          </Link>
          <Link href="./register" passHref>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 0.5, md: 1 },
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                I have an account?
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  height: 30,
                  width: { xs: "120px", md: "150px" },
                  fontSize: { xs: "10px", md: "16px" },
                }}
              >
                Forgot Password
              </Button>
            </Box>
          </Link>
          <Link href="./privacy" passHref style={{ width: "fit-content" }}>
            <Button
              sx={{
                textTransform: "none",
                width: { xs: "120px", md: "120px" },
              }}
            >
              Privacy Policy
            </Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AppRegister;
