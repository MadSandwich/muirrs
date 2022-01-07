import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import error_404 from "../img/404.svg";
import { Helmet } from "react-helmet";

export default function NotFound() {
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
        <title>RRStudio 404 page</title>
        <meta name="description" content="Description for 404 page" />
      </Helmet>
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <img
              alt="Страница не найдена или не существует"
              src={error_404}
              style={{
                marginTop: 50,
                marginBottom: 150,
                display: "inline-block",
                maxWidth: "100%",
                width: 560,
              }}
            />
          </Box>
          <Typography align="center" color="textPrimary" variant="h3">
            Страница на которую вы попытались перейти не найдена.
          </Typography>
          <Button
            href="/"
            startIcon={<ArrowBackIcon fontSize="small" />}
            sx={{ mt: 10 }}
            variant="contained"
          >
            Вернутся на главную
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
