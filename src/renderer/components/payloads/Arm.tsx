import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Card from '@mui/joy/Card';
import { Grid } from '@mui/joy';
import { Typography } from '@mui/material';
import {Table } from '@mui/joy';

export default function Arm() {
    return (
        <Grid container spacing={2} sx={{width: '100%', height: '100%',
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            gridTemplateRows: { md: '1fr 1fr' },
           }}>
            <Card>
                <Typography  component="h3">
                    Arm Manipulators
                </Typography>
                <Table>
                  <tbody>
                    <tr>
                      <td>Enable:</td>
                      <td><Switch /></td>
                    </tr>
                    <tr>
                      <td>Gripper</td>
                      <td><Slider
                      aria-label="Small steps"
                      defaultValue={0}
                      step={1}
                      marks
                      min={1}
                      max={90}
                      valueLabelDisplay="auto"
                    />  </td>
                    </tr>
                    <tr>
                        <td>Wrist</td>
                        <td><Slider
                        aria-label="Small steps"
                        defaultValue={0}
                        step={1}
                        marks
                        min={-180}
                        max={180}
                        valueLabelDisplay="auto"
                        /></td>
                    </tr>
                    <tr>
                        <td>Elbow</td>
                        <td><Slider
                        aria-label="Small steps"
                        defaultValue={0}
                        step={1}
                        marks
                        min={-180}
                        max={180}
                        valueLabelDisplay="auto"
                        /></td>
                    </tr>
                    <tr>
                        <td>Shoulder</td>
                        <td><Slider
                        aria-label="Small steps"
                        defaultValue={0}
                        step={1}
                        marks
                        min={-180}
                        max={180}
                        valueLabelDisplay="auto"
                        /></td>
                    </tr>
                    <tr>
                        <td>Base</td>
                        <td><Slider
                        aria-label="Small steps"
                        defaultValue={0}
                        step={1}
                        marks
                        min={-180}
                        max={180}
                        valueLabelDisplay="auto"
                        /></td>
                    </tr>
                    </tbody>
                </Table>
            </Card>
            <Card>
                <Switch />
                <Slider
                      aria-label="Small steps"
                      defaultValue={1}
                      step={1}
                      marks
                      min={1}
                      max={10}
                      valueLabelDisplay="auto"
                    />  
            </Card>                
        </Grid>
          
      )
}