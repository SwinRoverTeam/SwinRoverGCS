import React from 'react';
import Card from '@mui/joy/Card';
import {Grid}  from '@mui/joy';
import Threewin from './systems/threewindow';
import OverStats from './systems/overviewstats';
import Terminals from './systems/terminals';


export default function Systems(){
    return (
        <Grid
        spacing={4}
        sx={{
          display: 'grid',
          gridTemplateAreas: {
            xs: `"WireOverview" "Stats" "terminals"`,
            md: `"WireOverview Stats" "terminals terminals"`
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
           gridArea: 'WireOverview' ,
          position: 'absolute', // Add this line
          left: 140, // Add this line
          width: '45%', // Add this line
          height: '50%', // Add this line
        }}>
          
            <Threewin />
        </Card>
        <Card sx={{ 
           gridArea: 'Stats' ,
          position: 'absolute', 
          right: 0, 
          width: '45%',
          height: '50vh', 
        }}>
          <OverStats />
        </Card>
        <Card 
        sx={{ 
          gridArea: 'terminals',
          position: 'absolute', // Add this line
          top: '55%', // Adjust this line to set the top location
          bottom: 0, // Add this line
          right: 0, // Add this line
          left: 140, // Add this line
          width: '92%', // Add this line
          display: 'flex',
        }}>
          <Terminals />
        </Card>
      </Grid>
    )
}
    