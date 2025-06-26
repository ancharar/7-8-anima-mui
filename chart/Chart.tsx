import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GroupGrid from "./components/GroupGrid";
import { directors, years, types } from "./groupdata"; 
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import GroupChart from "./components/GroupChart";

type tSelect = "Режиссер" | "Год" | "Жанр";

function Chart() {
    const [group, setGroup] = React.useState<tSelect>("Режиссер");
    const [groupData, setGroupData] = React.useState(directors);

    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value as tSelect;
        setGroup(value);
        if (value === "Режиссер") {
            setGroupData(directors);
        } else if (value === "Год") {
            setGroupData(years);
        } else if (value === "Жанр") {
            setGroupData(types); 
        }
    }

    return (
        <>
            <Navbar active="3" />
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Box sx={{ width: "200px", m: "auto", mb: 4 }}>
                    <FormControl fullWidth>
                        <InputLabel id="select-group-label">Группировать по</InputLabel>
                        <Select
                            labelId="select-group-label"
                            id="select-group"
                            value={group}
                            label="Группировать по"
                            onChange={handleChange}
                        >
                            <MenuItem value="Режиссер">Режиссеру</MenuItem>
                            <MenuItem value="Год">Году</MenuItem>
                            <MenuItem value="Жанр">Жанру</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <GroupChart data={groupData} />
                <GroupGrid data={groupData} />
            </Container>
        </>
    );
}

export default Chart;