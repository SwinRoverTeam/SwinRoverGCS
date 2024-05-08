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
          xs: `"Models" "Camera" "Controls"`,
          md: `"Models Camera" "Controls"`
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
         gridArea: 'Models' ,
        position: 'absolute', // Add this line
        left: 140, // Add this line
        width: '42%', // Add this line
        height: '60%', // Add this line
      }}>
        
          
      </Card>
      <Card sx={{ 
         gridArea: 'Camera' ,
        position: 'absolute', 
        right: 0, 
        width: '50%',
        height: '60vh', 
      }}>
        
      </Card>
      <Card 
      sx={{ 
        gridArea: 'controls',
        position: 'absolute', // Add this line
        top: '65%', // Adjust this line to set the top location
        bottom: 0, // Add this line
        right: 0, // Add this line
        left: 140, // Add this line
        width: '92%', // Add this line
        display: 'flex',
      }}>
        <PayloadControls />
      </Card>
    </Grid>
  )
}
    