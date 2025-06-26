import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import { ruRU } from "@mui/x-data-grid/locales";
import { tGroup } from "../groupdata";

type GroupProps = {
    data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
    const columns: GridColDef[] = [
        { field: "Группа", headerName: "Группа", flex: 1 },
        { field: "Минимальный рейтинг", headerName: "Минимальный рейтинг", flex: 1 },
        { field: "Максимальный рейтинг", headerName: "Максимальный рейтинг", flex: 1 },
        { field: "Средний рейтинг", headerName: "Средний рейтинг", flex: 1 },
    ];

    const rows: GridRowsProp = data;

    return (
        <Container maxWidth="md" sx={{ height: '700px', mt: '20px' }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                showToolbar={true}
                rows={rows}
                columns={columns}
            />
        </Container>
    );
}

export default GroupGrid;