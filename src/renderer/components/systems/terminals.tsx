import { Divider, Grid, List, ListItem } from '@mui/joy';
import { Box } from '@mui/system';

export default function Terminals() {

    return <Grid container spacing={2} sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr 1fr' },
            height: '100%',
          }}>
                <Box
                  sx={{
                    mx: '0px',
                  height: '100%',
                  width: '50vw',
                  color: '#fff',
                  padding: '10px',
                  fontFamily: 'monospace',
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',}}
                > 
                  (Add a console input for MAVLINK etc)
                </Box>
                <Divider orientation="vertical" />
                <Box sx={{
                    mx: '0px',
                  height: '100%',
                  color: '#fff',
                  padding: '10px',
                  fontFamily: 'monospace',
                  whiteSpace: 'pre-wrap',
                  width: "50vw" }}>
                  Another terminal window (MONITOR CANBUS OR SOMETHING)
                </Box>
    </Grid>
}