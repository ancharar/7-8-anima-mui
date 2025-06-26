import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Стилизованный компонент для текста описания с нужным цветом
const StyledTypography = styled(Typography)({
  color: '#233644',
  textAlign: 'justify',
  marginBottom: 12,
  '&:last-child': {
    marginBottom: 0,
  },
});

// Типизация пропсов
interface ComponentProps {
  movies: {
    img: string;
    title: string;
    description: string[];
  } | undefined;
  cardIndex: number;
}

function MovieCard({ movies, cardIndex }: ComponentProps) {
  if (!movies) {
    return (
      <Card sx={{ padding: 2, margin: 2 }}>
        <Typography color="error">Ошибка: данные о фильме не найдены.</Typography>
      </Card>
    );
  }

  const isEven = cardIndex % 2 === 0;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        marginBottom: 3,
        height: 320,
        backgroundColor: '#E6ECDE',
        overflow: 'hidden',
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        alt={movies.title}
        image={movies.img}
        sx={{
          width: 250,
          height: '100%',
          objectFit: 'cover',
          flexShrink: 0,
          borderRadius: '8px 0 0 8px',
        }}
      />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 2,
          overflow: 'auto',
        }}
      >
        <CardContent sx={{ padding: 0 }}>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ color: '#233644', fontWeight: 'bold' }} // Жирный заголовок
          >
            {movies.title}
          </Typography>
          {Array.isArray(movies.description) &&
            movies.description.map((item, ind) => (
              <StyledTypography key={ind} variant="body2">
                {item}
              </StyledTypography>
            ))}
        </CardContent>
        <CardActions sx={{ justifyContent: isEven ? 'end' : 'start', padding: 0 }}>
          <Button
            size="small"
            sx={{ 
              color: '#233644',  // Цвет текста кнопки
              backgroundColor: 'transparent', // Убираем фон
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: 'rgba(35, 54, 68, 0.25)', // Легкий прозрачный эффект при наведении
                boxShadow: 'none',
              }
            }}
          >
            Подробнее
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default MovieCard;
