import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Pilot from './Pilot';
import Systems from './System';
import Payloads from './Payloads';

interface ViewProps {
  viewType: 'pilot' | 'systems' | 'payloads';
}

export default function View({ viewType }: ViewProps) {
  return (
    <Box sx={{ flex: 1, width: '100%', mt:0 }}>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: 0, md: -0 , lg: -0 },
          bgcolor: 'rgba(200, 10, 70, 0.5)', 
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 0, md: 100 } }}>
          <Typography level="h2" component="h1" sx={{ mt: 0, mb: 0 }}>
          {viewType === 'pilot' ? 'Pilot' : viewType === 'systems' ? 'Systems' : viewType === 'payloads' ? 'Payloads' : 'Unknown'}
          </Typography>
        </Box>
      </Box>
      {viewType === 'pilot' && <Pilot />}
      {viewType === 'systems' && <Systems />}
      {viewType === 'payloads' && <Payloads />}
    </Box>
  );
}