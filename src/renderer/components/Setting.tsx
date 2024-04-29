import React from 'react';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import { Divider, Grid, Typography } from '@mui/joy';
export default function Setting(){
    return (
        <div>
            <Grid container spacing={2} sx={{
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr 1fr' },
                height: '100%', 
                mx: '10',
                px: { xs: 2, md: 2 },
                py: { xs: 0, md: 0 },
                }}>
                    <Card sx={{
                        width: '33vw',
                        my: '20px',
                        height: '40vh',
                    }}>
                        <Typography level="h2" component="h4"> Info </Typography>
                        <Divider />
                        <Typography component="h5"> Status:</Typography> 
                        <Typography component="h5"> IP Address:</Typography>
                    </Card>
                    <Card sx={{
                        width: '33vw',
                        my: '20px',
                        height: '40vh',
                    }}>
                        <Typography level="h2" component="h4"> Settings </Typography>
                        <Divider />
                        
                        <Typography component="h5"> IP Address:</Typography>
                    </Card>
                
                
                    <Card sx={{
                        width: '33vw',
                        my: '20px',
                        height: '40vh',
                    }}>
                        <Typography level="h2" component="h4"> Dev Tools </Typography>
                        <Divider />
                        <Button variant="contained" color="primary">
                            Button 1
                        </Button>
                        <Button variant="contained" color="secondary">
                            Button 2
                        </Button>
                    </Card>
                
            </Grid>
        </div>
    );
};

