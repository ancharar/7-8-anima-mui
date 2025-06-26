import buildings from "../../table";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';

function MoviesGrid() {
    const rows: GridRowsProp = buildings;
    const columns: GridColDef[] = [
        {
            field: 'Название'
            , headerName: 'Название'
            , flex: 1
        },
        {
            field: 'Жанр'
            , flex: 0.5
        },
        {
            field: 'Студия'
            , flex: 0.5
        },
        {
            field: 'Город'
            , flex: 0.5
        },
        { field: 'Год' },
        { field: 'Рейтинг' },
    ];
    return (
        <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                showToolbar={true}
                rows={rows}
                columns={columns}
            />
        </Container>
    );
}
export default MoviesGrid;