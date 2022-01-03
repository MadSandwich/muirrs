import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import error_404 from '../img/404.svg';

export default function NotFound() {
    return (
    <Box
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
            variant="h4"
          >
            Страница на которую вы попытались перейти не найдена.
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <img
              alt="Страница не найдена или не существует"
              src={error_404}
              style={{
                marginTop: 50,
                display: 'inline-block',
                maxWidth: '100%',
                width: 560
              }}
            />
          </Box>
            <Button
              href="/"
              startIcon={(<ArrowBackIcon fontSize="small" />)}
              sx={{ mt: 3 }}
              variant="contained"
            >
              Вернутся на главную
            </Button>
        </Box>
      </Container>
    </Box>
);
            }