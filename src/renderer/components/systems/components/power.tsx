import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Grid from '@mui/joy/Grid';
import PowerTable from './Powertable';
import PowerLevels  from './PowerLevels';
export default function Power() {
    return <Grid container spacing={2} sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            height: '100%',
          }}>
      <Card>   
        <Box sx={{width: '100%'}}>
          
          <PowerTable></PowerTable>
        </Box>
      </Card>
      <Card >
        <Box sx={{width: '100%'}}>
          <PowerLevels/>
        </Box>
      </Card>
      
    </Grid>
}