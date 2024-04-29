import React from 'react';
import Card from '@mui/joy/Card';
import { Grid } from '@mui/joy';

export default function Payloads(){
    return (
        <Grid
        spacing={4}
        sx={{
          display: 'grid',
          gridTemplateAreas: {
            xs: `"personal" "bio" "portfolio"`,
            md: `"personal bio" "portfolio portfolio"`
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
           gridArea: 'personal' ,
          position: 'absolute', // Add this line
          left: 140, // Add this line
          width: '40%', // Add this line
          height: '55%', // Add this line
        }}>
        </Card>
        <Card sx={{ 
           gridArea: 'bio' ,
          position: 'absolute', // Add this line
          right: 0, // Add this line
          width: '45%', // Add this line
          height: '55%', // Add this line
        }}>
        </Card>
      </Grid>
    )
}
    