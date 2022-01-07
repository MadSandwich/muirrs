import React from "react";
import { Box, Container, Typography } from "@mui/material";
import hero_seo from "../img/hero_seo.svg";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Helmet>
        <title>RRStudio contact page</title>
        <meta name="description" content="Description for contact page" />
      </Helmet>
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography align="center" color="textPrimary" variant="h1">
            Rise Rise Studio
          </Typography>
          <Typography align="center" color="textPrimary" variant="h4">
            Contact
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <img
              alt="SEO"
              src={hero_seo}
              style={{
                marginTop: 50,
                display: "inline-block",
                maxWidth: "100%",
                width: 560,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
