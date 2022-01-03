import React from "react";
import { Box, Container, Typography } from "@mui/material";
import hero_seo from "../img/hero_seo.svg";

export default function Main() {
  return (
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%'
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            align="center"
            color="textPrimary"
            variant="h1"
          >
            Rise Rise Studio
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="h4"
          >
            Полноценный комплекс услуг по продвижению вашего ресурса!
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <img
              alt="SEO"
              src={hero_seo}
              style={{
                marginTop: 50,
                display: 'inline-block',
                maxWidth: '100%',
                width: 560
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
