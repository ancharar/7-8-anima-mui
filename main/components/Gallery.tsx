import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import structures from "../../data";

// Убираем последний элемент (как ты делал раньше)
const imgData = structures;

function Gallery() {
  const [index, setIndex] = useState(0);
  const maxIndex = imgData.length - 1;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const currentItem = imgData[index];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "80vh",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 3,
          bgcolor: "#f0f0f0",
        }}
      >
        {/* Левая кнопка */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 16,
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.7)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Картинка со ссылкой */}
        <Link to={`/moives/${index}`} style={{ textDecoration: "none" }}>
          <Box
            component="img"
            src={currentItem.img}
            alt={currentItem.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Link>

        {/* Правая кнопка */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 16,
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.7)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Подпись */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            py: 2,
            px: 3,
            background: "rgba(0,0,0,0.5)",
            color: "white",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            {currentItem.title}
          </Typography>
          {currentItem.description && (
            <Typography variant="body2">{currentItem.description}</Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default Gallery;
