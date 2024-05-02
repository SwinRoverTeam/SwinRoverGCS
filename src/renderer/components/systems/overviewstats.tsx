import { Typography } from '@mui/material';
import {Table } from '@mui/joy';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Divider, Grid, List, ListItem } from '@mui/joy';
import Card from '@mui/joy/Card';



export default function OverStats() {
    return  <Grid container spacing={2} sx={{
        display: 'grid',
        gridTemplateColumns: { md: '1fr 1fr' },
        
        height: '100%',
      }}>
      <Card sx={{py: 1}}>              
          <Grid container spacing={2} sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            gridTemplateRows: { md: '1fr 1fr' },
            height: '100%',
            my: 0
          }}>
            <Card>
              <Typography variant="h5" component="div">
                Conn
              </Typography>
                <Table>
                  <tbody>
                    <tr>
                      <td>Signal:</td>
                      <td>80%</td>
                    </tr>
                    <tr>
                      <td>RSSI:</td>
                      <td>30db</td>
                    </tr>
                    </tbody>
                </Table>
            </Card>

            <Card>
              <Typography variant="h5" component="div">
                Battery
              </Typography>
              <Table>
                  <tbody>
                    <tr>
                      <td>Charge:</td>
                      <td>20%</td>
                    </tr>
                    <tr>
                      <td>Voltage:</td>
                      <td>18 V</td>
                    </tr>
                    <tr>
                      <td>Current:</td>
                      <td>2 A</td>
                    </tr>
                    <tr>
                      <td>Temp:</td>
                      <td>30 C</td>
                    </tr>
                    </tbody>
                </Table>
            </Card>
            <Card>
              <Typography variant="h5" component="div">
                Drive Motors
              </Typography>
              <Table>
                  <tbody>
                    <tr>
                      <td>FR:</td>
                      <td>2A</td>
                    </tr>
                    <tr>
                      <td>FL:</td>
                      <td>3A</td>
                    </tr>
                    <tr>
                      <td>RR:</td>
                      <td>2A</td>
                    </tr>
                    <tr>
                      <td>RL:</td>
                      <td>3A</td>
                    </tr>
                    </tbody>
                </Table>
            </Card>
            <Card>
              <Typography variant="h5" component="div">
                Steering Motors
              </Typography>
              <Table>
              <tbody>
                    <tr>
                      <td>FR:</td>
                      <td>2A</td>
                    </tr>
                    <tr>
                      <td>FL:</td>
                      <td>3A</td>
                    </tr>
                    <tr>
                      <td>RR:</td>
                      <td>2A</td>
                    </tr>
                    <tr>
                      <td>RL:</td>
                      <td>3A</td>
                    </tr>
                    </tbody>
                </Table>
            </Card>
          </Grid>
      </Card>
      <Card >
        
          <Typography variant="h5" component="div">
            Drive Modes
          </Typography>
          <Table>
              <tbody>
                    <tr>
                      <td>Payload Mode</td>
                      <td>
                      <Select defaultValue="none">
                        <Option value="none">None</Option>
                        <Option value="armp">Arm</Option>
                        <Option value="sci">Science</Option>
                        <Option value="exc">Excavator</Option>
                      </Select>
                      </td>
                    </tr>
                    <tr>
                      <td>Power Mode</td>
                      <td>
                      <ToggleButtonGroup>
                          <Button>Low</Button>
                          <Button>Bal</Button>
                          <Button>High</Button>
                        </ToggleButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>Autonomous Kill Switch</td>
                      <td>
                        <Switch sx={{my: 1}} />
                        </td>
                    </tr>
                    
                    </tbody>
                </Table>
                <Divider />
                <Typography variant="h5" component="div">
                  Motor Drive
                </Typography>
                <Table>
                <tbody>
                    <tr>
                      <td>Torque Level</td>
                      <td><Slider
                      aria-label="Small steps"
                      defaultValue={1}
                      step={1}
                      marks
                      min={1}
                      max={10}
                      valueLabelDisplay="auto"
                    /></td>
                    </tr>
                    <tr>
                      <td>Steering Mode</td>
                      <td>
                        <ToggleButtonGroup>
                          <Button>Crab</Button>
                          <Button>FS</Button>
                          <Button>Forklift</Button>
                        </ToggleButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>Traction Control</td>
                      <td>
                        <ToggleButtonGroup>
                          <Button>Enable</Button>
                          <Button>Disable</Button>
                        </ToggleButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>Full Boar</td>
                      <td>
                        <ToggleButtonGroup>
                          <Button>Enable</Button>
                          <Button>Disable</Button>
                        </ToggleButtonGroup>
                      </td>
                    </tr>
                    
                    </tbody>
                </Table>
      </Card>
      </Grid>
}