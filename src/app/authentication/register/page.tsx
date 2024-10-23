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

    // Add validation for password matching
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle registration logic here (e.g., API call)
    console.log({ firstName, lastName, email, password });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#ffff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "400px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: 2, md: 4 },
        }}
      > <Box width={{ xs: "100%", md: "400px" }} textAlign={"center"}>
      <Box
        sx={{
          mt: 10,
          display: { xs: "block", md: "block" },
          height: { xs: 65, md: 90 },
          width: { xs: 75, md: 110 },
          m: "auto",
        }}
      >
        <Image
          alt="Smart Guard"
          src={SgLogo}
          style={{ width: "100%", height: "100%", marginBottom: 3 }}
        />
      </Box>
      </Box>
        <Typography variant="h5" gutterBottom mb={3} color="black" my={4}>
          Create an Account
        </Typography>

        <form onSubmit={handleSubmit} noValidate autoComplete="off" style={{ width: "100%" }}>
          <TextField
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ marginBottom: 2, width: "100%" }}
            required
          />
          <TextField
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ marginBottom: 2, width: "100%" }}
            required
          />
          <TextField
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: 2, width: "100%" }}
            required
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2, width: "100%" }}
            required
            InputProps={{
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
            }}
          />
          <TextField
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ marginBottom: 2, width: "100%" }}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              color: "white",
              marginTop: 2,
              textTransform: "none",
              width: "100%",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
            type="submit"
          >
            Register
          </Button>
        </form>

        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <Link href="./login" passHref>
            <Button sx={{ textTransform: 'none' }}>
              Already have an account? Log in
            </Button>
          </Link>
        </Box>

        <Box
          sx={{ alignSelf: "center", mt: "auto", marginTop: 2 }}
        >
          <Link
            href="./privacy"
            passHref
            style={{ width: "fit-content", margin: "auto" }}
          >
            <Button sx={{ textTransform: "none", width: "200px" }}>
              Privacy Policy
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default AppRegister;
