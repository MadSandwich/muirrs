import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Gallery from "./Gallery";
import { Helmet } from "react-helmet";

export default function Portfolio() {
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
        <title>RRStudio portfolio page</title>
        <meta name="description" content="Description for portfolio page" />
      </Helmet>
      <Container maxWidth="xl">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography align="center" color="textPrimary" variant="h1">
            Портфолио
          </Typography>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Gallery />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
