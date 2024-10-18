// src/components/AppBar.tsx
"use client";
import React from "react";
import {
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
import JerseyLogo from "../../../assets/img/jerseyLogo.png"; // Adjust the path as needed
import Image from "next/image";

const AppBar: React.FC = () => {
  const router = useRouter(); // Initialize the router

  // Function to navigate to a specific route
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <MUIAppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        {/* Logo Section */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => handleNavigation("/")} // Navigate to home
        >
          <Image
            src={JerseyLogo.src} // Use your imported image variable
            alt="Logo"
            style={{ height: "40px", borderRadius: "8px" }} // Apply border radius
            width={100} // Set a width that maintains aspect ratio
            height={40} // Set a height
          />
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            sx={{ 
              color: "black", 
           textTransform:"none", // Disable transformations
              "&:hover": { transform: "none" }, // Prevent hover scaling
            }} 
            onClick={() => handleNavigation("/")}
          >
            Home
          </Button>
          <Button
            sx={{ 
              color: "black", 
              textTransform: "none", // Disable transformations
              "&:hover": { transform: "none" }, // Prevent hover scaling
            }} 
            onClick={() => handleNavigation("/web/dashboard")}
          >
            Dashboard
          </Button>
          <Button
            sx={{ 
              color: "black", 
              textTransform: "none", // Disable transformations
              "&:hover": { transform: "none" }, // Prevent hover scaling
            }} 
            onClick={() => handleNavigation("/web/product")}
          >
            Products
          </Button>
        </Box>

        {/* Authentication Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            sx={{ 
              color: "black", 
              textTransform: "none", // Disable transformations
              "&:hover": { transform: "none" }, // Prevent hover scaling
            }} 
            onClick={() => handleNavigation("/web/login")}
          >
            Login
          </Button>
          <Button
            sx={{ 
              color: "black", 
              textTransform: "none", // Disable transformations
              "&:hover": { transform: "none" }, // Prevent hover scaling
            }} 
            onClick={() => handleNavigation("/web/register")}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
