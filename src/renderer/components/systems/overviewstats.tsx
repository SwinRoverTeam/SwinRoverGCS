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
    return (             
          <Grid container spacing={2} sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr 1fr 1fr' },
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
                      <td>18V</td>
                      <td>2A</td>
                    </tr>
                    <tr>
                      <td>FL:</td>
                      <td>18V</td>
                      <td>2A</td>
                    </tr>
                    <tr>
                      <td>RR:</td>
                      <td>18V</td>
                      <td>2A</td>
                    </tr>
                    <tr>
                      <td>RL:</td>
                      <td>18V</td>
                      <td>2A</td>
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
                      <td>18V</td>
                      <td>2A</td>
                    </tr>
                    <tr>
                      <td>FL:</td>
                      <td>18V</td>
                      <td>2A</td>
                    </tr>
                    <tr>
                      <td>RR:</td>
                      <td>18V</td>
                      <td>2A</td>
                    </tr>
                    <tr>
                      <td>RL:</td>
                      <td>18V</td>
                      <td>2A</td>
                    </tr>
                    </tbody>
                </Table>
            </Card>
            <Card>
              <Typography variant="h5" component="div">
                Jetson
              </Typography>
              <Table>
              <tbody>
                    <tr>
                      <td>CPU Load:</td>
                      <td>20%</td>
                    </tr>
                    <tr>
                      <td>Current Mode:</td>
                      <td>1B</td>
                    </tr>
                    <tr>
                      <td>Temp:</td>
                      <td>50 C</td>
                    </tr>
                    <tr>
                      <td>Current:</td>
                      <td>3A</td>
                    </tr>
                    </tbody>
                </Table>
            </Card>
            <Card>
              <Typography variant="h5" component="div">
                Payload
              </Typography>
              <Table>
              <tbody>
                    <tr>
                      <td>Mode:</td>
                      <td>Arm</td>
                    </tr>
                    <tr>
                      <td>Active:</td>
                      <td>Sleep</td>
                    </tr>
                    <tr>
                      <td>Temp:</td>
                      <td>50 C</td>
                    </tr>
                    <tr>
                      <td>Current:</td>
                      <td>3A</td>
                    </tr>
                    </tbody>
                </Table>
            </Card>
        <Card >
        </Card>
        <Card >
        </Card>
      </Grid>
    )
}