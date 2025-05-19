"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import SgLogo from "../../../assets/img/sg-logo.png";

function ForgotPassword() {
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
      {/* Form Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: 2, md: 4 },
          height: "100%",
        }}
        position={"relative"}
      >
        <Box width={{ xs: "100%", md: "400px" }} textAlign={"center"}>
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
          <Typography variant="h5" gutterBottom mb={3} color="black" my={4}>
            Forgot Your Password?
          </Typography>

          <TextField
            label="Email Address"
            variant="outlined"
            sx={{ marginBottom: 2, width: "100%" }}
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
            Send Reset Link
          </Button>
        </Box>

        {/* Additional Links */}
        <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
          <Link href="./login" passHref>
            <Button sx={{ textTransform: "none" }}>Back to Login</Button>
          </Link>
          <Link href="./register" passHref>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Don&apos;t have an account?
              </Typography>
              <Button
                variant="outlined"
                sx={{ textTransform: "none", height: 30 }}
              >
                Register
              </Button>
            </Box>
          </Link>
        </Box>

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
  );
}

export default ForgotPassword;