import { Box, Grid } from "@mui/material";
import EstateByTXCity from "../components/dashboard/EstateByTXCity";

export default function RealEstate() {
    return (
        <Box>
            <Grid item xs={12} lg={8}>
                <EstateByTXCity />
            </Grid>
        </Box>
    );
}