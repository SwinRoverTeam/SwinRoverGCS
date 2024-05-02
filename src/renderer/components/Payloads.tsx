import React from 'react';
import Card from '@mui/joy/Card';
import { Grid } from '@mui/joy';
import PayloadControls from './payloads/PayloadControls';
export default function Payloads(){
    return (
        <Grid
        spacing={4}
        sx={{
          display: 'grid',
          gridTemplateAreas: {
            xs: `"3dWindow" "controls" `,
            md: `"3dWindow controls" `
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
           gridArea: '3dWindow' ,
          position: 'absolute', // Add this line
          left: 140, // Add this line
          width: '45%', // Add this line
          height: '55%', // Add this line
        }}>
        </Card>
        <Card sx={{ 
           gridArea: 'controls' ,
          position: 'absolute', // Add this line
          right: 0, // Add this line
          width: '45%', // Add this line
          height: '55%', // Add this line
        }}>
          <PayloadControls/>
        </Card>
      </Grid>
    )
}
    