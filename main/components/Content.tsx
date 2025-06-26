import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import structures from "../../data";
import MovieCard from "./MovieCard";

const cardData = [structures[0], structures[1], structures[2], structures[3]]

function Content() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={{ xs: 3, md: 6 }}>
                {cardData.map((item, index) => (
                    <Grid key={index} size={{ xs: 12, md: 6 }} >
                        <MovieCard movies={item} cardIndex={index} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Content;