"use client"; // This makes the component a Client Component

import React from 'react';
import { Typography, List, ListItem, ListItemText, Container, Button, Box } from '@mui/material';
import SgLogo from "../../../assets/img/sg-logo.png";
import Image from "next/image";
import './Privacy.css'; // Link to your CSS file
import Link from 'next/link';


function PrivacyPolicy () {
 
  return (
    <Container maxWidth="md" className="privacy-policy-container">
      <Box sx={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
        <Image
          alt="Smart Guard"
          src={SgLogo}
          className="logo"
        />
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'white' }}>
          Privacy Policy for Smart Guard
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ color: 'white' }}>
          <strong>Effective Date:</strong> [2024]
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom my={2} >
        Introduction
      </Typography>
      <hr />
      <Typography variant='body1'>
        Welcome to Smart Guard! Your privacy is essential to us, and we are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard the information we gather from you when you use our mobile application. By using Smart Guard, you consent to the practices described in this policy.
      </Typography>
        <hr />
      <Typography variant="h5" gutterBottom>
        Information We Collect
      </Typography>
        <hr color='black'/>
      <Typography variant="h6" gutterBottom>
        1. Personal Information
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Name: The name you provide during registration." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email Address: Used for account verification, communication, and support." />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        2. Device Information
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="IMEI Number: A unique identifier for your device that helps us prevent fraud and manage device-specific settings." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Device Model: The model of your smartphone to ensure compatibility with our app features." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Operating System Version: The version of the operating system running on your device for optimal performance and troubleshooting." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Battery Status: Information about your device's battery level and health to provide power-saving recommendations and alerts." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Storage Capacity: Available storage space on your device to optimize app performance and functionality." />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        3. Usage Data
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Log Data: Information such as your IP address, browser type, operating system, the pages of our app that you visit, the time and date of your visit, and the time spent on those pages." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Crash Reports: Information about any crashes or errors encountered while using the app, which helps us improve functionality and user experience." />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        4. Location Information
      </Typography>
      <Typography variant='body1'>
        If you grant permission, we may collect information about your location to provide location-based services and features.
      </Typography>
    <hr />
      <Typography variant="h5" gutterBottom py={2}>
        How We Use Your Information
      </Typography>
      <Typography variant='h6'>
        Smart Guard uses the information we collect for various purposes, including:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="To Provide and Maintain Our Services: We use your personal and device information to deliver our app’s functionality and ensure a seamless experience." />
        </ListItem>
        <ListItem>
          <ListItemText primary="To Improve Our App: Analyzing usage data helps us understand how users interact with Smart Guard, enabling us to enhance features and fix bugs." />
        </ListItem>
        <ListItem>
          <ListItemText primary="To Communicate with You: We may use your email address to send important updates, newsletters, and promotional content." />
        </ListItem>
        <ListItem>
          <ListItemText primary="To Prevent Fraud: The IMEI number and other device information help us detect and prevent unauthorized access and fraudulent activities." />
        </ListItem>
      </List>

      <Typography variant="h4" gutterBottom>
        Legal Basis for Processing
      </Typography>
      <hr />
      <Typography variant="h5" gutterBottom>
        We will process your personal data based on the following legal grounds:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Consent: We may process your information if you have given us clear consent to do so for a specific purpose." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Performance of a Contract: Processing your information is necessary for the performance of a contract with you or to take steps at your request before entering into a contract." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Legitimate Interests: We may process your information when it is reasonably necessary to achieve our legitimate business interests." />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom>
        Data Sharing
      </Typography>
      <Typography paragraph>
        We do not sell or rent your personal information to third parties. However, we may share your information with:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Service Providers: Third-party companies that assist us in operating our app, providing services, or conducting our business (e.g., cloud storage providers, analytics services). These parties are obligated to keep your information confidential and use it only for the purposes we specify." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Compliance with Law: We may disclose your information when required by law or to protect our rights, privacy, safety, or property, or that of others." />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom>
        Data Security
      </Typography>
      <Typography paragraph>
        We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and access controls. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
      </Typography>

      <Typography variant="h5" gutterBottom>
        User Rights
      </Typography>
      <Typography paragraph>
        Depending on your location, you may have the following rights regarding your personal data:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="The Right to Access: You have the right to request copies of your personal data." />
        </ListItem>
        <ListItem>
          <ListItemText primary="The Right to Rectification: You have the right to request that we correct any information you believe is inaccurate or incomplete." />
        </ListItem>
        <ListItem>
          <ListItemText primary="The Right to Erasure: You have the right to request that we erase your personal data under certain conditions." />
        </ListItem>
        <ListItem>
          <ListItemText primary="The Right to Object: You have the right to object to our processing of your personal data under certain conditions." />
        </ListItem>
        <ListItem>
          <ListItemText primary="The Right to Data Portability: You have the right to request that we transfer the data that we have collected to another organization or directly to you, under certain conditions." />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom>
        Cookies and Tracking Technologies
      </Typography>
      <Typography paragraph>
        Smart Guard may use cookies and similar tracking technologies to enhance your experience. Cookies are small files that are placed on your device. You can choose to accept or decline cookies through your device settings. However, declining cookies may prevent you from taking full advantage of the app.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Changes to This Privacy Policy
      </Typography>
      <Typography paragraph>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <Typography paragraph>
        If you have any questions about this Privacy Policy, please contact us:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Email: support@smartguard.com" />
        </ListItem>
      </List>
          <Link href={"./login"}>
          <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000000",
                  color: "white",
                  marginTop: 2,
               justifyContent: 'center',
                  textTransform: "none",
                  width: "30%",
                  "&:hover": {
                    backgroundColor: "#333333"},
                }}
                type="submit"
              >
                Log in
              </Button>
              </Link>
    </Container>
  );
};

export default PrivacyPolicy;
