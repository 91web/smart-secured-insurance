"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
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

function AppLogin() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
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
      {/* Form and Image Split */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          height: "100%",
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "100vh",
            display: { xs: "none", md: "block" },
            // backgroundImage: "url('/static/images/sh.png')",
          }}
        >
          <CardMedia
            component="img"
            image={SafeLogo.src}
            alt="Login"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity:0.5
            }}
          />
        </Box>

        {/* Form Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "#EBEBEB",
            padding: { xs: 2, md: 4 },
            height: "100%",
          }}
          position={"relative"}
        >
          <Box width={{ xs: "100%", md: "400px" }} textAlign={"center"}>
            <form action="submit" noValidate autoComplete="off">
              <Box
                sx={{
                  mt: 20,
                  display: { xs: "100", md: "block" },
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
              <Typography variant="h5" gutterBottom mb={3} color="black" my={4}>
                Welcome back! Log in.
              </Typography>

              <TextField
                label="Email Address"
                variant="outlined"
                sx={{ marginBottom: 2, width: "100%" }}
              />
              
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                sx={{ marginBottom: 2, width: "100%" }}
                slotProps={{
                  input:{
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

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000000",
                  color: "white",
                  marginTop: 2,
                  textTransform: "none",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "#333333"},
                }}
                type="submit"
              >
                Log in
              </Button>
            </form>
          </Box>

          {/* Forgot Password link */}
          {/* <CardActions> */}
          <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <Link href="./reset-password" passHref>
            <Button sx={{ textTransform: 'none' }}>
              Forgot Password?
            </Button>
          </Link>
          <Link href="./register" passHref>
            <Button variant="outlined" sx={{ textTransform: 'none' }}>
              Register
            </Button>
          </Link>
        </Box>
          {/* </CardActions> */}

          {/* Privacy Policy link at the bottom */}
          <Box
            sx={{ alignSelf: "center", mt: "auto" }}
            position={"absolute"}
            bottom={0}
            py={5}
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
    </Box>
  );
}

export default AppLogin;
