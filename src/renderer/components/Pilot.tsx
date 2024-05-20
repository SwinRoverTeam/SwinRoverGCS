import React from 'react';
import Card from '@mui/joy/Card';
import { Button, CardActions, Grid, Skeleton, Stack, Table, Typography } from '@mui/joy';
import Drivesystem from './pilot/Drivesystem';
import Gimbal from './pilot/Gimbal';
import Chip from '@mui/joy/Chip';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import BlockIcon from '@mui/icons-material/Block';

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
          <Stack spacing={2} direction='row'>
            <Card sx={{width: '50%'}}>
              <Typography level="title-lg">Master Camera</Typography>
              <Skeleton variant="rectangular" width={600} height={400} />
            </Card>
            <Card sx={{width: '50%'}}>
              <Typography level="title-lg">Mapping</Typography>
              <Skeleton variant="rectangular" width={575} height={400} />
            </Card>

          </Stack>
          <Stack spacing={2} direction='row'>
            <Card>
              <Typography level="title-lg">Right</Typography>
              <Skeleton variant="rectangular" width={200} height={180} />
            </Card>
            <Card>
              <Typography level="title-lg">Left</Typography>
              <Skeleton variant="rectangular" width={200} height={180} />
            </Card>
            <Card>
              <Typography level="title-lg">Front Wheels</Typography>
              <Skeleton variant="rectangular" width={200} height={180} />
            </Card>
            <Card>
              <Typography level="title-lg">Rear Wheels</Typography>
              <Skeleton variant="rectangular" width={200} height={180} />
            </Card>
            <Card>
              <Typography level="title-lg">Payload</Typography>
              <Skeleton variant="rectangular" width={200} height={180} />
            </Card>
            </Stack>
        </Card>
        <Card sx={{ 
           gridArea: 'roverstat1' ,
          position: 'absolute', // Add this line
          right: 0, // Add this line
          width: '25%', // Add this line
          height: '75%', // Add this line
        }}>
          <Stack spacing={2} sx={{alignItems: 'center'}}>
            <Typography level="title-lg">Dynamic Systems</Typography>
            <Drivesystem />
            <Card sx={{width: '100%', height: '100%'}}>
              <Stack spacing={2} direction='row'>
                <Card sx={{width: '50%'}}><Gimbal /></Card>
                <Stack spacing={2}>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Pitch</td>
                        <td>10 deg</td>
                      </tr>
                      <tr>
                        <td>Roll</td>
                        <td>-0.2 deg</td>
                      </tr>
                      <tr>
                        <td>Yaw</td>
                        <td>0 deg</td>
                      </tr>
                    </tbody>
                  </Table>
                </Stack>
              </Stack>
              
            </Card>

          </Stack>
        </Card>
       
        <Card 
        sx={{ 
          gridArea: 'roverstat2',
          position: 'absolute', // Add this line
          top: '80%', // Adjust this line to set the top location
          bottom: 0, // Add this line
          right: 0, // Add this line
          left: 140, // Add this line
          width: '92%', // Add this line
        }}>
          <Stack spacing={2} direction='row'>
            <Table>
              <tbody>
                <tr>
                  <td>Power</td>
                  <td><Chip
                    variant="soft"
                    size="sm"
                    startDecorator=
                        {<CheckRoundedIcon />}
                    color= 'success'
                  >Ready
                  </Chip></td>
                </tr>
                <tr>
                  <td>Payload</td>
                  <td><Chip
                    variant="soft"
                    size="sm"
                    startDecorator=
                        {<AutorenewRoundedIcon />}
                    color= 'warning'
                  >Issues Present
                  </Chip></td>
                </tr>
                <tr>
                  <td>Comms</td>
                  <td><Chip
                    variant="soft"
                    size="sm"
                    startDecorator=
                        {<BlockIcon />}
                    color= 'danger'
                  >Fail
                  </Chip></td>
                </tr>
                <tr>
                  <td>Drivetrain</td>
                  <td><Chip
                    variant="soft"
                    size="sm"
                    startDecorator=
                        {<BlockIcon />}
                    color= 'warning'
                  >Issues Present
                  </Chip></td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <td>CANBus</td>
                  <td><Chip
                    variant="soft"
                    size="sm"
                    startDecorator=
                        {<CheckRoundedIcon />}
                    color= 'success'
                  >Ready
                  </Chip></td>
                </tr>
                <tr>
                  <td>RCU</td>
                  <td><Chip
                    variant="soft"
                    size="sm"
                    startDecorator=
                        {<AutorenewRoundedIcon />}
                    color= 'warning'
                  >Issues Present
                  </Chip></td>
                </tr>
                <tr>
                  <td>Autonomous</td>
                  <td><Chip
                    variant="soft"
                    size="sm"
                    startDecorator=
                        {<BlockIcon />}
                    color= 'danger'
                  >Fail
                  </Chip></td>
                </tr>
                <tr>
                  <td>Video and Sensors</td>
                  <td><Chip
                    variant="soft"
                    size="sm"
                    startDecorator=
                        {<BlockIcon />}
                    color= 'warning'
                  >Issues Present
                  </Chip></td>
                </tr>
              </tbody>
            </Table>
            <Card sx={{width: '100%'}}>
              <Typography level="title-lg">Controls</Typography>
              <CardActions>
                <Button  color="success">Lock Drivetrain</Button>
                <Button  color="warning">Co-op Mode</Button>
                <Button  color="danger">Enable Autonomous</Button>
              </CardActions>
              <CardActions>
                <Button  color="success">Next Camera</Button>
                <Button  color="danger">Prev Camera</Button>
                <Button  color="warning">Capture</Button>
                <Button  color="danger">Record</Button>
              </CardActions>
            </Card>
            <Card sx={{width: '50%'}}>
              <Typography level="title-lg">Startup</Typography>
              <CardActions>
                <Button  color="success">Preflight</Button>
                <Button  color="danger">Start</Button>
                <Button  color="warning">Stop</Button>
              </CardActions>
            </Card>
          </Stack>

        </Card>
      </Grid>
    )
}
    