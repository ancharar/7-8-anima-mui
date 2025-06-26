import { useParams, Link } from 'react-router-dom';
import structures from '../data';
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Paper from '@mui/material/Paper';

function Movies() {
  const { id } = useParams();
  const movie = structures[Number(id)];

  if (!movie) {
    return (
      <Container>
        <Navbar active="1" />
        <Typography variant="h4" sx={{ mt: 4, color: '#233644' }}>
          Мультфильм не найдено
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Navbar active="1" />
      <Container maxWidth="md" sx={{ mt: 3 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#2183A6' }}>
            Главная
          </Link>
          <Typography color="text.primary" sx={{ color: '#233644' }}>
            {movie.title}
          </Typography>
        </Breadcrumbs>
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, md: 4 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 3,
            color: '#233644',           // Цвет текста
            backgroundColor: '#E6ECDE', // Фон карточки
          }}
        >
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: 320 } }}>
            <img
              src={movie.img}
              alt={movie.title}
              style={{ width: '100%', borderRadius: 8, objectFit: 'cover' }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom sx={{ color: '#233644', fontWeight: 'bold' }}>
              {movie.title}
            </Typography>
            {movie.description.map((desc, i) => (
              <Typography key={i} variant="body1" paragraph sx={{ color: '#233644' }}>
                {desc}
              </Typography>
            ))}
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Movies;
