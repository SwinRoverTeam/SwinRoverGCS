import React from 'react';
import Card from '@mui/joy/Card';
import { Grid } from '@mui/joy';

export default function Pilot(){
    return (
        <Grid
        spacing={4}
        sx={{
          display: 'grid',
          gridTemplateAreas: {
            xs: `"feed" "roverstat1" "roverstat2"`,
            md: `"feed roverstat1" "roverstat2 roverstat2"`
          },
          gridTemplateColumns: { md: '1fr 1fr' },
          gridTemplateRows: { md: '1fr 1fr 1fr' }, 
          height: '100%', 
          mx: '0',
          px: { xs: 2, md: 2 },
          py: { xs: 0, md: 0 },
        }}
      >
        <Card sx={{ 
           gridArea: 'feed' ,
          position: 'absolute', // Add this line
          left: 140, // Add this line
          width: '67%', // Add this line
          height: '75%', // Add this line
        }}>
        </Card>
        <Card sx={{ 
           gridArea: 'roverstat1' ,
          position: 'absolute', // Add this line
          right: 0, // Add this line
          width: '25%', // Add this line
          height: '75%', // Add this line
        }}>
        </Card>
        <Card 
        sx={{ 
          gridArea: 'roverstat2',
          position: 'absolute', // Add this line
          top: '80%', // Adjust this line to set the top location
          bottom: 0, // Add this line
          right: 0, // Add this line
          left: 140, // Add this line
          width: '100%', // Add this line
        }}>
        </Card>
      </Grid>
    )
}
    