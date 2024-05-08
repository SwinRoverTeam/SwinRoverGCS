import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Grid from '@mui/joy/Grid';
import DriveTable from './Drivetable';

export default function Drivetrain() {
    return <Grid container spacing={2} sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            height: '100%',
          }}>
      <Card>   
        <Box sx={{width: '100%'}}>
          <DriveTable></DriveTable>
        </Box>
      </Card>
      <Card >
        <Box sx={{width: '100%'}}>
          <h3></h3>
          <p>Drive Motors are responsible for moving the robot.</p>
        </Box>
      </Card>
      
    </Grid>
}