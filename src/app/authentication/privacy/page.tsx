"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SgLogo from "../../../assets/img/sg-logo.png";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

function PrivacyPolicy() {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header Section */}
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "#000",
          color: theme.palette.primary.contrastText,
          p: 4,
          mb: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Image alt="Smart Guard" src={SgLogo} width={120} height={60} />
        </Box>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
          Last Updated: January 2025
        </Typography>
      </Paper>

      {/* Introduction */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: "#000" }}
        >
          Introduction
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          Welcome to Smart Guard! Your privacy is essential to us, and we are
          committed to protecting your personal information. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard the information
          we gather from you when you use our mobile application.
        </Typography>
        <Typography variant="body1" paragraph>
          By using Smart Guard, you consent to the practices described in this
          policy.
        </Typography>
      </Box>

      {/* Information We Collect */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: "#000" }}
        >
          Information We Collect
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Accordion elevation={2} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              1. Personal Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemText
                  primary="Name"
                  secondary="The name you provide during registration."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Email Address"
                  secondary="Used for account verification, communication, and support."
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={2} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              2. Device Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemText
                  primary="IMEI Number"
                  secondary="A unique identifier for your device that helps us prevent fraud and manage device-specific settings."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Device Model"
                  secondary="The model of your smartphone to ensure compatibility with our app features."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Operating System Version"
                  secondary="The version of the operating system running on your device for optimal performance and troubleshooting."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Battery Status"
                  secondary="Information about your device's battery level and health to provide power-saving recommendations and alerts."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Storage Capacity"
                  secondary="Available storage space on your device to optimize app performance and functionality."
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={2} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              3. Usage Data
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemText
                  primary="Log Data"
                  secondary="Information such as your IP address, browser type, operating system, the pages of our app that you visit, the time and date of your visit, and the time spent on those pages."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Crash Reports"
                  secondary="Information about any crashes or errors encountered while using the app, which helps us improve functionality and user experience."
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={2}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              4. Location Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              If you grant permission, we may collect information about your
              location to provide location-based services and features.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* How We Use Your Information */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: "#000" }}
        >
          How We Use Your Information
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1">
          Smart Guard uses the information we collect for various purposes,
          including:
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }} dense>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="To Provide and Maintain Our Services: We use your personal and device information to deliver our app's functionality and ensure a seamless experience." />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="To Improve Our App: Analyzing usage data helps us understand how users interact with Smart Guard, enabling us to enhance features and fix bugs." />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="To Communicate with You: We may use your email address to send important updates, newsletters, and promotional content." />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="To Prevent Fraud: The IMEI number and other device information help us detect and prevent unauthorized access and fraudulent activities." />
          </ListItem>
        </List>
      </Box>

      {/* Legal Basis */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: "#000" }}
        >
          Legal Basis for Processing
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1">
          We will process your personal data based on the following legal
          grounds:
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Paper elevation={2} sx={{ p: 2, flex: 1, minWidth: 250 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Consent
            </Typography>
            <Typography variant="body2">
              We may process your information if you have given us clear consent
              to do so for a specific purpose.
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ p: 2, flex: 1, minWidth: 250 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Performance of a Contract
            </Typography>
            <Typography variant="body2">
              Processing your information is necessary for the performance of a
              contract with you or to take steps at your request before entering
              into a contract.
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ p: 2, flex: 1, minWidth: 250 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Legitimate Interests
            </Typography>
            <Typography variant="body2">
              We may process your information when it is reasonably necessary to
              achieve our legitimate business interests.
            </Typography>
          </Paper>
        </Box>
      </Box>

      {/* Data Sharing */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: "#000" }}
        >
          Data Sharing
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1">
          We do not sell or rent your personal information to third parties.
          However, we may share your information with:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Service Providers"
              secondary="Third-party companies that assist us in operating our app, providing services, or conducting our business (e.g., cloud storage providers, analytics services). These parties are obligated to keep your information confidential and use it only for the purposes we specify."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Compliance with Law"
              secondary="We may disclose your information when required by law or to protect our rights, privacy, safety, or property, or that of others."
            />
          </ListItem>
        </List>
      </Box>

      {/* Data Security */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: "#000" }}
        >
          Data Security
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1">
          We take appropriate security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction. These measures include encryption, secure servers, and
          access controls.
        </Typography>
        <Typography variant="body1">
          However, please be aware that no method of transmission over the
          Internet or method of electronic storage is 100% secure, and we cannot
          guarantee its absolute security.
        </Typography>
      </Box>

      {/* User Rights */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: "#000" }}
        >
          Your Rights
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1">
          Depending on your location, you may have the following rights
          regarding your personal data:
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Right to Access
            </Typography>
            <Typography variant="body2">
              Request copies of your personal data.
            </Typography>
          </Paper>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Right to Rectification
            </Typography>
            <Typography variant="body2">
              Request correction of inaccurate or incomplete information.
            </Typography>
          </Paper>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Right to Erasure
            </Typography>
            <Typography variant="body2">
              Request deletion of your personal data under certain conditions.
            </Typography>
          </Paper>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Right to Object
            </Typography>
            <Typography variant="body2">
              Object to our processing of your personal data under certain
              conditions.
            </Typography>
          </Paper>
          <Paper
            elevation={1}
            sx={{ p: 2, gridColumn: { xs: "1", sm: "1 / -1" } }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Right to Data Portability
            </Typography>
            <Typography variant="body2">
              Request transfer of your data to another organization or directly
              to you.
            </Typography>
          </Paper>
        </Box>
      </Box>

      {/* Cookies */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: "#000" }}
        >
          Cookies and Tracking Technologies
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1">
          Smart Guard may use cookies and similar tracking technologies to
          enhance your experience. Cookies are small files that are placed on
          your device. You can choose to accept or decline cookies through your
          device settings. However, declining cookies may prevent you from
          taking full advantage of the app.
        </Typography>
      </Box>

      {/* Policy Changes */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: "#000" }}
        >
          Changes to This Privacy Policy
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
          Changes to this Privacy Policy are effective when they are posted on
          this page.
        </Typography>
      </Box>

      {/* Contact */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: "#000" }}
        >
          Contact Us
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact
          us:
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          href="mailto:support@smartguard.com"
          sx={{ mt: 1 }}
        >
          Email: support@smartguard.com
        </Button>
      </Box>

      {/* Back to Login */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Link href="./login">
          <Button
            variant="outlined"
            color="primary"
            size="small"
            sx={{
              px: 4,
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            Back to Login
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default PrivacyPolicy;
